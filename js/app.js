"use strict";

/////////////////   Make mobile navigation work    ///////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////   Sticky navigation   ///////////////////////////
const sectionHeroEl = document.querySelector(".sec-select");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === true) {
      document.body.classList.add("sticky");
    }
  },

  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
///////////////////////////  SCROLL TOP ///////////////////////////////////////////////////////
const button = document.querySelector(".btn-scroll");

const displayButton = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};

displayButton();
scrollToTop();
