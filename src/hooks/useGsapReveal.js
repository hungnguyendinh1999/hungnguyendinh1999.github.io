import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapReveal(options = {}) {
  useEffect(() => {
    const sections = gsap.utils.toArray("section");

    sections.forEach((section) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "10% 80%",
          end: "20% 90%",
          ...options.scrollTrigger,
        },
      });

      timeline.to(section.querySelectorAll(".reveal-up"), {
        opacity: 1,
        y: "0%",
        duration: 0.8,
        stagger: 0.2,
        ...options.animation,
      });
    });
  }, []);
}
