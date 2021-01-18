import { gsap } from "gsap/all";
import { ScrollToPlugin, ScrollTrigger, CSSRulePlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

const intro = gsap.timeline({
  defaults: {
    // children inherit these defaults
    duration: .5,
    ease: "power2.inOut",
  },
});

intro
  .from(".header-page", { duration: 1, y: "-100%" })


// ScrollTrigger.create({
//   trigger: ".card",
//   // markers: true,
//   start: "center center",
//   onEnter: () => {
//     intro.from(".card__title", { opacity: 0 })
//     intro.from(".card .separator", {
//       duration: .7,
//       transformOrigin: "left",
//       scaleX: 0,
//     })
//     intro.from(".card__txt", { autoAlpha: 0 })
//     intro.from(".card__img", { duration: 1, autoAlpha: 0, rotateY: -180 })
//     intro.from(".card__cnt .btn", { autoAlpha: 0 })
//     intro.to(".card__cnt .btn", { duration: .25, autoAlpha: 1, rotateZ: 10 })
//     intro.to(".card__cnt .btn", { duration: .25, autoAlpha: 1, rotateZ: 0 });
//   },
//   onLeaveBack: (self) => self.disable(),
// });

const cards = gsap.utils.toArray(".cases .card")

cards.forEach( (el) => {
   intro.from(el.querySelector(".card__title"), {
     opacity: 0,
     scrollTrigger: {
        trigger: el,
        start: "top 90%"
      }
    })
    intro.from(el.querySelector(".card .separator"), {
      duration: .7,
      transformOrigin: "left",
      scaleX: 0,
    })
    intro.from(el.querySelector(".card__txt"), { opacity: 0 })
    intro.from(el.querySelector(".card__img"), { duration: 1, opacity: 0, rotateY: -180 })
    intro.from(el.querySelector(".card__cnt .btn"), { opacity: 0 })
})


  // headers.forEach( (el)=> {
  // gsap.to(el, {
  // autoAlpha: 1,
  // yPercent: 0,
  // scrollTrigger: {
  //   trigger: el,
  //   start: "top 50%"
  // }
