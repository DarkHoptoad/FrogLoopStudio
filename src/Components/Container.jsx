import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1440px;
  width: 80%;
  z-index: ${({ index }) => index || "1"};
  margin-top: ${({ mrgt }) => mrgt || "auto"};

  @media (max-width: 768px) {
    margin-top: auto;
  }
`;

const Container = (props) => {
  return <StyledContainer {...props}></StyledContainer>;
};

export { Container };
