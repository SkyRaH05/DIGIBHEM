"use strict";
const yearEl = document.querySelector(".year"),
  currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
const btnNavEl = document.querySelector(".btn-mobile-nav"),
  headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
const sectionHeroEl = document.querySelector(".sec-hero"),
  obs = new IntersectionObserver(
    function (e) {
      let s = e[0];
      !1 === s.isIntersecting && document.body.classList.add("sticky"),
        !0 === s.isIntersecting && document.body.classList.remove("sticky");
    },
    { root: null, threshold: 0, rootMargin: "-80px" }
  );
obs.observe(sectionHeroEl);
var container = document.getElementById("container1"),
  slider = document.getElementById("slider"),
  slides = document.getElementsByClassName("slide").length,
  buttons = document.getElementsByClassName("btn-slider"),
  currentPosition = 0,
  currentMargin = 0,
  slidesPerPage = 0,
  slidesCount = slides - slidesPerPage,
  containerWidth = container.offsetWidth,
  prevKeyActive = !1,
  nextKeyActive = !0;
function checkWidth() {
  setParams((containerWidth = container.offsetWidth));
}
function setParams(e) {
  currentPosition >
    (slidesCount =
      slides -
      (slidesPerPage = e < 551 ? 1 : e < 901 ? 2 : e < 1101 ? 3 : 4)) &&
    (currentPosition -= slidesPerPage),
    (currentMargin = -currentPosition * (100 / slidesPerPage)),
    (slider.style.marginLeft = currentMargin + "%"),
    currentPosition > 0 && buttons[0].classList.remove("inactive"),
    currentPosition < slidesCount && buttons[1].classList.remove("inactive"),
    currentPosition >= slidesCount && buttons[1].classList.add("inactive");
}
function slideRight() {
  0 != currentPosition &&
    ((slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%"),
    (currentMargin += 100 / slidesPerPage),
    currentPosition--),
    0 === currentPosition && buttons[0].classList.add("inactive"),
    currentPosition < slidesCount && buttons[1].classList.remove("inactive");
}
function slideLeft() {
  currentPosition != slidesCount &&
    ((slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%"),
    (currentMargin -= 100 / slidesPerPage),
    currentPosition++),
    currentPosition == slidesCount && buttons[1].classList.add("inactive"),
    currentPosition > 0 && buttons[0].classList.remove("inactive");
}
window.addEventListener("resize", checkWidth), setParams();
var container12 = document.getElementById("container12"),
  slider2 = document.getElementById("slider2"),
  slidess = document.getElementsByClassName("slide2").length,
  btnss = document.getElementsByClassName("btn-slider2"),
  currenPosi = 0,
  currenMargin = 0,
  sliderPerPg = 0,
  slidecount = slidess - sliderPerPg,
  containerWidths = container12.offsetWidth,
  prevKey = !1,
  nextKey = !0;
function checkWidths() {
  setParamss((containerWidths = container12.offsetWidth));
}
function setParamss(e) {
  currenPosi >
    (slidecount =
      slidess - (sliderPerPg = e < 551 ? 1 : e < 901 ? 2 : e < 1101 ? 3 : 4)) &&
    (currenPosi -= sliderPerPg),
    (currenMargin = -currenPosi * (100 / sliderPerPg)),
    (slider2.style.marginLeft = currenMargin + "%"),
    currenPosi > 0 && btnss[0].classList.remove("inactive"),
    currenPosi < slidecount && btnss[1].classList.remove("inactive"),
    currenPosi >= slidecount && btnss[1].classList.add("inactive");
}
function slidesRight() {
  0 != currenPosi &&
    ((slider2.style.marginLeft = currenMargin + 100 / sliderPerPg + "%"),
    (currenMargin += 100 / sliderPerPg),
    currenPosi--),
    0 === currenPosi && btnss[0].classList.add("inactive"),
    currenPosi < slidecount && btnss[1].classList.remove("inactive");
}
function slidesLeft() {
  currenPosi != slidecount &&
    ((slider2.style.marginLeft = currenMargin - 100 / sliderPerPg + "%"),
    (currenMargin -= 100 / sliderPerPg),
    currenPosi++),
    currenPosi == slidecount && btnss[1].classList.add("inactive"),
    currenPosi > 0 && btnss[0].classList.remove("inactive");
}
window.addEventListener("resize", checkWidths), setParamss();
var container13 = document.getElementById("container13"),
  slider3 = document.getElementById("slider3"),
  slidesss = document.getElementsByClassName("slide3").length,
  btnsss = document.getElementsByClassName("btn-slider3"),
  currPos = 0,
  currMarg = 0,
  slidersPerPgs = 0,
  slidecounts = slidesss - slidersPerPgs,
  containerWidhtss = container12.offsetWidth,
  prevKeys = !1,
  nextKeys = !0;
function checkWidthss() {
  setParamsss((containerWidhtss = container13.offsetWidth));
}
function setParamsss(e) {
  currPos >
    (slidecounts =
      slidesss -
      (slidersPerPgs = e < 551 ? 1 : e < 901 ? 2 : e < 1101 ? 3 : 4)) &&
    (currPos -= slidersPerPgs),
    (currMarg = -currPos * (100 / slidersPerPgs)),
    (slider3.style.marginLeft = currMarg + "%"),
    currPos > 0 && btnsss[0].classList.remove("inactive"),
    currPos < slidecounts && btnsss[1].classList.remove("inactive"),
    currPos >= slidecounts && btnsss[1].classList.add("inactive");
}
function slidessRight() {
  0 != currPos &&
    ((slider3.style.marginLeft = currMarg + 100 / slidersPerPgs + "%"),
    (currMarg += 100 / slidersPerPgs),
    currPos--),
    0 === currPos && btnsss[0].classList.add("inactive"),
    currPos < slidecounts && btnsss[1].classList.remove("inactive");
}
function slidessLeft() {
  currPos != slidecounts &&
    ((slider3.style.marginLeft = currMarg - 100 / slidersPerPgs + "%"),
    (currMarg -= 100 / slidersPerPgs),
    currPos++),
    currPos == slidecounts && btnsss[1].classList.add("inactive"),
    currPos > 0 && btnsss[0].classList.remove("inactive");
}
window.addEventListener("resize", checkWidthss), setParamsss();
var degree = 1800,
  clicks = 0;
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#spin").onclick = function () {
    var e,
      s = degree * ++clicks + (Math.floor(360 * Math.random()) + 1);
    document.querySelectorAll(".sec").forEach(function (e) {
      var t = 0,
        r = 0,
        i = setInterval(function () {
          700 == ++r && clearInterval(i);
          var s = e.offset().top;
          console.log(s),
            s < 23.89 &&
              (console.log("<<<<<<<<"),
              document.querySelector("#spin").classList.add("spin"),
              setTimeout(function () {
                document.querySelector("#spin").classList.remove("spin");
              }, 100));
        }, 10);
      (document.querySelector("#inner-wheel").style.transform =
        "rotate(" + s + "deg)"),
        (t = e.offset().top);
    });
  };
});
const button = document.querySelector(".btn-scroll"),
  displayButton = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100
        ? (button.style.display = "block")
        : (button.style.display = "none");
    });
  },
  scrollToTop = () => {
    button.addEventListener("click", () => {
      window.scroll({ top: 0, left: 0, behavior: "smooth" }),
        console.log(event);
    });
  };
displayButton(), scrollToTop();
