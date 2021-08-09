class Scroller {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.sections = [...this.rootElement.querySelectorAll("section")];
    const visibleSection = this.sections.findIndex((el) =>
      this.isScrolledIntoView(el)
    );
    this.currentSectionIndex = visibleSection < 0 ? 0 : visibleSection;
    this.isThrottled = false;
  }

  isScrolledIntoView = (el) => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible =
      Math.floor(elemTop) >= 0 && Math.floor(elemBottom) <= window.innerHeight;
    return isVisible;
  };

  listenScroll = (event) => {
    if (this.isThrottled) {
      return;
    }
    this.isThrottled = true;

    setTimeout(() => {
      this.isThrottled = false;
    }, 1000);

    const direction = event.wheelDelta < 0 ? 1 : -1;
    this.scroll(direction);
  };

  scrollToCurrentSection = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  scroll = (direction) => {
    if (direction === 1) {
      const isLastSection =
        this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) {
        return;
      }
    } else if (direction === -1) {
      const isFirstSection = this.currentSectionIndex === 0;
      if (isFirstSection) {
        return;
      }
    }

    this.currentSectionIndex = this.currentSectionIndex + direction;
    this.scrollToCurrentSection();
  };
}
