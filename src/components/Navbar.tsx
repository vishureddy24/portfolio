import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

import { useSectionRefs } from "../context/SectionRefsContext";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const { headerRef } = useSectionRefs();

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    if (headerRef.current) {
      let links = headerRef.current.querySelectorAll("ul a");
      links.forEach((elem) => {
        let element = elem as HTMLAnchorElement;
        element.addEventListener("click", (e) => {
          if (window.innerWidth > 1024) {
            e.preventDefault();
            let elem = e.currentTarget as HTMLAnchorElement;
            let section = elem.getAttribute("data-href");
            smoother.scrollTo(section, true, "top top");
          }
        });
      });
    }

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, [headerRef]);
  return (
    <>
      <div className="header" ref={headerRef as React.RefObject<HTMLDivElement>}>
        <a href="/#" className="navbar-title" data-cursor="disable">
          VR
        </a>
        <a
          href="https://www.linkedin.com/in/vishu-reddy-705039289"
          className="navbar-connect"
          data-cursor="disable"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/vishu-reddy-705039289
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
