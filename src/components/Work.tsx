import { useLayoutEffect } from "react";
import "./styles/Work.css";
import { useSectionRefs } from "../context/SectionRefsContext";
import setSplitText from "./utils/splitText";
import gsap from "gsap";

const projects = [
  {
    title: "Kalasarthi – Full Stack Marketplace Platform",
    description: "Built a full-stack marketplace connecting artisans with buyers using modern web technologies. Implemented REST APIs, MongoDB schemas, and responsive UI.",
    tech: "Next.js, MongoDB, Tailwind CSS, REST APIs",
    image: "/images/callhq.png", // Keeping placeholders for now, can be updated later
    link: "#",
  },
  {
    title: "Heart Failure Prediction System",
    description: "Developed a machine learning model with SMOTE for handling class imbalance. Performed EDA, feature engineering, and model evaluation.",
    tech: "Python, Pandas, NumPy, Scikit-learn",
    image: "/images/whatsapp.png",
    link: "#",
  },
  {
    title: "Loan Approval Prediction System",
    description: "Built a predictive model for loan approval using data preprocessing and classification techniques to improve decision-making.",
    tech: "Python, Pandas, NumPy, Scikit-learn",
    image: "/images/broki.png",
    link: "#",
  },
  {
    title: "Data Analytics Dashboard",
    description: "Created interactive dashboards and analytical reports for business insights using real-world datasets.",
    tech: "Python, Excel, Power BI",
    image: "/images/orrdr.png",
    link: "#",
  },
];

const Work = () => {
  const { workRef } = useSectionRefs();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setSplitText(workRef);
    }, workRef);

    return () => ctx.revert();
  }, [workRef]);

  return (
    <div className="work-section" id="work" ref={workRef}>
      <div className="work-container section-container">
        <h2 className="title">
          My <span>Work</span>
        </h2>

        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index} data-cursor="disable">
              <div className="work-card-inner">
                <div className="work-number">
                  <h3 className="title">0{index + 1}</h3>
                </div>
                <div className="work-details">
                  <h4 className="title">{project.title}</h4>
                  <p className="para">{project.description}</p>
                  <div className="work-tech">
                    <span className="tech-label">Tech Stack:</span>
                    <p className="para">{project.tech}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
