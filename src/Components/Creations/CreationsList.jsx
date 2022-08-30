import styled from "styled-components";
import curiosityImg from "../../images/desktop/image-curiosity.jpg";
import mobCuriosityImg from "../../images/mobile/image-curiosity.jpg";

import fisheyeImg from "../../images/desktop/image-fisheye.jpg";
import mobFisheyeImg from "../../images/mobile/image-fisheye.jpg";

import aboveImg from "../../images/desktop/image-from-above.jpg";
import mobFboveImg from "../../images/mobile/image-from-above.jpg";

import deepEarthImg from "../../images/desktop/image-deep-earth.jpg";
import mobDeepEarthImg from "../../images/mobile/image-deep-earth.jpg";

import gridImg from "../../images/desktop/image-grid.jpg";
import mobGridImg from "../../images/mobile/image-grid.jpg";

import arcadeImg from "../../images/desktop/image-night-arcade.jpg";
import mobArcadeImg from "../../images/mobile/image-night-arcade.jpg";

import borealisImg from "../../images/desktop/image-pocket-borealis.jpg";
import mobBorealisImg from "../../images/mobile/image-pocket-borealis.jpg";

import soccerImg from "../../images/desktop/image-soccer-team.jpg";
import mobSoccerImg from "../../images/mobile/image-soccer-team.jpg";

const CreationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 968px) {
    position: relative;
    left: 10%;
  }
  @media (max-width: 638px) {
    /* flex-direction: column; */

    left: -85px;
  }
  @media (max-width: 635px) {
    left: 0;
    flex-direction: column;
  }
`;
const CreationItem = styled.div`
  width: 25%;
  position: relative;
  color: #fff;
  transition: color 0.3s linear;
  cursor: pointer;
  &::after {
    content: "";
    background: #000;
    width: 256px;
    height: 450px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0.4;
    transition: all 0.3s linear;
  }

  &:hover::after {
    background: #fff;
    opacity: 0.7;
  }

  &:hover {
    color: #000;
  }

  @media (max-width: 1279px) {
    width: 33%;
  }
  @media (max-width: 966px) {
    width: 50%;
  }
  @media (max-width: 638px) {
    width: 100%;
    &::after {
      width: 654px;
      height: 240px;
    }
  }

  @media (max-width: 635px) {
    &::after {
      width: 327px;
      height: 170px;
      left: 50%;
      transform: translateX(-60%);
    }
  }
  @media (max-width: 400px) {
    &::after {
      width: 250px;
      height: 100px;
      transform: translateX(-50%);
    }
  }
`;

const CreationImg = styled.picture`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 0;
`;
const StyledImg = styled.img`
  @media (max-width: 635px) {
    position: relative;
    left: 50%;
    transform: translateX(-60%);
    width: 327px;
    height: 170px;
  }
  @media (max-width: 400px) {
    width: 250px;
    height: 100px;
    transform: translateX(-50%);
  }
`;
const CreationTitleWrapper = styled.div`
  width: 130px;
`;

const CreationTitle = styled.span`
  position: relative;
  text-transform: uppercase;
  z-index: 3;
  bottom: 100px;
  /* opacity: 0.8; */
  left: 40px;
  font-size: 24px;

  @media (max-width: 635px) {
    left: 60px;
  }
  @media (max-width: 521px) {
    left: 20px;
  }
  @media (max-width: 400px) {
    left: 35px;
  }
  @media (max-width: 310px) {
    left: 15px;
  }
`;

const CreationsList = () => {
  return (
    <>
      <CreationWrapper>
        <CreationItem>
          <CreationImg>
            <source media="(max-width:638px)" srcSet={mobDeepEarthImg} />
            <StyledImg src={deepEarthImg} alt={deepEarthImg} />
          </CreationImg>
          <CreationTitleWrapper>
            <CreationTitle>Deep earth</CreationTitle>
          </CreationTitleWrapper>
        </CreationItem>
        <CreationItem>
          <CreationImg>
            <source media="(max-width:638px)" srcSet={mobArcadeImg} />
            <StyledImg src={arcadeImg} alt={arcadeImg} />
          </CreationImg>
          <CreationTitleWrapper>
            <CreationTitle>Night arcade</CreationTitle>
          </CreationTitleWrapper>
        </CreationItem>
        <CreationItem>
          <CreationImg>
            <source media="(max-width:638px)" srcSet={mobSoccerImg} />
            <StyledImg src={soccerImg} alt={soccerImg} />
          </CreationImg>
          <CreationTitleWrapper>
            <CreationTitle>Soccer team vr</CreationTitle>
          </CreationTitleWrapper>
        </CreationItem>
        <CreationItem>
          <CreationImg>
            <source media="(max-width:638px)" srcSet={mobGridImg} />
            <StyledImg src={gridImg} alt={gridImg} />
          </CreationImg>
          <CreationTitleWrapper>
            <CreationTitle>The grid</CreationTitle>
          </CreationTitleWrapper>
        </CreationItem>
        <CreationItem>
          <CreationImg>
            <source media="(max-width:638px)" srcSet={mobFboveImg} />
            <StyledImg src={aboveImg} alt={aboveImg} />
          </CreationImg>
          <CreationTitleWrapper>
            <CreationTitle>From up above vr</CreationTitle>
          </CreationTitleWrapper>
        </CreationItem>
        <CreationItem>
          <CreationImg>
            <source media="(max-width:638px)" srcSet={mobBorealisImg} />
            <StyledImg src={borealisImg} alt={borealisImg} />
          </CreationImg>
          <CreationTitleWrapper>
            <CreationTitle>Pocket Borealis</CreationTitle>
          </CreationTitleWrapper>
        </CreationItem>
        <CreationItem>
          <CreationImg>
            <source media="(max-width:638px)" srcSet={mobCuriosityImg} />
            <StyledImg src={curiosityImg} alt={curiosityImg} />
          </CreationImg>
          <CreationTitleWrapper>
            <CreationTitle>The curiosity</CreationTitle>
          </CreationTitleWrapper>
        </CreationItem>
        <CreationItem>
          <CreationImg>
            <source media="(max-width:638px)" srcSet={mobFisheyeImg} />
            <StyledImg src={fisheyeImg} alt={fisheyeImg} />
          </CreationImg>
          <CreationTitleWrapper>
            <CreationTitle>Make it fisheye</CreationTitle>
          </CreationTitleWrapper>
        </CreationItem>
      </CreationWrapper>
    </>
  );
};

export { CreationsList };
