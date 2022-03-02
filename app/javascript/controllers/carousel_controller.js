import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  // static targets = ["button", "images", "arrow"];

  connect() {
    console.log("Hello from our first Stimulus controller");
    console.log(window.screen.width);
    var spv = 5;
    if (window.screen.width >= 1024) {
      spv = 5;
    } else {
      spv = 2;
    }
    console.log(spv);

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: spv,
      spaceBetween: 10,
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
