import randomWord from "random-words";
import { useMemo } from "react";
import * as THREE from "three";
import Word from "./Word";
import Skills from ".";
function Cloud() {
  const randomSkills = () => {
    const skills = [
      "TYPESCRIPT",
      "HTML",
      "CSS",
      "SASS",
      "GSAP",
      "REACTJS",
      "NODEJS",
      "MONGODB",
      "STYLED-COMPONENTS",
      "JAVASCRIPT",
      "NPM",
      "REACT-SLICK",
      "FONT-AWESOME",
      "GITHUB",
    ];
    const randomidx = Math.floor(Math.random() * skills.length);
    return skills[randomidx];
  };
  // Create a count x count random words with spherical distribution
  const count = 6;
  const radius = 20;
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          randomSkills(),
        ]);
    return temp;
  }, [count, radius]);
  return words?.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default Cloud;
