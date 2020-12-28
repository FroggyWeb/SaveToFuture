import { gsap } from "gsap/all";
import { ScrollToPlugin, ScrollTrigger, CSSRulePlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

const intro = gsap.timeline({
  defaults: {
    // children inherit these defaults
    duration: 1,
    ease: "power2.inOut",
  },
});

intro
  .from(".header-page", { duration: 2, y: "-100%" })
  .from(".intro__title", { duration: 2, opacity: 0 })
  .from(".intro .separator", {
    duration: 1,
    transformOrigin: "left",
    scaleX: 0,
  })
  .from(".intro__txt", { opacity: 0 })
  .from(".intro__img", { opacity: 0, rotateY: -180 })
  .from(".intro__cnt .btn", { opacity: 0 })
  .to(".intro__cnt .btn", { duration: 0.25, rotateZ: 10 })
  .to(".intro__cnt .btn", { duration: 0.25, rotateZ: 0 });
