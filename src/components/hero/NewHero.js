import React, { useState, useRef, useEffect, useCallback } from "react";
import styled, { css } from "styled-components/macro";
import { slides } from "../../utils/utils";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { TweenMax, Power3 } from "gsap";

import "../../App.css";

const HeroSection = styled.section`
  height: 100vh;

  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(86, 34, 46);
    background: linear-gradient(
      163deg,
      rgba(86, 34, 46, 0.4206057422969187) 0%,
      rgba(240, 248, 250, 0) 66%,
      rgba(255, 255, 255, 0.4906337535014006) 100%
    );
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
  opacity: 0;
  @media screen and (max-width: 370px) {
    bottom: 60px;
    right: 106px;
  }
  @media screen and (max-width: 320px) {
    bottom: 10px;
    right: 85px;
  }
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

const NewHero = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  let imgBg = useRef(null);
  let arrows = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  useEffect(() => {
    TweenMax.to(imgBg, 0.8, {
      opacity: 1,
      ease: Power3.easeIn,
    });
    TweenMax.to(arrows, 5, {
      opacity: 1,
      ease: Power3.easeIn,
    });
  }, [prevSlide, nextSlide]);

  return (
    <>
      <HeroSection id="home">
        <HeroWrapper>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage
                      src={slide.image}
                      alt="fine dining"
                      ref={(el) => {
                        imgBg = el;
                      }}
                    />
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}

          <SliderButtons
            ref={(el) => {
              arrows = el;
            }}
          >
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </>
  );
};

export default NewHero;
