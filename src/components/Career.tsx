import { useLayoutEffect } from "react";
import "./styles/Career.css";
import { useSectionRefs } from "../context/SectionRefsContext";
import setSplitText from "./utils/splitText";
import gsap from "gsap";

const Career = () => {
  const { careerRef } = useSectionRefs();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setSplitText(careerRef);
    }, careerRef);

    return () => ctx.revert();
  }, [careerRef]);

  return (
    <div className="career-section section-container" ref={careerRef}>
      <div className="career-container">
        <h2 className="title">
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4 className="title">DATA ANALYTICS INTERN</h4>
                <h5 className="title">Oasis Infobyte</h5>
              </div>
              <h3 className="title">Jul – Aug 2025</h3>
            </div>
            <p className="para">
              Developed dashboards and reports for business insights.
              Performed data preprocessing and analysis using Python, Excel, and Power BI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4 className="title">DATA ANALYTICS INTERN</h4>
                <h5 className="title">Internship Studio</h5>
              </div>
              <h3 className="title">Mar – Apr 2025</h3>
            </div>
            <p className="para">
              Built analytical dashboards and supported predictive analytics workflows.
              Worked on real-world datasets for business decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4 className="title">FREELANCE UI/UX DESIGNER</h4>
                <h5 className="title">Vastramay</h5>
              </div>
              <h3 className="title">Jan 2026</h3>
            </div>
            <p className="para">
              Designed user interfaces and improved user experience.
              Created wireframes and prototypes using Figma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
