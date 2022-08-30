import styled from "styled-components";
import { Container } from "../Container";
import { CreationsList } from "./CreationsList";
import { SeeAllButton } from "./SeeAllButton";

const StyledH1 = styled.h1`
  font-weight: 300;
  letter-spacing: 10px;
  text-transform: uppercase;
`;

const StyleButton = styled.button`
  display: none;
  margin-bottom: 50px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #000;
  height: 40px;
  width: 150px;
  letter-spacing: 5px;
  font-weight: 500;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    color: #fff;
    background-color: #000;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Creations = () => {
  return (
    <>
      <Container>
        <StyledHeaderWrapper>
          <StyledH1>Our creations</StyledH1>
          <SeeAllButton />
        </StyledHeaderWrapper>
        <CreationsList />
        <StyleButton>See all</StyleButton>
      </Container>
    </>
  );
};

export { Creations };
