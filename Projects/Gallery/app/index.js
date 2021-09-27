import "../sass/style.scss";

class Doggo {
  constructor() {
    this.apiUrl = "https://dog.ceo/api";
    this.imgEl = document.querySelector(".featured-dog img");

    this.init();
  }

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

  init = () => {
    this.getRandomImage().then((src) => this.imgEl.setAttribute("src", src));

    this.listBreeds().then((breeds) => console.log(breeds));
  };
}

window.addEventListener("DOMContentLoaded", () => {
  new Doggo();
});
