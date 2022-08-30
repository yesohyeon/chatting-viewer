import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ref, set } from "firebase/database";

import { database } from "../../firebase";
import { exitRoom } from "../../features/messages";

import { FRIENDS_LIST, CHATROOM_LIST } from "../../constants/ui";
import { GREY_50 } from "../../constants/colors";

export default function Header() {
  const dispatch = useDispatch();

  const exitChatroom = async () => {
    const selectedRoomIdRef = ref(database, "selectedRoomId");

    try {
      await set(selectedRoomIdRef, "");

      dispatch(exitRoom());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <NavigationWrapper>
        <Link to="/friends" onClick={() => exitChatroom()}>{FRIENDS_LIST}</Link>
        <Link to="/rooms" onClick={() => exitChatroom()}>{CHATROOM_LIST}</Link>
      </NavigationWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 20%;
  
  > * {
    padding: 10px;
    background-color: ${GREY_50};
    border-radius: 5px;
  }
`;
