import { useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import Friend from "./Friend";
import ModalPortal from "../Modal/ModalPortal";

import { sortByName } from "../../utils/sortByName";
import ModalFrame from "../Modal/ModalFrame";

export default function FriendsList() {
  const [searchName, setSearchName] = useState("");
  const [sortMode, setSortMode] = useState("Ascending");
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchedFriend, setSearchFriend] = useState({});

  const friendsList = useSelector(state => state.friends.friends);
  const allFriendsInformation = [...friendsList.allIds].map((friendId) => friendsList.byId[friendId]);
  const sortedFriendsList = sortByName(allFriendsInformation, sortMode);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchName) {
      return;
    }

    const targetFriend = allFriendsInformation.find((friend) => friend.name === searchName);

    setSearchFriend(targetFriend);

    setIsShowModal(true);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <form onSubmit={handleSubmit}>
          <input
            type="test"
            placeholder="Please enter your friend name to search"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <input type="submit" value="Search"/>
        </form>
      </SearchWrapper>
      <ModalPortal>
        {isShowModal && (
          <ModalFrame handleClick={() => setIsShowModal(false)} >
            <Friend
              id={searchedFriend.id}
              profile={searchedFriend.profile}
              name={searchedFriend.name}
            />
          </ModalFrame>
        )}
      </ModalPortal>
      <SelectWrapper
        value={sortMode}
        onChange={(e) => setSortMode(e.target.value)}
      >
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
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
  background-color: #ECECEC;
`;
