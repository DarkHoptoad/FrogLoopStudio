import styled from "styled-components";
import { FooterLinks } from "./FooterLinks";
import { FooterLogo } from "./FooterLogo";

const StyledFooterNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FooterNav = () => {
  return (
    <>
      <StyledFooterNav>
        <FooterLogo />
        <FooterLinks />
      </StyledFooterNav>
    </>
  );
};

export { FooterNav };
