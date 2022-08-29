import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function Friend({ id, profile, name }) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ProfileWrapper>
        <img src={profile} alt="profile" width="20" height="20" />
        <div>{name}</div>
      </ProfileWrapper>
      <button onClick={() => navigate(`/rooms/${id}`)}>대화하기</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  width: 200px;
  height: 20px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 65%;
  > * {
    margin-right: 10px;
  }
`;
