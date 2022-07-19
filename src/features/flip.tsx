import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FlipContent = () => {
  gsap.registerPlugin(Flip);

  const items = gsap.utils.toArray<HTMLImageElement>(".country img"),
    details = document.querySelector(".detail") as HTMLElement,
    detailContent = document.querySelector(".detail .content") as HTMLElement,
    detailImage = document.querySelector(".detail .flag") as HTMLImageElement;

  let activeItem: any;

  gsap.set(detailContent, { yPercent: -100 });

  function showDetails(item: any) {
    if (activeItem) {
      return hideDetails();
    }
    let onLoad = () => {
      Flip.fit(details, item, { scale: true, fitChild: detailImage });

      const state: any = Flip.getState(details);

      gsap.set(details, { clearProps: true });
      gsap.set(details, {
        xPercent: -50,
        top: "50%",
        yPercent: -50,
        visibility: "visible",
        overflow: "hidden",
      });
      gsap.set(".detail-title-inner", {
        opacity: 1,
        overflow: "hidden",
      });
      gsap.set(detailImage, { filter: "brightness(20%)" });
      gsap.set("body", { overflow: "hidden" });
      gsap.from(".coatofarms", {
        opacity: "0",
        y: 200,
        ease: "power4.out",
        delay: 0.3,
        duration: 1,
      });
      gsap.to(".coatofarms", {
        opacity: "1",
        y: 0,
        ease: "power4.out",
        delay: 0.3,
        duration: 1,
      });
      gsap.from(".detail-title", {
        opacity: "0",
        y: 200,
        ease: "power4.out",
        delay: 0.6,
        duration: 1,
      });
      gsap.to(".detail-title", {
        opacity: "1",
        y: 0,
        ease: "power4.out",
        delay: 0.6,
        duration: 1,
      });
      gsap.from(".detail-title-inner-right h2", {
        opacity: "0",
        y: 200,
        ease: "power4.out",
        delay: 0.9,
        duration: 1,
      });
      gsap.to(".detail-title-inner-right h2", {
        opacity: "1",
        y: 0,
        ease: "power4.out",
        delay: 0.9,
        duration: 1,
      });

      const asd = () => {
        gsap.set(details, { overflow: "auto" });
      };

      Flip.from(state, {
        duration: 0.5,
        ease: "power2.inOut",
        scale: true,
        onComplete: () => asd(),
      })
      .to(detailContent, { yPercent: 0 }, 0.2);

      detailImage.removeEventListener("load", onLoad);
      document.addEventListener("click", hideDetails);
    };

    const data = item.dataset;
    detailImage.addEventListener("load", onLoad);
    detailImage.src = item.src;
    gsap.to(".detail .content", {
      height: "auto",
      overflow: "visible",
      duration: 0.2,
    });

    gsap
      .to(items, {
        opacity: 0.3,
        stagger: { amount: 0.7, from: items.indexOf(item), grid: "auto" },
      })
      .kill(item);

    activeItem = item;
  }

  function hideDetails() {
    document.removeEventListener("click", hideDetails);
    gsap.set("body", { overflowX: "hidden", overflowY: "scroll" });
    gsap.set(details, { overflow: "hidden" });
    gsap.to(".detail .content", {
      height: "0",
      overflow: "hidden",
      duration: 0.2,
    });
    gsap.set(".detail-title-inner", {
      opacity: 0,
      overflow: "hidden",
    });

    const state = Flip.getState(details);

    Flip.fit(details, activeItem, { scale: true, fitChild: detailImage });

    const tl: any = gsap.timeline();
    tl.set(details, { overflow: "hidden" })
      .to(detailContent, { yPercent: -100 })
      .to(items, {
        opacity: 1,
        stagger: { amount: 0.7, from: items.indexOf(activeItem), grid: "auto" },
      });

    Flip.from(state, {
      scale: true,
      duration: 0.6,
      delay: 0.2,
      onInterrupt: () => tl.kill(),
    }).set(details, { visibility: "hidden" });

    activeItem = null;
  }

  gsap.utils
    .toArray<HTMLElement>(".item")
    .forEach((item) =>
      item.addEventListener("click", () =>
        showDetails(item.querySelector(".country img"))
      )
    );

  window.addEventListener("load", () => {
    gsap.to(".item", { autoAlpha: 1, duration: 0.2 });
    gsap.from(".item", { autoAlpha: 0, yPercent: 30, stagger: 0.04 });
  });
};

export default FlipContent;
