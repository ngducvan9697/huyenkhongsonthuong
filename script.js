console.log("Running script!");

// import { tns } from "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js";

var sliderHeader = tns({
  container: ".header-slider",
  autoWidth: true,
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
  loop: true,
  lazyload: true,
  slideBy: 2.6,
  autoplay: true,
  center: true,
  controls: false,
  autoplayButtonOutput: false,
});

// var sliderHeader = tns({
//   container: ".section-poems ul",
//   autoWidth: true,
//   mouseDrag: true,
//   swipeAngle: false,
//   speed: 400,
//   loop: true,
//   lazyload: true,
//   slideBy: 2.6,
//   autoplay: true,
//   center: true,
//   controls: false,
//   autoplayButtonOutput: false,
// });

var searchContainer = document.querySelector(".search-container");
var searchBtn = document.querySelector(".search-btn");
var closeSearchBtn = document.querySelector(".close-search-btn");
var searchTextCtrl = document.querySelector(".search-text");
var menuBtn = document.querySelector(".menu-btn");
var headerNavsContainer = document.querySelector(".header-navs");

searchBtn.addEventListener("click", () => {
  if (!searchContainer.classList.contains("open-search")) {
    if (searchContainer) {
      searchContainer.classList.add("open-search");
      searchTextCtrl.focus();
    }
  } else if (searchTextCtrl.value.trim()) {
    console.log("Seach: " + searchTextCtrl.value);
  } else {
    console.log("Input something");
  }
});

closeSearchBtn.addEventListener("click", () => {
  if (searchContainer) {
    searchContainer.classList.remove("open-search");
  }
});

menuBtn.addEventListener("click", () => {
  if (headerNavsContainer) {
    headerNavsContainer.classList.toggle("open");
  }
});

document.querySelectorAll(".chevron-multi").forEach((button) => {
  button.addEventListener("click", () => {
    let parent = button.parentNode?.parentNode;

    parent && parent.classList.toggle("close");
  });
});
