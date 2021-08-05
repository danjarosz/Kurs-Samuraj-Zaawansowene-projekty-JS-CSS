document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  const sections = [...rootElement.querySelectorAll("section")];

  document.addEventListener("mousewheel", (event) => {
    console.log(event.wheelDelta);
  });
});
