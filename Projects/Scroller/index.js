document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  const scroller = new Scroller(rootElement);

  document.addEventListener("mousewheel", scroller.listenScroll);
});
