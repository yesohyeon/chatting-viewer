import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import { TALK } from "../../constants/ui";
import Comment from "../Comment/Comment";

export default function Friend({ id, profile, name }) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ProfileWrapper>
        <img src={profile} alt="profile" width="20" height="20" />
        <div>{name}</div>
      </ProfileWrapper>
      <button onClick={() => navigate(`/rooms/${id}`)}>{TALK}</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

Friend.propTypes = {
  id: PropTypes.string.isRequired,
  profile: PropTypes.string,
  name: PropTypes.string.isRequired,
};

