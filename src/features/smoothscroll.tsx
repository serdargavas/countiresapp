import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// After spending hours of bug fixing, finally decided to remove smoothscrolling from app.
// Didn't wanted to delete completely

const Smoothscroll = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray<HTMLElement>(".box").forEach((box) => {
    gsap.to(box, {
      backgroundColor: "#ffffff",
      scrollTrigger: {
        trigger: box,
        start: "top center",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });
  });

  function setupLinks(scroller: any) {
    let linkElements = gsap.utils.toArray(".nav a"),
      linkTargets = linkElements.map((e: any) =>
        document.querySelector(e.getAttribute("href"))
      ),
      linkPositions: string[] | number[] = [],
      calculatePositions = () => {
        linkTargets.forEach(
          (e, i) =>
            (linkPositions[i] =
              e.getBoundingClientRect().top - e.getBoundingClientRect().offset)
        );
      };

    linkElements.forEach((element: any, i) => {
      element.addEventListener("click", (e: any) => {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: linkPositions[i],
          ease: "power4",
          overwrite: true,
        });
      });
    });

    ScrollTrigger.addEventListener("refresh", calculatePositions);
  }

  useEffect(() => {
    let container = document.querySelector(
      "#scroll-container"
    ) as HTMLInputElement;
    setupLinks(container);

    let height: number;
    function setHeight() {
      height = container.clientHeight;
      document.body.style.height = height + "px";
    }
    ScrollTrigger.addEventListener("refreshInit", setHeight);

    // smooth scrolling container
    gsap.to(container, {
      y: () => -(height - document.documentElement.clientHeight),
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return <div></div>;
};

export default Smoothscroll;
