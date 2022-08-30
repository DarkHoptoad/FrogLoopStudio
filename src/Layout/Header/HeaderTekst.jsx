import styled from "styled-components";

const StyledHeaderText = styled.div`
  font-size: 58px;
  border: 2px solid white;
  text-transform: uppercase;
  padding: 15px 30px;
  width: 50%;
  line-height: 1;
  letter-spacing: 3px;
  color: white;
  font-weight: 300;
  position: relative;
  top: 200px;
  @media (max-width: 848px) {
    font-size: 42px;
  }
  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 602px) {
    font-size: 24px;
  }
  @media (max-width: 350px) {
    width: 80%;
  }
`;

const HeaderText = () => {
  return (
    <StyledHeaderText>Immersive experiences that deliver</StyledHeaderText>
  );
};

export { HeaderText };
