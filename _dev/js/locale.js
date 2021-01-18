import * as dataLang from "./../data/langlist.json";

const url = window.location.pathname.split("/");
const urlLocale = url[1];
const urlPage = url[2];
let browserLang = (navigator.language || navigator.userLanguage).substring(
  0,
  2
);
const currentLang = document.documentElement.lang;
const { langList } = dataLang; // список доступных языков из /data/langlist.json

if (!langList.includes(browserLang)) {
  browserLang = "en";
}

const redirect = (lang) => {
  if (urlLocale != lang) window.location.replace(`/${lang}/${urlPage}`);
};

let changeLang = localStorage.getItem("locale") || browserLang;

document.addEventListener("DOMContentLoaded", function () {
  const langList = document.querySelectorAll(".lang-swith");
  langList.forEach((langNav) => {
    langNav.addEventListener("click", function (e) {
      e.stopPropagation();
      const changeLang = e.target.dataset.lang;
      this.classList.toggle("open");
      if (changeLang != currentLang && changeLang) {
        localStorage.setItem("locale", changeLang);
        redirect(changeLang);
      }
    });
  });
});

redirect(changeLang);
