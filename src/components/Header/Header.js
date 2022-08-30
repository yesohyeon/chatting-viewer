import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FRIENDS_LIST, CHATROOM_LIST } from "../../constants/ui";
import { GREY_50 } from "../../constants/colors";
import Comment from "../Comment/Comment";

export default function Header({ handleClick }) {
  return (
    <Wrapper>
      <NavigationWrapper>
        <Link to="/friends" onClick={handleClick}>{FRIENDS_LIST}</Link>
        <Link to="/rooms" onClick={handleClick}>{CHATROOM_LIST}</Link>
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

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
