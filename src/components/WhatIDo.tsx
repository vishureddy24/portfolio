import { useLayoutEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSectionRefs } from "../context/SectionRefsContext";
import setSplitText from "./utils/splitText";
import gsap from "gsap";

const WhatIDo = () => {
  const { whatIDORef } = useSectionRefs();
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setSplitText(whatIDORef);

      if (ScrollTrigger.isTouch) {
        containerRef.current.forEach((container) => {
          if (container) {
            container.classList.remove("what-noTouch");
            container.addEventListener("click", () => handleClick(container));
          }
        });
      }
    }, whatIDORef);

    return () => {
      ctx.revert();
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, [whatIDORef]);

  return (
    <div className="whatIDO" ref={whatIDORef}>
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* Item 1: Full Stack Development */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>FULL STACK DEVELOPMENT</h3>
              <p>
                I build scalable web applications using modern technologies like React, Next.js, 
                Node.js, and MongoDB. I focus on performance, clean architecture, and responsive design.
              </p>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Item 2: Machine Learning & Data */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>MACHINE LEARNING & DATA</h3>
              <p>
                I develop data-driven solutions using Python, Pandas, and Scikit-learn. 
                Experienced in EDA, model building, and predictive analytics.
              </p>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Item 3: Data Analytics & Visualization */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
               <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATA ANALYTICS & VISUALIZATION</h3>
              <p>
                I create interactive dashboards and insights using Power BI, Excel, and 
                Python to support data-driven decision making.
              </p>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
