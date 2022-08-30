import styled from "styled-components";
import { Container } from "../../Components/Container";
import { HeaderNav } from "./HeaderNav";
import { HeaderText } from "./HeaderTekst";
import bkgimg from "../../images/desktop/image-hero.jpg";
import bkmobimg from "../../images/mobile/image-hero.jpg";

const StyledHeader = styled.header`
  background: url(${bkgimg}) no-repeat center;
  background-size: cover;
  height: 100vh;
  max-width: 100%;
  /* overflow-x: hidden; */

  @media (max-width: 768) {
    background: url(${bkmobimg}) no-repeat center;
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container index="5">
          <HeaderNav />
          <HeaderText />
        </Container>
      </StyledHeader>
    </>
  );
};

export { Header };
