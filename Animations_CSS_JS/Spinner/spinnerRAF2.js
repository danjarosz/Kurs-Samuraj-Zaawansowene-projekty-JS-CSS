document.addEventListener("DOMContentLoaded", () => {
  const spinner = document.querySelector(".v4");
  const fps = (1000 / 60).toFixed();
  let deg = 0;
  const degChange = 6;
  let time = performance.now();

  const rotate = (currentTime) => {
    if (currentTime - time > 16) {
      time = currentTime;
      deg += degChange;
      spinner.style.transform = `rotate(${deg}deg)`;
    }
    requestAnimationFrame(rotate);
  };
  rotate();
});
