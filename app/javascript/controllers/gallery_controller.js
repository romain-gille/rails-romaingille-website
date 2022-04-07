import { Controller } from "@hotwired/stimulus";
import { Fancybox } from "@fancyapps/ui";

export default class extends Controller {
  static targets = ["button", "images", "arrow", "SelectButton", "selectImage", "DownloadButton"];
  static variables = { numImagesSelected: Number }
  connect() {
    this.numImagesSelectedValue = 0
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

  DownloadButton() {
    console.log("download");
  }
  displaySelectButton(e) {
    e.preventDefault();
    console.log(this.selectImageTargets);
    if (this.selectImageTarget.classList.contains("d-none")) {
      this.selectImageTargets.forEach((e) => {
        console.log(e);
        e.classList.remove("d-none")

      })
      this.SelectButtonTarget.innerHTML = "Unselect all"
      this.DownloadButtonTarget.classList.remove("d-none");
    } else {
      this.selectImageTargets.forEach((e) => {
        console.log(e);
        e.classList.add("d-none")
        e.style.background = null

      })
      this.SelectButtonTarget.innerHTML = "Select images"
      this.DownloadButtonTarget.classList.add("d-none");
      this.numImagesSelectedValue = 0
      this.DownloadButtonTarget.innerHTML = `Download ${this.numImagesSelectedValue} files`
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
      this.numImagesSelectedValue -= 1
    } else {
      e.currentTarget.style.background = "green"
      this.numImagesSelectedValue += 1
    }
    this.DownloadButtonTarget.innerHTML = `Download ${this.numImagesSelectedValue} files`
  }

}
