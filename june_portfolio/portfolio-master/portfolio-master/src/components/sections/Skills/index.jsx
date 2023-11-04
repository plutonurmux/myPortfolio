import { TrackballControls } from "@react-three/drei";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { fromFadeInUp, start } from "../../shared/gsap";
import {
  SectionHeader,
  SectionHeaderBar,
  SectionTitle,
} from "../About/About.style";
import Cloud from "./Cloud";
import { CanvasContainer, Container, Wrapper } from "./Skills.style";

const Skills = () => {
  const sectionEl = useRef();
  const sectionHeaderEl = useRef();
  const canvasContainerEl = useRef();
  useLayoutEffect(() => {
    const sectionHeaderTween = gsap.from(sectionHeaderEl.current, {
      ...fromFadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: sectionEl.current,
        start,
      },
    });
    const canvasContainerTween = gsap.from(canvasContainerEl.current, {
      ...fromFadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: sectionEl.current,
        start: "top-=290px center",
      },
    });

    return () => {
      [sectionHeaderTween, canvasContainerTween].forEach((el) =>
        el.scrollTrigger.kill()
      );
    };
  }, []);

  return (
    <Container ref={sectionEl}>
      <Wrapper>
        <SectionHeader ref={sectionHeaderEl}>
          <SectionTitle index={2}> Skills</SectionTitle>
          <SectionHeaderBar />
        </SectionHeader>
        <CanvasContainer ref={canvasContainerEl}>
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 50], fov: 60 }}>
            <fog attach="fog" args={["#202025", 0, 80]} />
            <Cloud />
            <TrackballControls />
          </Canvas>
        </CanvasContainer>
      </Wrapper>
    </Container>
  );
};
export default Skills;
