import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChatroomItem from "./ChatroomItem";
import Chatroom from "./Chatroom";
import { sortByDate } from "../../utils/sort";

export default function ChatroomList({ selectedRoomId, handleClick }) {
  const friendsList = useSelector(state => state.messages.friends);
  const friendsIds = [...friendsList.allIds];
  const allFriendsInformation = friendsIds.map((friendId) => friendsList.byId[friendId]);
  const chatroomList = allFriendsInformation.filter((item) => item.comments.length > 0);

  const comments = useSelector(state => state.messages.comments.byId);
  const sortedRoomsByDate = sortByDate(chatroomList, comments);

  return (
    <Wrapper>
      {!selectedRoomId && sortedRoomsByDate.map((room) => {
        const latestMessageId = room.comments[room.comments.length - 1];
        const lastMessage = comments[latestMessageId];

        return (
          <ChatroomItem
            key={room.id}
            profile={room.profile}
            name={room.name}
            lastMessage={lastMessage.comment}
            createdAt={lastMessage.createdAt}
            handleClick={() => handleClick(room.id)}
          />
        );
      })}
      {selectedRoomId && <Chatroom id={selectedRoomId} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

ChatroomList.propTypes = {
  selectedRoomId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
