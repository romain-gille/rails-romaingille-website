import { Controller } from "@hotwired/stimulus";
import { Fancybox } from "@fancyapps/ui";

export default class extends Controller {
  static targets = ["button", "images", "arrow"];

  connect() {
    console.log("hey");
    // Fancybox.bind('[data-fancybox="Gallery1"]', {});
    // Fancybox.bind('[data-fancybox="Gallery2"]', {});
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

  displayimages() {
    event.preventDefault();
    if (this.imagesTarget.classList.contains("d-none")) {
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
