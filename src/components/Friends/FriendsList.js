import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { ref, update } from "firebase/database";

import Friend from "./Friend";
import Chatroom from "../Rooms/Chatroom";
import ModalPortal from "../Modal/ModalPortal";
import ModalFrame from "../Modal/ModalFrame";

import { database } from "../../firebase";
import { enterRoom } from "../../features/messages";
import { sortByName } from "../../utils/sort";

import { ASCENDING, DESCENDING, ENTER_NAME, NO_MATCH_NAME } from "../../constants/ui";
import { GREY_50 } from "../../constants/colors";

export default function FriendsList() {
  const [sortMode, setSortMode] = useState(ASCENDING);
  const [searchedName, setSearchedName] = useState("");
  const [searchedFriend, setSearchedFriend] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);

  const friendsList = useSelector(state => state.messages.friends);
  const allFriendsInformation = friendsList.allIds.map((friendId) => friendsList.byId[friendId]);
  const sortedFriendsList = sortByName(allFriendsInformation, sortMode);

  const selectedFriendId = useSelector(state => state.messages.selectedRoomId);
  const dispatch = useDispatch();

  const showChatroom = async (id) => {
    const databaseRef = ref(database);

    try {
      const updates = {};
      updates["/selectedRoomId"] = id;

      await update(databaseRef, updates);

      dispatch(enterRoom(id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchedName) {
      alert(ENTER_NAME);

      return;
    }

    const targetFriend = allFriendsInformation.find((friend) => friend.name === searchedName);

    if (!targetFriend) {
      alert(NO_MATCH_NAME);

      return;
    }

    setSearchedFriend(targetFriend);
    setIsShowModal(true);
    setSearchedName("");
  };

  return (
    <>
      {!selectedFriendId && (
        <Wrapper>
          <SearchWrapper>
            <form onSubmit={handleSubmit}>
              <input
                type="test"
                placeholder={ENTER_NAME}
                value={searchedName}
                onChange={(e) => setSearchedName(e.target.value)}
              />
              <input type="submit" value="Search"/>
            </form>
          </SearchWrapper>

          <SelectWrapper
            value={sortMode}
            onChange={(e) => setSortMode(e.target.value)}
          >
            <option value={ASCENDING}>{ASCENDING}</option>
            <option value={DESCENDING}>{DESCENDING}</option>
          </SelectWrapper>

          <ListWrapper>
            {sortedFriendsList.map((friend) => (
              <Friend
                key={friend.id}
                profile={friend.profile}
                name={friend.name}
                handleClick={() => showChatroom(friend.id)}
              />
            ))}
          </ListWrapper>

          <ModalPortal>
            {isShowModal && (
              <ModalFrame handleClick={() => setIsShowModal(false)} >
                <Friend
                  id={searchedFriend.id}
                  profile={searchedFriend.profile}
                  name={searchedFriend.name}
                  handleClick={() => showChatroom(searchedFriend.id)}
                />
              </ModalFrame>
            )}
          </ModalPortal>
        </Wrapper>
      )}
      {selectedFriendId && <Chatroom id={selectedFriendId} />}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display: flex;
`;

const SelectWrapper = styled.select`
  margin: 20px 0;
`;

const ListWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: ${GREY_50};
`;

