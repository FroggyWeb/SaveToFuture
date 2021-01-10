import { gsap } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";

const acc = document.querySelectorAll(".js-acc-control");
acc.forEach((el) => {
  el.addEventListener("click", () => {
    toggleAcc(el);
  });
});

const toggleAcc = (elem) => {
  const child = elem.closest(".acc").querySelector(".acc-open");
  if (elem.matches(".acc-open")) {
    elem.classList.remove("acc-open");
    animHide(elem);
    return;
  }
  if (child) {
    child.classList.remove("acc-open");
    animHide(child);
  }
  elem.classList.add("acc-open");
  animShow(elem);
};

function animShow(elem) {
  const targ = elem.nextElementSibling;
  gsap.to(targ, {
    height: "auto",
    duration: 0.5,
  });
}

function animHide(elem) {
  const targ = elem.nextElementSibling;
  gsap.to(targ, {
    height: 0,
    duration: 0.5,
  });
}
