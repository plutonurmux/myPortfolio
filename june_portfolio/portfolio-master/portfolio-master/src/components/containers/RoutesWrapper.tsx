import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Route, Routes, redirect } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../layouts/Header";
import Hi from "../layouts/Hi";
import NotFound from "./NotFound";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// context
type ContextValue = {
  timeline?: gsap.core.Timeline;
};
const MyContext = createContext<ContextValue>({});
// Define a custom hook to access the context
export const useMyContext = () => useContext(MyContext);

const RoutesWrapper = () => {
  const [firstRender, setFirstRender] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      setFirstRender(false);
    }, 2500);
  }, []);
  const tl = useRef<gsap.core.Timeline>(gsap.timeline({}));
  useEffect(() => {
    if (!firstRender) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }
  }, [firstRender]);
  return (
    <>
      <Hi visible={firstRender} />
      {!firstRender && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

export default RoutesWrapper;
