import { gsap, ScrollToPlugin, ScrollTrigger, CSSRulePlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline();
const sections = document.querySelectorAll(".section");

function goToSection(section, anim) {
  gsap.to(window, {
    scrollTo: { y: section, autoKill: false },
    duration: 1,
  });

  if (anim) {
    anim.restart();
  }
}

sections.forEach((section) => {
  const intoAnim = gsap.timeline({ paused: true });
  let title = section.querySelector(".title-section");
  if (title) {
    intoAnim.from(title, {
      opacity: 0,
      delay: 1,
      duration: 1,
    });
  }

  ScrollTrigger.create({
    // markers: true,
    trigger: section,
    end: "bottom 70%",
    start: "top 70%",
    onEnter: () => goToSection(section, intoAnim),
    // onEnterBack: () => goToSection(section),
  });
});
