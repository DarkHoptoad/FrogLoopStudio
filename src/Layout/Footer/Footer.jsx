import styled from "styled-components";
import { Container } from "../../Components/Container";
import { FooterNav } from "./FooterNav";
import { FooterSocials } from "./FooterSocial";

const StyledFooter = styled.footer`
  background-color: black;
  padding: 30px;
`;

const StyledFooterWrapper = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Container>
          <StyledFooterWrapper>
            <FooterNav />
            <FooterSocials />
          </StyledFooterWrapper>
        </Container>
      </StyledFooter>
    </>
  );
};

export { Footer };
