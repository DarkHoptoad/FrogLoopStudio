import { Container } from "../Container";
import { InteractiveTxt } from "./InteractiveTxt";
import { InteractiveImg } from "./InterativeImg";
import styled from "styled-components";

const StyledInteractiveWrapper = styled.div`
  position: relative;
  max-width: 1045px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;

  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Interactive = () => {
  return (
    <>
      <Container mrgt="100px">
        <StyledInteractiveWrapper>
          <InteractiveImg />
          <InteractiveTxt />
        </StyledInteractiveWrapper>
      </Container>
    </>
  );
};

export { Interactive };
