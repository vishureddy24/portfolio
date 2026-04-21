import * as THREE from "three";
import gsap from "gsap";

interface SectionRefs {
  landingRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  whatIDORef: React.RefObject<HTMLDivElement>;
  careerRef: React.RefObject<HTMLDivElement>;
  characterModelRef: React.RefObject<HTMLDivElement>;
  characterRimRef: React.RefObject<HTMLDivElement>;
}

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera,
  refs: SectionRefs
) {
  if (!character || !refs.landingRef.current) return;

  let intensity: number = 0;
  const interval = setInterval(() => {
    intensity = Math.random();
  }, 200);

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: refs.landingRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: refs.aboutRef.current,
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: refs.whatIDORef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  let screenLight: any, monitor: any;
  character?.children.forEach((object: any) => {
    if (object.name === "Plane004") {
      object.children.forEach((child: any) => {
        child.material.transparent = true;
        child.material.opacity = 0;
        if (child.material.name === "Material.018") {
          monitor = child;
          child.material.color.set("#FFFFFF");
        }
      });
    }
    if (object.name === "screenlight") {
      object.material.transparent = true;
      object.material.opacity = 0;
      object.material.emissive.set("#B0F5EA");
      gsap.timeline({ repeat: -1, repeatRefresh: true }).to(object.material, {
        emissiveIntensity: () => intensity * 8,
        duration: () => Math.random() * 0.6,
        delay: () => Math.random() * 0.1,
      });
      screenLight = object;
    }
  });

  let neckBone = character?.getObjectByName("spine005");
  const characterModel = refs.characterModelRef.current;
  const characterRim = refs.characterRimRef.current;
  const landingContainer = refs.landingRef.current?.querySelector(".landing-container");
  const aboutMe = refs.aboutRef.current?.querySelector(".about-me");
  const whatBoxIn = refs.whatIDORef.current?.querySelector(".what-box-in");

  if (window.innerWidth > 1024 && characterModel && characterRim) {
    tl1
      .fromTo(character.rotation, { y: 0 }, { y: 0.7, duration: 1 }, 0)
      .to(camera.position, { z: 22 }, 0)
      .fromTo(characterModel, { x: 0 }, { x: "-25%", duration: 1 }, 0)
      .to(landingContainer || [], { opacity: 0, duration: 0.4 }, 0)
      .to(landingContainer || [], { y: "40%", duration: 0.8 }, 0)
      .fromTo(aboutMe || [], { y: "-50%" }, { y: "0%" }, 0);

    tl2
      .to(
        camera.position,
        { z: 75, y: 8.4, duration: 6, delay: 2, ease: "power3.inOut" },
        0
      )
      .to(refs.aboutRef.current, { y: "30%", duration: 6 }, 0)
      .to(refs.aboutRef.current, { opacity: 0, delay: 3, duration: 2 }, 0)
      .fromTo(
        characterModel,
        { pointerEvents: "inherit" },
        { pointerEvents: "none", x: "-12%", delay: 2, duration: 5 },
        0
      )
      .to(character.rotation, { y: 0.92, x: 0.12, delay: 3, duration: 3 }, 0)
      .to(neckBone!.rotation, { x: 0.6, delay: 2, duration: 3 }, 0)
      .to(monitor?.material || {}, { opacity: 1, duration: 0.8, delay: 3.2 }, 0)
      .to(screenLight?.material || {}, { opacity: 1, duration: 0.8, delay: 4.5 }, 0)
      .fromTo(
        whatBoxIn || [],
        { display: "none" },
        { display: "flex", duration: 0.1, delay: 6 },
        0
      )
      .fromTo(
        monitor?.position || {},
        { y: -10, z: 2 },
        { y: 0, z: 0, delay: 1.5, duration: 3 },
        0
      )
      .fromTo(
        characterRim,
        { opacity: 1, scaleX: 1.4 },
        { opacity: 0, scale: 0, y: "-70%", duration: 5, delay: 2 },
        0.3
      );

    tl3
      .fromTo(
        characterModel,
        { y: "0%" },
        { y: "-100%", duration: 4, ease: "none", delay: 1 },
        0
      )
      .fromTo(refs.whatIDORef.current, { y: 0 }, { y: "15%", duration: 2 }, 0)
      .to(character.rotation, { x: -0.04, duration: 2, delay: 1 }, 0);
  }

  return () => {
    clearInterval(interval);
    tl1.kill();
    tl2.kill();
    tl3.kill();
  };
}

export function setAllTimeline(refs: SectionRefs) {
  if (!refs.careerRef.current) return;

  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: refs.careerRef.current,
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  const timeline = refs.careerRef.current.querySelector(".career-timeline");
  const boxes = refs.careerRef.current.querySelectorAll(".career-info-box");
  const dot = refs.careerRef.current.querySelector(".career-dot");

  careerTimeline
    .fromTo(
      timeline || [],
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )
    .fromTo(
      timeline || [],
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      boxes || [],
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      dot || [],
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      refs.careerRef.current,
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  }

  return () => {
    careerTimeline.kill();
  };
}
