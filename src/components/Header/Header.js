import { Link } from "react-router-dom";
import styled from "styled-components";

import { FRIENDS_LIST, CHATROOM_LIST } from "../../constants/ui";
import { GREY_50 } from "../../constants/colors";

export default function Header() {
  return (
    <Wrapper>
      <NavigationWrapper>
        <Link to="/friends">{FRIENDS_LIST}</Link>
        <Link to="/rooms">{CHATROOM_LIST}</Link>
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
