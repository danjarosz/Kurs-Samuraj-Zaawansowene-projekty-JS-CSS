document.addEventListener("DOMContentLoaded", () => {
  const ball = document.querySelector(".ball");
  const btn = document.querySelector(".btn-action");
  const spring = document.querySelector(".spring");
  const fill = document.querySelector(".fill");

  const resetAnimation = () => {
    ball.removeEventListener("animationend", resetAnimation);
    setTimeout(() => {
      init();

      btn.style.color = "#fff";
      btn.textContent = "Naciągnij sprężynę";

      spring.style.animation = "";
      ball.style.animation = "";
      fill.style.animationName = "none";
    }, 2000);
  };

  const stretchSpring = () => {
    fill.style.animationName = "fill";
    fill.style.animationPlayState = "running";
    spring.style.animationPlayState = "running";
    btn.textContent = "Puść sprężynę";

    btn.removeEventListener("mousedown", stretchSpring);
    btn.removeEventListener("touchstart", stretchSpring);
  };

  const releaseSpring = () => {
    fill.style.animationPlayState = "paused";

    const fillStyles = getComputedStyle(fill);
    const fillWidth = parseInt(fillStyles.width, 10);
    const barWidth = parseInt(
      getComputedStyle(document.querySelector(".bar")).width,
      10
    );
    const progressPercent = (fillWidth / barWidth).toFixed(2);

    btn.textContent = `Moc uderzenia to ${(progressPercent * 100).toFixed(0)}%`;
    btn.style.color = "#000";

    document.documentElement.style.setProperty(
      "--power-x",
      `${30 + progressPercent * 60}%`
    );
    ball.style.animation = `
      fly-ball-x 1s 1 forwards 0.15s cubic-bezier(0.17, 0.67, 0.6, 1),
      fly-ball-y 1s 1 forwards 0.15s linear
    `;

    document.documentElement.style.setProperty(
      "--spring-left",
      getComputedStyle(spring).left
    );
    spring.style.animation = "release-spring 0.2s 1 forwards linear";

    btn.removeEventListener("mouseup", stretchSpring);
    btn.removeEventListener("touchend", stretchSpring);

    ball.addEventListener("animationend", resetAnimation);
  };

  const init = () => {
    btn.addEventListener("mousedown", stretchSpring);
    btn.addEventListener("mouseup", releaseSpring);
    btn.addEventListener("touchstart", stretchSpring);
    btn.addEventListener("touchend", releaseSpring);
  };

  init();

  // dostanie się do css z poziomu JS
  const rules = document.styleSheets[0].cssRules;
  for (const i of rules) {
    console.log(i);
    // używając odpowiednich właściwości, można wybrać właściwą regułę
  }
  // console.log(rules);
});
