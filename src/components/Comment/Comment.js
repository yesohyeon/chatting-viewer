import styled from "styled-components";
import PropTypes from "prop-types";

import { getDateAndTime } from "../../utils/getDateAndTime";
import { GREY_100 } from "../../constants/colors";

export default function Comment({ name, comment, createdAt }) {
  return (
    <Wrapper justifyContent={ name === "Me" ? "flex-end" : "flex-start" }>
      <div>{name} : {comment}</div>
      <div>{getDateAndTime(createdAt)}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: 100%;
  justify-content: ${({ justifyContent }) => justifyContent };
  
  >: first-child {
    font-size: 20px;
  }
  >: last-child {
    margin-left: 15px;
    font-size: 10px;
    color: ${GREY_100};
  }
`;

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
