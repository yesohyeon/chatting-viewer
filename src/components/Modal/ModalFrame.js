import styled from "styled-components";

export default function ModalFrame({ children, handleClick }) {
  return (
    <Container>
      <Background onClick={handleClick} />
      <ModalBlock>
        <Contents>
          {children}
        </Contents>
        <button onClick={handleClick}>Back</button>
      </ModalBlock>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
`;

const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 30rem;
  width: 20rem;
  height: fit-content;
  padding: 15px;
  border-radius: 10px;
  background-color: #ECECEC;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
