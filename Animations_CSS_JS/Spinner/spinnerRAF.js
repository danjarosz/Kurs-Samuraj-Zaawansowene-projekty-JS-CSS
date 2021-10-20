document.addEventListener("DOMContentLoaded", () => {
  const spinner = document.querySelector(".v3");
  const fps = (1000 / 60).toFixed();
  let deg = 0;
  const degChange = 6;

  const rotate = () => {
    deg += degChange;
    spinner.style.transform = `rotate(${deg}deg)`;
    requestAnimationFrame(rotate);
  };

  rotate();
});
