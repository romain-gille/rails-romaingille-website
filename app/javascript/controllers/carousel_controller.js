import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["images", "imagebefaf"];

  connect() {
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
    slider = new juxtapose.JXSlider(
      "#beforeafter",
      [
        {
          src: event.target.getAttribute("data-img-id"),
        },
        {
          src: event.target.src,
        },
      ],
      {
        animate: true,
        startingPosition: "50%",
        makeResponsive: true,
      }
    );

    this.imagebefafTarget.innerHTML = "";
  }
}
