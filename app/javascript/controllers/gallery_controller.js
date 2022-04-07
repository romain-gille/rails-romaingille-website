import { Controller } from "@hotwired/stimulus";
import { Fancybox } from "@fancyapps/ui";

export default class extends Controller {
  static targets = ["button", "images", "arrow", "SelectButton", "selectImage"];

  connect() {
    console.log("hey");
    setTimeout(100);
    Fancybox.bind(".gallery-images a", {
      groupAll: true, // Group all items
      on: {
        ready: (fancybox) => {
          console.log(`fancybox #${fancybox.id} is ready!`);
        },
      },
    });
  }

  displaySelectButton(e) {
    e.preventDefault();


    console.log(this.selectImageTargets);
    if (this.selectImageTarget.classList.contains("d-none")) {
      this.selectImageTargets.forEach((e) => {
        console.log(e);
        e.classList.remove("d-none")
      })
    } else {
      this.selectImageTargets.forEach((e) => {
        console.log(e);
        e.classList.add("d-none")
        e.style.background = null
      })
    }


  }

  displayimages(event) {
    event.preventDefault();
    if (this.imagesTarget.classList.contains("d-none")) {
      this.imagesTarget.classList.remove("d-none");
      this.arrowTarget.classList.remove("fa-angle-down");
      this.arrowTarget.classList.add("fa-angle-up");
      this.SelectButtonTarget.classList.remove("d-none");

    } else {
      this.imagesTarget.classList.add("d-none");
      this.arrowTarget.classList.add("fa-angle-down");
      this.arrowTarget.classList.remove("fa-angle-up");
      this.SelectButtonTarget.classList.add("d-none");
    }
  }
  selectImage(e) {

    e.preventDefault();
    console.log(e.currentTarget);
    if (e.currentTarget.style.background.search("green") != -1) {
      e.currentTarget.style.background = null
      console.log("yoo");
    } else {
      e.currentTarget.style.background = "green"
    }
  }
}
