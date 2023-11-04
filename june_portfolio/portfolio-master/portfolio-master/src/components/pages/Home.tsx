import React, { useLayoutEffect, useState } from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Project from "../sections/Project";
import Contact from "../sections/Contact";
import Copyright from "../layouts/Copyright";
import Header from "../layouts/Header";

const Home = () => {
  const [tlIdx, setTlIdx] = useState(0);
  return (
    <>
      <Header timelineIdx={tlIdx} onSetTlIdx={setTlIdx} />
      <Hero timelineIdx={tlIdx} onSetTlIdx={setTlIdx} />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Copyright />
    </>
  );
};

export default Home;
