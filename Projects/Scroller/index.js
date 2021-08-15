document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  const scroller = new Scroller(rootElement);

  document.addEventListener("wheel", scroller.listenScroll);
  document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
      case 40:
        return scroller.scroll(1);
      case 38:
        return scroller.scroll(-1);
      default:
        return;
    }
  });
  document.addEventListener("swipeUp", () => scroller.scroll(1));
  document.addEventListener("swipeDown", () => scroller.scroll(-1));
});
