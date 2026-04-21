import React, { createContext, useContext, useRef, ReactNode } from "react";

interface SectionRefsContextType {
  landingRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  whatIDORef: React.RefObject<HTMLDivElement>;
  careerRef: React.RefObject<HTMLDivElement>;
  workRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  characterModelRef: React.RefObject<HTMLDivElement>;
  characterRimRef: React.RefObject<HTMLDivElement>;
  headerRef: React.RefObject<HTMLElement>;
}

const SectionRefsContext = createContext<SectionRefsContextType | null>(null);

export const SectionRefsProvider = ({ children }: { children: ReactNode }) => {
  const landingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const whatIDORef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const characterModelRef = useRef<HTMLDivElement>(null);
  const characterRimRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const value = {
    landingRef,
    aboutRef,
    whatIDORef,
    careerRef,
    workRef,
    contactRef,
    characterModelRef,
    characterRimRef,
    headerRef,
  };

  return (
    <SectionRefsContext.Provider value={value}>
      {children}
    </SectionRefsContext.Provider>
  );
};

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (!context) {
    throw new Error("useSectionRefs must be used within a SectionRefsProvider");
  }
  return context;
};
