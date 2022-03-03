import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["images", "imagebefafa", "imagebefafb"];

  connect() {
    console.log(window.screen.width);
    console.log(this.imagesTarget);
    console.log(this.imagebefafTarget);

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
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  changebefafpic(event) {
    console.log(event.target.src);
    this.imagebefafaTarget.src = event.target.src;
  }
}
