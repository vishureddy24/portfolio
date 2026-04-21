import { PropsWithChildren, useLayoutEffect } from "react";
import "./styles/Landing.css";
import { useSectionRefs } from "../context/SectionRefsContext";
import setSplitText from "./utils/splitText";
import gsap from "gsap";

const Landing = ({ children }: PropsWithChildren) => {
  const { landingRef } = useSectionRefs();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setSplitText(landingRef);
    }, landingRef);

    return () => ctx.revert();
  }, [landingRef]);

  return (
    <>
      <div className="landing-section" id="landingDiv" ref={landingRef}>
        <div className="landing-container">
          <div className="landing-intro">
            <h2 className="title">Hello! I'm</h2>
            <h1 className="title">
              VISWA VARDHAN
              <br />
              <span className="title">REDDY NALTHATAGARI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 className="title">Full Stack</h3>
            <h2 className="landing-info-h2 title">
              <div className="landing-h2-1">DEVELOPER</div>
            </h2>
            <p className="landing-description para">
              I build responsive, scalable and user-friendly web applications.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
