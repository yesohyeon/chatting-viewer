import { useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import Friend from "./Friend";

import { sortByFriendName } from "../../utils/sort";

export default function FriendsList() {
  const [keyword, setKeyword] = useState("");
  const [sortMode, setSortMode] = useState("Ascending");
  const friendsList = useSelector(state => state.friends.friends);
  const friendsIds = [...friendsList.allIds];
  const allFriendsInformation = friendsIds.map((friendId) => friendsList.byId[friendId]);
  const sortedFriendsList = sortByFriendName(allFriendsInformation, sortMode);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <form onSubmit={handleSubmit}>
          <input
            type="test"
            placeholder="이름을 입력하세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}

          />
          <input type="submit" value="검색하기"/>
        </form>
      </SearchWrapper>
      <SelectWrapper
        value={sortMode}
        onChange={(e) => setSortMode(e.target.value)}
      >
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </SelectWrapper>
      {sortedFriendsList.map((friend) => (
        <Friend
          key={friend.id}
          id={friend.id}
          profile={friend.profile}
          name={friend.name}
        />
      ))}
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
  margin: 10px 0;
`;
