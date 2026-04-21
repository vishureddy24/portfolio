import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX(refs: { 
  landingRef: React.RefObject<HTMLElement>, 
  headerRef: React.RefObject<HTMLElement> 
}) {
  if (!refs.landingRef.current || !refs.headerRef.current) return;

  document.body.style.overflowY = "auto";
  if (smoother) smoother.paused(false);
  
  const main = document.getElementsByTagName("main")[0];
  if (main) main.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#020617", // Match site theme
    duration: 0.5,
    delay: 1,
  });

  const landing = refs.landingRef.current;
  const header = refs.headerRef.current;

  // Modernized selectors matching the new React structure
  const targets = landing.querySelectorAll(".title, .para");
  
  if (targets.length > 0) {
    const landingText = new SplitText(Array.from(targets), {
      type: "chars,lines",
      linesClass: "split-line",
    });

    gsap.fromTo(
      landingText.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
        delay: 0.3,
      }
    );
  }

  // Animate static elements
  gsap.fromTo(
    [header, ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Loop textures/info (if still present in some form, otherwise skip)
  // The original Landing used many loops for 'Business/Tech' roles.
  // Our new landing is simpler but we can add a subtle float or similar if needed.
}
