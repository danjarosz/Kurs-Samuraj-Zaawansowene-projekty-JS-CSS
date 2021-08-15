document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  const scroller = new Scroller(rootElement);

  document.addEventListener("wheel", scroller.listenScroll);

  document.addEventListener("swipeUp", () => scroller.scroll(1));
  document.addEventListener("swipeDown", () => scroller.scroll(-1));
});
