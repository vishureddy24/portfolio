import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { useSectionRefs } from "../context/SectionRefsContext";
import { useLayoutEffect } from "react";
import setSplitText from "./utils/splitText";
import gsap from "gsap";

const Contact = () => {
  const { contactRef } = useSectionRefs();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setSplitText(contactRef);
    }, contactRef);

    return () => ctx.revert();
  }, [contactRef]);

  return (
    <div className="contact-section section-container" id="contact" ref={contactRef}>
      <div className="contact-container">
        <h3 className="title">Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4 className="title">Connect</h4>
            <p className="para">
              <a
                href="https://www.linkedin.com/in/vishu-reddy-705039289"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — vishu-reddy-705039289
              </a>
            </p>
            <h4 className="title">Education</h4>
            <p className="para">
              B.Tech Artificial Intelligence and Data Science, Amrita Vishwa Vidyapeetham — 2023–2027
            </p>
            <p className="para">
              Class XII, Sri Chaitanya Junior College — 2023
            </p>
            <p className="para">
              Class X, Sri Chaitanya English Medium School — 2021
            </p>
          </div>
          <div className="contact-box">
            <h4 className="title">Social</h4>
            <a
              href="https://github.com/vishureddy24"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social para"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/vishu-reddy-705039289"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social para"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2 className="title">
              Designed and Developed <br /> by Viswa Vardhan Reddy
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
