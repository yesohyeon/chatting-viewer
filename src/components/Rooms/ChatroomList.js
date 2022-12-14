import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import ChatroomItem from "./ChatroomItem";
import Chatroom from "./Chatroom";

import { enterRoom } from "../../features/messages";
import { sortByDate } from "../../utils/sort";

export default function ChatroomList() {
  const allFriends = useSelector(state => state.messages.friends);
  const allFriendsInformation = Object.values(allFriends.byId);
  const chatroomList = allFriendsInformation.filter((room) => room.comments.length > 0);

  const comments = useSelector(state => state.messages.comments.byId);
  const sortedRoomListByDate = sortByDate(chatroomList, comments);

  const selectedRoomId = useSelector(state => state.messages.selectedRoomId);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!selectedRoomId && sortedRoomListByDate.map((room) => {
        const latestMessageId = room.comments[room.comments.length - 1];
        const lastMessage = comments[latestMessageId];

        return (
          <ChatroomItem
            key={room.id}
            profile={room.profile}
            name={room.name}
            lastMessage={lastMessage.comment}
            createdAt={lastMessage.createdAt}
            handleClick={() => dispatch(enterRoom(room.id))}
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
