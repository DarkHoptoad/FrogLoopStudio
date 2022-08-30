import styled from "styled-components";
import interactiveImg from "../../images/desktop/image-interactive.jpg";

const StyledImg = styled.img`
  height: 450px;
  width: 650px;
  margin-bottom: 50px;

  @media (max-width: 715px) {
    height: 350px;
    width: 550px;
  }
  @media (max-width: 630px) {
    height: 150px;
    width: 250px;
  } ;
`;

const InteractiveImg = () => {
  return (
    <>
      <StyledImg src={interactiveImg} alt={interactiveImg} />
    </>
  );
};

export { InteractiveImg };
