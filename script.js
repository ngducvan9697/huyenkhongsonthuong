import { tns } from "./node_modules/tiny-slider/src/tiny-slider.js";

// var slider = tns({
//   container: ".header-slider",
//   items: 3,
//   slideBy: "page",
//   mouseDrag: true,
//   swipeAngle: false,
//   speed: 400,
//   autoplay: true,
// });

var slider = tns({
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
