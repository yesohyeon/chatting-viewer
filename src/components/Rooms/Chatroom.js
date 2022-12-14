import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import PropTypes from "prop-types";
import { ref, update, onValue } from "firebase/database";

import Comment from "../Comment/Comment";

import { database } from "../../firebase";
import { addMessage } from "../../features/messages/index";
import { getKoreanDateAndTime } from "../../utils/getDateAndTime";

import { ENTER_MESSAGE, SEND } from "../../constants/ui";
import { GREY_50 } from "../../constants/colors";

export default function Chatroom({ id }) {
  const [newMessage, setNewMessage] = useState("");
  const [chatroomComments, setChatroomComments] = useState([]);

  const [commentsInFirebase, setCommentsInFirebase] = useState([]);
  const [allIdsInFirebase, setAllIdsInFirebase] = useState([]);

  const commentsIdsInChatroom = useSelector(state => state.messages.friends).byId[id].comments;
  const allComments = useSelector(state => state.messages.comments.byId);

  const dispatch = useDispatch();

  useEffect(() => {
    const currentMessages = [];

    for (const commentId of commentsIdsInChatroom) {
      currentMessages.push(allComments[commentId]);
    }

    setChatroomComments(currentMessages);

    const commentsRef = ref(database, `friends/byId/${id}/comments`);
    const commentsAllIdsRef = ref(database, "comments/allIds");

    onValue(commentsRef, (snapshot) => {
      setCommentsInFirebase(JSON.parse(snapshot.val()));
    });

    onValue(commentsAllIdsRef, (snapshot) => {
      setAllIdsInFirebase(JSON.parse(snapshot.val()));
    })
  }, [commentsIdsInChatroom]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newMessage) {
      alert(ENTER_MESSAGE);

      return;
    }

    const newMessageInformation = {
      id: Math.random().toString(36).substr(2, 16),
      author: "Me",
      comment: newMessage,
      createdAt: getKoreanDateAndTime(),
    };

    const databaseRef = ref(database);
    const updates = {};

    const newCommentsArr = commentsInFirebase;
    const newAllIdsArr = allIdsInFirebase;

    newCommentsArr.push(newMessageInformation.id);
    newAllIdsArr.push(newMessageInformation.id);

    updates[`/comments/byId/${newMessageInformation.id}`] = newMessageInformation;
    updates[`/friends/byId/${id}/comments`] = JSON.stringify(newCommentsArr);
    updates[`/comments/allIds`] = JSON.stringify(newAllIdsArr);

    try {
      await update(databaseRef,  updates);

      setChatroomComments((prev) => [...prev, newMessageInformation]);

      dispatch(addMessage(id, newMessageInformation));

      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <CommentsWrapper>
          {chatroomComments.map((comment) => (
            <Comment
              key={comment.id}
              name={comment.author}
              comment={comment.comment}
              createdAt={comment.createdAt}
            />
          ))}
        </CommentsWrapper>
        <MessageForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={ENTER_MESSAGE}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <input type="submit" value={SEND} data-testid="send" />
        </MessageForm>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 650px;
  border-radius: 10px;
  background-color: ${GREY_50};
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 600px;
  height: 550px;
`;

const MessageForm = styled.form`
  display: flex;
  justify-content: center;
  width: 600px;
  height: 30px;
`;

Chatroom.propTypes = {
  id: PropTypes.string,
};
