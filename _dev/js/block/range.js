// let loc = { locale: { code: test } };
import formatDuration from "date-fns/formatDuration";
// import "date-fns/locale";

const getLocale = (locale) => require(`date-fns/locale/${locale}/index.js`);

let lang = document.documentElement.lang;
if (lang == "en") lang = "en-US";

const formatPeriod = (duration, locale) => {
  return formatDuration(duration, {
    locale: getLocale(locale),
  });
};

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach((wrap) => {
  const range = wrap.querySelector(".range");
  const rangeSel = wrap.querySelector(".range-sel");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("change", () => {
    setBubble(range, bubble);
  });
  range.addEventListener("input", () => {
    setRangeSel(range, rangeSel);
  });
  setBubble(range, bubble);
});

function calcPosition(range) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  return newVal;
}

function setRangeSel(range, rangeSel) {
  const val = range.value;
  const newVal = calcPosition(range);
  rangeSel.style.width = newVal + "%";
}

function setBubble(range, bubble) {
  let val = range.value;
  const newVal = calcPosition(range);
  const dateDuration = range.dataset.duration;
  const dates = formatPeriod(
    { years: Math.floor(val / 12), months: val % 12 },
    lang
  );

  if (dateDuration) {
    bubble.innerHTML = dates;
  } else {
    bubble.innerHTML = val;
  }
  if (newVal > 70) {
    bubble.style.transform = "translateX(-100%)";
  } else {
    bubble.style.transform = "translateX(0)";
  }
  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
