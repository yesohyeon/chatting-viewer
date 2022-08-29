import styled from "styled-components";

import getFormattedDateAndTime from "../../utils/getFormattedDateAndTime";

export default function Comment({ name, comment, createdAt }) {
  return (
    <Wrapper justifyContent={ name === "Me" ? "flex-end" : "flex-start" }>
      <div>{name} : {comment}</div>
      <div>{getFormattedDateAndTime(createdAt)}</div>
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
    color: #808080;
  }
`;
