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
  margin-bottom: 20px;
`;

const NavigationWrapper = styled.nav`
  > * {
    margin-right: 50px;
  }
`;
