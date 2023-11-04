import React, { useLayoutEffect, useRef } from "react";
import {
  Container,
  Image,
  ImageContainer,
  SubTitle,
  Title,
  Wrapper,
} from "./Hero.style";
import { gsap } from "gsap";
type HeaderProps = {
  timelineIdx: number;
  onSetTlIdx: React.Dispatch<React.SetStateAction<number>>;
};
const Hero: React.FC<HeaderProps> = ({ timelineIdx, onSetTlIdx }) => {
  // gsap scrollTrigger animation
  const containerEl = useRef<HTMLDivElement>(null);
  const imageContainerEl = useRef<HTMLDivElement>(null);
  const titleEl = useRef<HTMLHeadingElement>(null);
  const subTitleEl = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    const duration = 0.5;
    const opacity = 1;
    const y = 0;
    let containerTl: GSAPTimeline;
    if (timelineIdx === 1) {
      const containerTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerEl.current,
          start: "top center",
        },
      });
      containerTl
        .to(imageContainerEl.current, {
          scale: 1,
          duration,
        })
        .to(titleEl.current, {
          opacity,
          y,
          duration,
        })
        .to(subTitleEl.current, {
          opacity,
          y,
          duration,
          onComplete: () => {
            onSetTlIdx(2);
          },
        });
    }

    return () => {
      containerTl?.scrollTrigger?.kill();
    };
  }, [timelineIdx]);

  return (
    <Container>
      <Wrapper>
        <ImageContainer ref={imageContainerEl}>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/ma-photo.png`}
            alt="hero"
          />
        </ImageContainer>
        <Title ref={titleEl}>Ibrahim Dembele</Title>
        <SubTitle ref={subTitleEl}>Web Developer</SubTitle>
      </Wrapper>
    </Container>
  );
};

export default Hero;
