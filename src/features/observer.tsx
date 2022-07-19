import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Observer = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray<HTMLElement>(".item").forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom + 100px",
        end: "bottom top + 100px",
        onEnter: () => {
          gsap.to(element, {
            y: -100,
            duration: 0.5,
            opacity: 1,
          });
        },
        onLeave: () => {
          gsap.to(element, {
            y: -200,
            duration: 0.5,
            opacity: 0,
          });
        },
        onEnterBack: () => {
          gsap.to(element, {
            y: -100,
            duration: 0.5,
            opacity: 1,
          });
        },
        onLeaveBack: () => {
          gsap.to(element, {
            y: 0,
            duration: 0.5,
            opacity: 0,
          });
        },
      },
    });
  });
};

export default Observer;
