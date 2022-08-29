import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Friend from "./Friend";
import ModalPortal from "../Modal/ModalPortal";
import ModalFrame from "../Modal/ModalFrame";

import { sortByName } from "../../utils/sortByName";
import { ASCENDING, DESCENDING, ENTER_NAME, NO_MATCH_NAME } from "../../constants/ui";
import { GREY_50 } from "../../constants/colors";

export default function FriendsList() {
  const [searchedName, setSearchedName] = useState("");
  const [sortMode, setSortMode] = useState({ASCENDING});
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchedInformation, setSearchedInformation] = useState({});

  const friendsList = useSelector(state => state.messages.friends);
  const allFriendsInformation = [...friendsList.allIds].map((friendId) => friendsList.byId[friendId]);
  const sortedFriendsList = sortByName(allFriendsInformation, sortMode);

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

    setSearchedInformation(targetFriend);
    setIsShowModal(true);
    setSearchedName("");
  };

  return (
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
      <ModalPortal>
        {isShowModal && (
          <ModalFrame handleClick={() => setIsShowModal(false)} >
            <Friend
              id={searchedInformation.id}
              profile={searchedInformation.profile}
              name={searchedInformation.name}
            />
          </ModalFrame>
        )}
      </ModalPortal>
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
            id={friend.id}
            profile={friend.profile}
            name={friend.name}
          />
        ))}
      </ListWrapper>
    </Wrapper>
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
