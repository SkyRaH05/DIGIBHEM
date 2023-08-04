"use strict";
////////////////////// Set current year  /////////////////////////////

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
////////////////////  Make mobile navigation work  /////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////  Sticky navigation  /////////////////////////////////////

const sectionHeroEl = document.querySelector(".sec-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
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

/////////////////////////  Carousel 01  /////////////////////////////////////
var container = document.getElementById("container1");
var slider = document.getElementById("slider");
var slides = document.getElementsByClassName("slide").length;
var buttons = document.getElementsByClassName("btn-slider");

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else {
    if (w < 901) {
      slidesPerPage = 2;
    } else {
      if (w < 1101) {
        slidesPerPage = 3;
      } else {
        slidesPerPage = 4;
      }
    }
  }
  slidesCount = slides - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  }
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + "%";
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
  if (currentPosition >= slidesCount) {
    buttons[1].classList.add("inactive");
  }
}

setParams();

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
    currentMargin += 100 / slidesPerPage;
    currentPosition--;
  }
  if (currentPosition === 0) {
    buttons[0].classList.add("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
}

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
    currentMargin -= 100 / slidesPerPage;
    currentPosition++;
  }
  if (currentPosition == slidesCount) {
    buttons[1].classList.add("inactive");
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
}
///////////////////////// Carousel  02 ///////////////////////////////////////////////////
var container12 = document.getElementById("container12");
var slider2 = document.getElementById("slider2");
var slidess = document.getElementsByClassName("slide2").length;
var btnss = document.getElementsByClassName("btn-slider2");

var currenPosi = 0;
var currenMargin = 0;
var sliderPerPg = 0;
var slidecount = slidess - sliderPerPg;
var containerWidths = container12.offsetWidth;
var prevKey = false;
var nextKey = true;

window.addEventListener("resize", checkWidths);

function checkWidths() {
  containerWidths = container12.offsetWidth;
  setParamss(containerWidths);
}

function setParamss(x) {
  if (x < 551) {
    sliderPerPg = 1;
  } else {
    if (x < 901) {
      sliderPerPg = 2;
    } else {
      if (x < 1101) {
        sliderPerPg = 3;
      } else {
        sliderPerPg = 4;
      }
    }
  }
  slidecount = slidess - sliderPerPg;
  if (currenPosi > slidecount) {
    currenPosi -= sliderPerPg;
  }
  currenMargin = -currenPosi * (100 / sliderPerPg);
  slider2.style.marginLeft = currenMargin + "%";
  if (currenPosi > 0) {
    btnss[0].classList.remove("inactive");
  }
  if (currenPosi < slidecount) {
    btnss[1].classList.remove("inactive");
  }
  if (currenPosi >= slidecount) {
    btnss[1].classList.add("inactive");
  }
}

setParamss();

function slidesRight() {
  if (currenPosi != 0) {
    slider2.style.marginLeft = currenMargin + 100 / sliderPerPg + "%";
    currenMargin += 100 / sliderPerPg;
    currenPosi--;
  }
  if (currenPosi === 0) {
    btnss[0].classList.add("inactive");
  }
  if (currenPosi < slidecount) {
    btnss[1].classList.remove("inactive");
  }
}

function slidesLeft() {
  if (currenPosi != slidecount) {
    slider2.style.marginLeft = currenMargin - 100 / sliderPerPg + "%";
    currenMargin -= 100 / sliderPerPg;
    currenPosi++;
  }
  if (currenPosi == slidecount) {
    btnss[1].classList.add("inactive");
  }
  if (currenPosi > 0) {
    btnss[0].classList.remove("inactive");
  }
}
//////////////////////  Carousel 03 /////////////////

var container13 = document.getElementById("container13");
var slider3 = document.getElementById("slider3");
var slidesss = document.getElementsByClassName("slide3").length;
var btnsss = document.getElementsByClassName("btn-slider3");

var currPos = 0;
var currMarg = 0;
var slidersPerPgs = 0;
var slidecounts = slidesss - slidersPerPgs;
var containerWidhtss = container12.offsetWidth;
var prevKeys = false;
var nextKeys = true;

window.addEventListener("resize", checkWidthss);

function checkWidthss() {
  containerWidhtss = container13.offsetWidth;
  setParamsss(containerWidhtss);
}

function setParamsss(q) {
  if (q < 551) {
    slidersPerPgs = 1;
  } else {
    if (q < 901) {
      slidersPerPgs = 2;
    } else {
      if (q < 1101) {
        slidersPerPgs = 3;
      } else {
        slidersPerPgs = 4;
      }
    }
  }
  slidecounts = slidesss - slidersPerPgs;
  if (currPos > slidecounts) {
    currPos -= slidersPerPgs;
  }
  currMarg = -currPos * (100 / slidersPerPgs);
  slider3.style.marginLeft = currMarg + "%";
  if (currPos > 0) {
    btnsss[0].classList.remove("inactive");
  }
  if (currPos < slidecounts) {
    btnsss[1].classList.remove("inactive");
  }
  if (currPos >= slidecounts) {
    btnsss[1].classList.add("inactive");
  }
}

setParamsss();

function slidessRight() {
  if (currPos != 0) {
    slider3.style.marginLeft = currMarg + 100 / slidersPerPgs + "%";
    currMarg += 100 / slidersPerPgs;
    currPos--;
  }
  if (currPos === 0) {
    btnsss[0].classList.add("inactive");
  }
  if (currPos < slidecounts) {
    btnsss[1].classList.remove("inactive");
  }
}

function slidessLeft() {
  if (currPos != slidecounts) {
    slider3.style.marginLeft = currMarg - 100 / slidersPerPgs + "%";
    currMarg -= 100 / slidersPerPgs;
    currPos++;
  }
  if (currPos == slidecounts) {
    btnsss[1].classList.add("inactive");
  }
  if (currPos > 0) {
    btnsss[0].classList.remove("inactive");
  }
}

/////////////////////// WHEEL //////////////////////////
var degree = 1800;
var clicks = 0;

document.addEventListener("DOMContentLoaded", function () {
  /*WHEEL SPIN FUNCTION*/
  document.querySelector("#spin").onclick = function () {
    //add 1 every click
    clicks++;

    /*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
    var newDegree = degree * clicks;
    var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
    var totalDegree = newDegree + extraDegree;

    /*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
    document.querySelectorAll(".sec").forEach(function (t) {
      var noY = 0;

      var c = 0;
      var n = 700;
      var interval = setInterval(function () {
        c++;
        if (c === n) {
          clearInterval(interval);
        }

        var aoY = t.offset().top;
        //document.querySelector("#txt").innerHTML = aoY;
        console.log(aoY);

        /*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn*/
        if (aoY < 23.89) {
          console.log("<<<<<<<<");
          document.querySelector("#spin").classList.add("spin");
          setTimeout(function () {
            document.querySelector("#spin").classList.remove("spin");
          }, 100);
        }
      }, 10);

      document.querySelector("#inner-wheel").style.transform =
        "rotate(" + totalDegree + "deg)";

      noY = t.offset().top;
    });
  };
});
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
    console.log(event);
  });
};

displayButton();
scrollToTop();
