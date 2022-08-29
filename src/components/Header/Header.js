import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <NavigationWrapper>
        <Link to="/friends">Friends</Link>
        <Link to="/rooms">Rooms</Link>
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
    background-color: #ECECEC;
    border-radius: 5px;
  }
`;
