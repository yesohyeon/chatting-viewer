import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import Comment from "../Comment/Comment";

import { addMessage } from "../../features/friends/actions";

export default function Chatroom() {
  const { friendId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [allComments, setAllComments] = useState([]);

  const allCommentsIds = useSelector(state => state.friends.friends).byId[friendId].comments;
  const comments = useSelector(state => state.friends.comments.byId);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialMessages = [];
    allCommentsIds.map((commentId) => {
      initialMessages.push(comments[commentId]);
    });

    setAllComments(initialMessages);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageInformation = {
      id: Math.random().toString(36).substr(2, 16),
      author: "Me",
      comment: newMessage,
      createdAt: new Date().toISOString(),
    };

    setAllComments((prev) => [...prev, messageInformation]);

    dispatch(addMessage(friendId, messageInformation));
  };

  return (
    <Container>

      <Wrapper>
        <CommentsWrapper>
          {allComments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                name={comment.author}
                comment={comment.comment}
                createdAt={comment.createdAt}
              />
            );
          })}
        </CommentsWrapper>
        <MessageForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="메세지를 입력해주세요"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <input type="submit" value="Send"/>
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
  height: 600px;
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 500px;
`;

const MessageForm = styled.form`
  display: flex;
  justify-content: center;
  width: 600px;
  height: 30px;
`;
