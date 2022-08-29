import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import getFormattedDateAndTime from "../../utils/getFormattedDateAndTime";

export default function ChatroomItem({ id, profile, name, lastMessage, createdAt }) {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/rooms/${id}`)}>
      <ProfileWrapper>
        <img src={profile} alt="profile" width="20" height="20" />
        <div>{name}</div>
      </ProfileWrapper>
      <MessageWrapper>
        <div>{lastMessage.length > 30 ? lastMessage.slice(0, 30) + "..." : lastMessage}</div>
        <div>{getFormattedDateAndTime(createdAt)}</div>
      </MessageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 500px;
  height: 40px;
  background-color: #ECECEC;
  border-radius: 8px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 150px;
  
  > * {
    margin-left: 10px;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  
  width: 350px;
  > * {
    margin-right: 10px;
  }
`;
