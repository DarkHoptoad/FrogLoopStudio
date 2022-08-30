import bkgimg from "../../images/desktop/image-hero.jpg";
import styled from "styled-components";

const StyledImg = styled.img`
  position: absolute;
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const HeaderImg = () => {
  return <StyledImg src={bkgimg} />;
};

export { HeaderImg };
