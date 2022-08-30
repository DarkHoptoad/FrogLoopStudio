import styled from "styled-components";

const StyledLinks = styled.div`
  margin: 30px 0 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledLink = styled.a`
  margin-right: 20px;
  text-decoration: none;
  color: #fff;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    height: 2px;
    width: 50%;
    z-index: 5;
    background-color: white;
    transition: transform 0.3s linear;
  }

  &:hover::after {
    transform: translateX(-50%) scale(1);
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FooterLinks = () => {
  return (
    <>
      <StyledLinks>
        <StyledLink href="#">About</StyledLink>
        <StyledLink href="#">Careers</StyledLink>
        <StyledLink href="#">Events</StyledLink>
        <StyledLink href="#">Products</StyledLink>
        <StyledLink href="#">Support</StyledLink>
      </StyledLinks>
    </>
  );
};

export { FooterLinks };
