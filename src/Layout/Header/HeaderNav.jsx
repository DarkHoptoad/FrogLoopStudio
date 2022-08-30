import styled from "styled-components";
import { HeaderLogo } from "./HeaderLogo";
import { useState } from "react";

const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  z-index: 5;
`;

const StyledLinks = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledMobLinks = styled.div`
  display: none;
  @media (max-width: 768px) {
    position: absolute;
    display: flex;
    background: #000;
    height: 100vh;
    width: 30vw;
    flex-direction: column;
    top: 0;
    right: 0;
    padding: 30vh 50px 0;
    z-index: 10;
    transform: scale(0);
  }
  transition: all 0.3s linear;

  &.active {
    transform: scale(1);
    animation: menu 0.3s;
  }

  &.active body {
    position: fixed;
  }

  @keyframes menu {
    0% {
      right: -50vw;
    }
    100% {
      right: 0;
    }
  }
`;

const StyledLink = styled.a`
  position: relative;
  font-size: 18px;
  margin-right: 20px;
  color: white;
  text-decoration: none;
  font-weight: 300;
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
`;
const StyledMobLink = styled.a`
  font-size: 32px;
  margin-bottom: 20px;
  color: white;
  text-decoration: none;
  font-weight: 300;
`;

const StyledLinkLast = styled.a`
  position: relative;
  font-size: 18px;
  color: white;
  text-decoration: none;
  font-weight: 300;
  padding-bottom: 10px;
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
    border-radius: 10px;
    transition: transform 0.3s linear;
  }

  &:hover::after {
    transform: translateX(-50%) scale(1);
  }
`;

const StyledBurger = styled.svg`
  display: none;
  left: 45px;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 520px) {
    left: 0%;
  }
  @media (max-width: 300px) {
    left: 10%;
  }
`;
const StyledBurgerClose = styled.svg`
  display: none;
  top: 50px;
  right: 30px;
  position: absolute;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledLogo = styled.svg`
  position: absolute;
  top: 50px;
  left: 10px;
`;

const HeaderNav = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <StyledNavWrapper>
      <HeaderLogo />
      <StyledLinks>
        <StyledLink href="#">About</StyledLink>
        <StyledLink href="#">Careers</StyledLink>
        <StyledLink href="#">Events</StyledLink>
        <StyledLink href="#">Products</StyledLink>
        <StyledLinkLast href="#">Support</StyledLinkLast>
      </StyledLinks>

      <StyledBurger
        width="24"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          document.body.style.overflow = "hidden";
          setNavActive(true);
        }}
      >
        <g fill="#FFF" fill-rule="evenodd">
          <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
        </g>
      </StyledBurger>
      <StyledMobLinks className={navActive === true ? "active" : ""}>
        <StyledLogo>
          <path
            d="M2.694 26.324a2.694 2.694 0 002.695-2.697V2.697a2.694 2.694 0 10-5.389 0v20.93a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.978 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zm21.887 4.648c5.921 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.979 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zM55.487 32a2.694 2.694 0 002.694-2.696v-5.677c1.277 1.526 3.05 2.839 5.921 2.839 4.503 0 8.65-3.477 8.65-9.827v-.071c0-6.35-4.218-9.827-8.65-9.827-2.8 0-4.609 1.312-5.92 3.086V9.58a2.694 2.694 0 10-5.39 0v19.725A2.694 2.694 0 0055.488 32zm7.232-10.11c-2.517 0-4.608-2.094-4.608-5.251v-.071c0-3.158 2.091-5.25 4.608-5.25 2.518 0 4.645 2.092 4.645 5.25v.07c0 3.193-2.127 5.251-4.645 5.251zm19.087 4.576c4.113 0 7.268-1.916 7.268-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.985-1.313 1.135 0 2.589.462 4.113 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.064-.284c-1.205 0-2.127.923-2.127 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164zm15.612-.036c1.17 0 2.092-.142 3.085-.532a2.194 2.194 0 001.382-2.022 2.248 2.248 0 00-2.233-2.235c-.107 0-.461.035-.638.035-1.206 0-1.738-.603-1.738-1.845v-8.124h2.376a2.3 2.3 0 002.304-2.306 2.3 2.3 0 00-2.304-2.306h-2.376V4.718a2.694 2.694 0 10-5.389 0v2.377h-.177a2.3 2.3 0 00-2.304 2.306 2.3 2.3 0 002.304 2.306h.177v9.011c0 4.4 2.234 5.712 5.531 5.712zm13.024.036c2.73 0 4.325-1.455 5.566-3.051v.212a2.694 2.694 0 105.39 0V9.58a2.694 2.694 0 10-5.39 0v8.124c0 2.554-1.311 3.867-3.368 3.867-2.056 0-3.261-1.313-3.261-3.867V9.579a2.694 2.694 0 10-5.39 0v9.827c0 4.363 2.376 7.06 6.453 7.06zm21.994 0c2.8 0 4.609-1.313 5.92-3.087v.248a2.694 2.694 0 105.39 0V2.697a2.694 2.694 0 10-5.39 0v6.882c-1.276-1.526-3.048-2.838-5.92-2.838-4.503 0-8.65 3.476-8.65 9.827v.07c0 6.35 4.218 9.828 8.65 9.828zm1.383-4.577c-2.518 0-4.645-2.093-4.645-5.25v-.071c0-3.193 2.127-5.25 4.645-5.25 2.517 0 4.608 2.092 4.608 5.25v.07c0 3.158-2.091 5.251-4.608 5.251zm16.108-16.71c1.702 0 3.014-.993 3.014-2.554v-.07c0-1.562-1.312-2.52-3.014-2.52-1.702 0-3.013.958-3.013 2.52v.07c0 1.561 1.311 2.555 3.013 2.555zm0 21.145a2.694 2.694 0 002.694-2.697V9.58a2.694 2.694 0 10-5.388 0v14.048a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.361-9.827-10.246-9.827-5.921 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.36 9.828 10.246 9.828zm.07-4.648c-2.977 0-4.998-2.448-4.998-5.25v-.071c0-2.803 1.843-5.18 4.928-5.18 2.978 0 4.999 2.448 4.999 5.25v.072c0 2.802-1.844 5.18-4.928 5.18zm19.23 4.577c4.112 0 7.267-1.916 7.267-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.986-1.313 1.134 0 2.588.462 4.112 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.063-.284c-1.206 0-2.128.923-2.128 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164z"
            fill="#FFF"
            fill-rule="nonzero"
          />
        </StyledLogo>
        <StyledBurgerClose
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            document.body.style.overflow = "visible";
            setNavActive(false);
          }}
        >
          <path
            d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
            fill="#FFF"
            fill-rule="evenodd"
          />
        </StyledBurgerClose>
        <StyledMobLink href="#">About</StyledMobLink>
        <StyledMobLink href="#">Careers</StyledMobLink>
        <StyledMobLink href="#">Events</StyledMobLink>
        <StyledMobLink href="#">Products</StyledMobLink>
        <StyledMobLink href="#">Support</StyledMobLink>
      </StyledMobLinks>
    </StyledNavWrapper>
  );
};

export { HeaderNav };