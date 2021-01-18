import Swiper, { Pagination, EffectFade, Autoplay } from "swiper";
import { gsap, ScrollToPlugin, ScrollTrigger, CSSRulePlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const tlService = gsap.timeline({
  defaults: {
    // children inherit these defaults
    duration: 1,
    ease: "power2.inOut",
  },
});

function initService() {
  let pagination = $(".service .pagination-icon");
  // pagination.eq(0).removeClass("swiper-pagination-bullet-active");
  // tlService.from(pagination, {stagger: 1})
  // Service.autoplay.stop();
  let el = ".service .pagination-icon__wrap";
  let timer = ".service .pagination-icon__timer";
  tlService
    .from(el, { autoAlpha: 0, duration: 0.5, stagger: .2 })
    .to(el, { autoAlpha: 1, scale: 1.1, duration: 0.5 })
    .to(el, { scale: 1, duration: 0.5 })
  tlService.from(
      timer,
      {
        scaleX: 0,
        duration: 0.25,
        transformOrigin: "left",
        stagger: .2
      },
      "-=.2"
    );
  // pagination.each(function () {
  // });

  tlService.from(".service .card", {
    onComplete: () => {
      // slideAnim();
      setDelay(Service);
      Service.slideReset(0);
      Service.autoplay.start();
      showProgress(Service);
    },
  });

  slideAnim();
  // Service.autoplay.start();
}

function slideAnim() {
  let active = document.querySelector(".service .swiper-slide-active");
  tlService
    .from(active.querySelector(".card__img"), {
      opacity: 0,
      rotateY: -180,
      duration: 1,
    })
  tlService.from(active.querySelector(".card__title"), {
      opacity: 0,
      duration: 1,
    }, "-=.5")
  tlService.from(
      active.querySelector(".separator"),
      {
        scaleX: 0,
        transformOrigin: "left",
         duration: 0.5,
      }
    )
  tlService.from(active.querySelectorAll(".card__txt"), {
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
    }, "-=.5");
}

Swiper.use([Pagination, EffectFade, Autoplay]);

const setDelay = (slider) => {
  console.log("sett");
  const delay = slider.params.autoplay.delay;
  if (delay) {
    let elem = $(slider.$el).find(".pagination-icon__timer");
    elem.each(function () {
      $(this).css("animationDuration", delay + "ms");
    });
  }
};

const showProgress = (slider) => {
  let autoplay = slider.autoplay.running;
  if (autoplay) {
    slider.$el.addClass("process");
  } else {
    slider.$el.removeClass("process");
  }
};

const Service = new Swiper(".js-service-slider", {
  effect: "fade",
  init: false,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class= "pagination-icon ${className}">
          <span class="pagination-icon__wrap">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 135 135" xml:space="preserve">
                <path class="svg-st-out" d="M1.4,67.5l33-57.6l66.1,0l33,57.6l-33,57.6H34.5L1.4,67.5z"/>
                <path class="svg-st-in" d="M11.6,67.5l28-48.1l55.9,0l28,48.1l-28,48.1H39.5L11.6,67.5z"/>
            </svg>
          </span>
        <span class="pagination-icon__timer"></span>
        </span>`;
    },
  },
});

Service.init();
Service.autoplay.stop();

Service.on("init", function () {
  setDelay(Service);
  showProgress(Service);
});

Service.on("slideChange", function () {
  showProgress(Service);
});

Service.on("slideChangeTransitionStart", function () {
  slideAnim();
});

// $(".swiper-container").on({
//   mouseenter: function () {
//     swiper.stopAutoplay();
//   },
//   mouseleave: function () {
//     swiper.startAutoplay();
//   },
// });

ScrollTrigger.create({
  trigger: ".service",
  // markers: true,
  start: "top center",
  onEnter: () => initService(),
  onLeaveBack: (self) => self.disable(),
});


