import { useLayoutEffect } from "react";
import "./styles/About.css";
import { useSectionRefs } from "../context/SectionRefsContext";
import setSplitText from "./utils/splitText";
import gsap from "gsap";

const About = () => {
  const { aboutRef } = useSectionRefs();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setSplitText(aboutRef);
    }, aboutRef);

    return () => ctx.revert();
  }, [aboutRef]);

  return (
    <div className="about-section" id="about" ref={aboutRef}>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am an aspiring Software Developer with a strong foundation in
          full-stack web development and data-driven applications. I have
          hands-on experience building scalable web applications using modern
          technologies like React, Next.js, Node.js, and MongoDB.
        </p>
        <p className="para">
          I developed Kalasarthi, a full-stack marketplace platform connecting
          artisans with buyers, where I implemented REST APIs, designed
          efficient database schemas, and built responsive user interfaces.
        </p>
        <p className="para">
          I also have experience in data analytics and machine learning through
          internships, where I worked on data preprocessing, visualization, and
          predictive modeling using Python, Power BI, and real-world datasets.
        </p>
        <p className="para">
          I am passionate about solving real-world problems, writing clean and
          efficient code, and continuously learning new technologies to improve
          my development skills.
        </p>
      </div>
    </div>
  );
};

export default About;
