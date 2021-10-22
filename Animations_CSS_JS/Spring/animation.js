document.addEventListener("DOMContentLoaded", () => {
  const ball = document.querySelector(".ball");
  const btn = document.querySelector(".btn-action");
  const spring = document.querySelector(".spring");
  const fill = document.querySelector(".fill");

  const stretchSpring = () => {
    fill.style.animationPlayState = "running";
    spring.style.animationPlayState = "running";
    btn.textContent = "Puść sprężynę";
  };

  const releaseSpring = () => {
    fill.style.animationPlayState = "paused";
    spring.style.animationPlayState = "paused";
  };

  const resetAnimation = () => {
    console.log("resetAnimation");
  };

  btn.addEventListener("mousedown", stretchSpring);
  btn.addEventListener("mouseup", releaseSpring);
  btn.addEventListener("touchstart", stretchSpring);
  btn.addEventListener("touchend", releaseSpring);
});
