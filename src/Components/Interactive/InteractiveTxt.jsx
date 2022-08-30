import styled from "styled-components";

const WrapperStyled = styled.div`
  position: absolute;
  right: 20px;
  top: 120px;
  width: 510px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding-left: 80px;

  @media (max-width: 1150px) {
    position: relative;
    right: 0;
    top: 0;
    text-align: center;
    padding-left: 0;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 300px;
    right: 0;
  }

  @media (max-width: 350px) {
    width: 250px;
    right: 0;
  }
`;

const H3Styled = styled.h3`
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 300;
  @media (max-width: 550px) {
    font-size: 24px;
  }

  @media (max-width: 350px) {
    font-size: 18px;
  }
`;

const TextStyled = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #858585;

  @media (max-width: 550px) {
    font-size: 14px;
  }

  @media (max-width: 350px) {
    font-size: 12px;
  }
`;

const InteractiveTxt = () => {
  return (
    <>
      <WrapperStyled>
        <H3Styled>The leader in interactive vr</H3Styled>
        <TextStyled>
          Founded in 2011, Loopstudios has been producing world-closs virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have tranformed businesses through digital
          experiences that bind to their brand
        </TextStyled>
      </WrapperStyled>
    </>
  );
};

export { InteractiveTxt };
