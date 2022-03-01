import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "images", "arrow"];

  connect() {
    console.log("Hello from our first Stimulus controller");
    console.log(this.buttonTarget);
    console.log(this.imagesTarget);
    console.log(this.arrowTarget);
  }
  // displayimages() {
  //   event.preventDefault();
  //   if (this.imagesTarget.display === "none") {
  //     this.imagesTarget.display = "flex";
  //     console.log(this.imagesTarget.display);
  //     setTimeout(() => (this.imagesTarget.style.height = "50px"), 1);
  //     this.imagesTarget.classList.remove("d-none");
  //     this.arrowTarget.classList.remove("fa-angle-down");
  //     this.arrowTarget.classList.add("fa-angle-up");
  //   } else {
  //     this.imagesTarget.display = "none";

  //     this.arrowTarget.classList.add("fa-angle-down");
  //     this.arrowTarget.classList.remove("fa-angle-up");
  //   }
  // }
  displayimages() {
    event.preventDefault();
    if (this.imagesTarget.classList.contains("d-none")) {
      this.imagesTarget.classList.remove("d-none");
      console.log(this.imagesTarget.classList);
      this.imagesTarget.classList.remove("d-none");
      this.arrowTarget.classList.remove("fa-angle-down");
      this.arrowTarget.classList.add("fa-angle-up");
    } else {
      this.imagesTarget.classList.add("d-none");
      this.arrowTarget.classList.add("fa-angle-down");
      this.arrowTarget.classList.remove("fa-angle-up");
    }
  }
}
