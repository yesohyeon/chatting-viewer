import { useSelector } from "react-redux";

import styled from "styled-components";

import ChatroomItem from "./ChatroomItem";

export default function ChatroomList() {
  const friendsList = useSelector(state => state.messages.friends);
  const friendsIds = [...friendsList.allIds];
  const allFriendsInformation = friendsIds.map((friendId) => friendsList.byId[friendId]);
  const chatRoomsList = allFriendsInformation.filter((item) => item.comments.length > 0);
  const comments = useSelector(state => state.messages.comments.byId);

  const sortedRoomsByDate = chatRoomsList.sort((roomA, roomB) => {
    const lastestMessageIdA = roomA.comments[roomA.comments.length - 1];
    const lastestMessageIdB = roomB.comments[roomB.comments.length - 1];
    const messageDateA = comments[lastestMessageIdA].createdAt;
    const messageDateB = comments[lastestMessageIdB].createdAt;

    return new Date(messageDateB) - new Date(messageDateA);
  })

  return (
    <Wrapper>
      {sortedRoomsByDate.map((room) => {
        const latestMessageId = room.comments[room.comments.length - 1];
        const lastMessage = comments[latestMessageId];
        return (
          <ChatroomItem
            key={room.id}
            id={room.id}
            profile={room.profile}
            name={room.name}
            lastMessage={lastMessage.comment}
            createdAt={lastMessage.createdAt}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
