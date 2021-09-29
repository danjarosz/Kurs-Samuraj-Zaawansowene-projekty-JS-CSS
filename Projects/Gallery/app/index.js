import "../sass/style.scss";

class Doggo {
  constructor() {
    this.apiUrl = "https://dog.ceo/api";
    this.imgEl = document.querySelector(".featured-dog img");
    this.backgroundEl = document.querySelector(".featured-dog__background");
    this.tilesEl = document.querySelector(".tiles");
    this.spinnerEl = document.querySelector(".spinner");

    this.init();
  }

  showLoading = () => {
    this.spinnerEl.classList.add("spinner--visible");
  };

  hideLoading = () => {
    this.spinnerEl.classList.remove("spinner--visible");
  };

  listBreeds = async () => {
    return await fetch(`${this.apiUrl}/breeds/list/all`)
      .then((res) => res.json())
      .then((data) => data.message);
  };

  getRandomImage = async () => {
    return await fetch(`${this.apiUrl}/breeds/image/random`)
      .then((res) => res.json())
      .then((data) => data.message);
  };

  getRandomImageByBreed = async (breed) => {
    return await fetch(`${this.apiUrl}/breed/${breed}/images/random`)
      .then((res) => res.json())
      .then((data) => data.message);
  };

  addBreed = (breed, subBreed) => {
    let name;
    let type;
    if (typeof subBreed === "undefined") {
      name = breed;
      type = breed;
    } else {
      name = `${breed} ${subBreed}`;
      type = `${breed}/${subBreed}`;
    }

    const tile = document.createElement("div");
    tile.classList.add("tiles__tile");

    const tileContent = document.createElement("div");
    tileContent.classList.add("tiles__tile-content");

    tileContent.innerText = name;
    tileContent.addEventListener("click", () => {
      this.showLoading();
      this.getRandomImageByBreed(type).then((src) => {
        this.imgEl.setAttribute("src", src);
        this.backgroundEl.style.background = `url("${src}")`;
        this.hideLoading();
      });
    });

    tile.appendChild(tileContent);
    this.tilesEl.appendChild(tile);
  };

  showAllBreeds = () => {
    this.listBreeds().then((breeds) => {
      for (const breed in breeds) {
        if (breeds[breed].length === 0) {
          this.addBreed(breed);
        } else {
          for (const subBreed of breeds[breed]) {
            this.addBreed(breed, subBreed);
          }
        }
      }
    });
  };

  init = () => {
    this.showLoading();
    this.getRandomImage().then((src) => {
      this.imgEl.setAttribute("src", src);
      this.backgroundEl.style.background = `url("${src}")`;
      this.hideLoading();
    });

    this.showAllBreeds();
  };
}

window.addEventListener("DOMContentLoaded", () => {
  new Doggo();
});
