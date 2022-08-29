import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Comment from "../Comment/Comment";

import { addMessage } from "../../features/messages/index";
import { getKoreanDateAndTime } from "../../utils/getDateAndTime";

import { ENTER_MESSAGE, SEND } from "../../constants/ui";
import { GREY_50 } from "../../constants/colors";

export default function Chatroom() {
  const { friendId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [allComments, setAllComments] = useState([]);

  const allCommentsIds = useSelector(state => state.messages.friends).byId[friendId].comments;
  const allCommentsObj = useSelector(state => state.messages.comments.byId);

  const dispatch = useDispatch();

  useEffect(() => {
    const initialMessages = [];

    allCommentsIds.map((commentId) => {
      initialMessages.push(allCommentsObj[commentId]);
    });

    setAllComments(initialMessages);
  }, []);

  const handleSubmit = (e) => {
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

    setAllComments((prev) => [...prev, newMessageInformation]);

    dispatch(addMessage(friendId, newMessageInformation));
  };

  return (
    <Container>
      <Wrapper>
        <CommentsWrapper>
          {allComments.map((comment) => (
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
          <input type="submit" value={SEND} />
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
