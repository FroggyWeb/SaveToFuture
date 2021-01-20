import { gsap } from "gsap/all";
import { ScrollToPlugin, ScrollTrigger, CSSRulePlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

const cardTl = gsap.timeline({
  defaults: {
    // children inherit these defaults
    duration: 0.5,
    ease: "power2.inOut",
  },
});

gsap.from(".header-page", { duration: 1, y: "-100%" });

const headers = document.querySelectorAll(".header-section");
headers.forEach((el) => {
  gsap.from(el, {
    autoAlpha: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: el,
      start: "top 50%",
    },
  });
});

const cards = document.querySelectorAll(".cases .card");
const intro = document.querySelector(".intro");
const indexUse = document.querySelector(".index-use");
const indexWork = document.querySelectorAll(".work-list__item");

function animCard(el) {
  gsap.set(el, { opacity: 1 });
  const btn = el.querySelector(".card__cnt .btn");

  gsap
    .timeline()
    .from(el.querySelector(".card__title"), {
      opacity: 0,
      duration: 0.25,
    })
    .from(
      el.querySelector(".separator"),
      {
        duration: 0.5,
        transformOrigin: "left",
        scaleX: 0.5,
      },
      "-=.25"
    )
    .from(el.querySelector(".card__txt"), { opacity: 0, duration: 0.5 })
    .from(
      el.querySelector(".card__img"),
      {
        duration: 1,
        opacity: 0,
        rotateY: -180,
      },
      "-=1"
    );

  if (btn) {
    cardTl
      .from(btn, { duration: 0.25, opacity: 0 })
      .to(btn, { duration: 0.25, opacity: 1, rotateZ: 10 })
      .to(btn, { duration: 0.25, rotateZ: 0 });
  }
}

function animWork(el) {
  gsap.set(el, { opacity: 1 });
  gsap
    .timeline()
    .from(el.querySelector(".work-list__counter"), {
      opacity: 0,
      scale: 1.5,
      duration: 0.75,
    })
    .from(el.querySelector(".work-list__border"), {
      scaleY: 0,
    })
    .from(
      el.querySelector(".work-list__txt"),
      {
        opacity: 0,
      },
      "-=1"
    )
    .from(
      el.querySelector(".work-list__img"),
      {
        opacity: 0,
      },
      "-=.1"
    );
}

gsap.to(intro, {
  scrollTrigger: {
    toggleActions: "play complite none none",
    trigger: intro,
    onEnter: () => animCard(intro),
    onLeaveBack: (self) => self.disable(),
  },
});

gsap.to(indexUse, {
  scrollTrigger: {
    toggleActions: "play complite none none",
    trigger: indexUse,
    onEnter: () => animCard(indexUse),
    onLeaveBack: (self) => self.disable(),
  },
});

cards.forEach((el) => {
  gsap.set(el, { opacity: 0 });
  ScrollTrigger.create({
    trigger: el,
    start: "top 70%",
    toggleActions: "play complite none none",
    onEnter: () => animCard(el),
    onLeaveBack: (self) => self.disable(),
  });
});

indexWork.forEach((el) => {
  gsap.set(el, { opacity: 0 });

  ScrollTrigger.create({
    trigger: el,
    start: "top 70%",
    toggleActions: "play complite none none",
    onEnter: () => animWork(el),
    onLeaveBack: (self) => self.disable(),
  });
});
