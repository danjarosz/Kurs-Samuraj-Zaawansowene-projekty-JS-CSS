import "./sass/index.scss";
import Sky from "./js/Sky";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#canvas");
  const sky = new Sky(canvas);
  sky.run();
});
