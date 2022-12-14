import styled from "styled-components";
import PropTypes from "prop-types";

import { getFormattedDateAndTime } from "../../utils/getDateAndTime";
import { GREY_50 } from "../../constants/colors";

export default function ChatroomItem({
  profile,
  name,
  lastMessage,
  createdAt,
  handleClick
}) {
  return (
    <Wrapper onClick={handleClick}>
      <ProfileWrapper>
        <img src={profile} alt="profile" width="20" height="20" />
        <div>{name}</div>
      </ProfileWrapper>
      <MessageWrapper>
        <div>
          {lastMessage.length > 30 ? (
            lastMessage.slice(0, 30) + "..."
          ) : (
            lastMessage
          )}
        </div>
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
  border-radius: 8px;
  background-color: ${GREY_50};
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

ChatroomItem.propTypes = {
  profile: PropTypes.string,
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

