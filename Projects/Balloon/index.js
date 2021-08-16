document.addEventListener("DOMContentLoaded", () => {
  const elements = [...document.querySelectorAll(".anim-bg")];

  document.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    elements.forEach((element) => {
      const ratioX = -element.getAttribute("ratioX");
      const ratioY = -element.getAttribute("ratioY");

      const moveX = (clientX - centerX) * ratioX;
      const moveY = (clientY - centerY) * ratioY;

      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
});
