class Scroller {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.sections = [...this.rootElement.querySelectorAll("section")];
    const visibleSection = this.sections.findIndex((el) =>
      this.isScrolledIntoView(el)
    );
    this.currentSectionIndex = visibleSection < 0 ? 0 : visibleSection;
    this.isThrottled = false;

    this.drawNavigation();
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

    const direction = event.deltaY > 0 ? 1 : -1;
    this.scroll(direction);
  };

  scrollToCurrentSection = () => {
    this.selectActiveNavItem();
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

  drawNavigation = () => {
    this.navigationContainer = document.createElement("aside");
    this.navigationContainer.setAttribute("class", "scroller__navigation");
    const list = document.createElement("ul");

    this.sections.forEach((section, index) => {
      const listItem = document.createElement("li");

      listItem.addEventListener("click", () => {
        this.currentSectionIndex = index;
        this.scrollToCurrentSection();
      });

      list.appendChild(listItem);
    });

    this.navigationContainer.appendChild(list);
    document.body.appendChild(this.navigationContainer);
    this.selectActiveNavItem();
  };

  selectActiveNavItem = () => {
    if (!this.navigationContainer) {
      return;
    }

    const navigationItems = this.navigationContainer.querySelectorAll("li");
    navigationItems.forEach((item, index) => {
      if (index === this.currentSectionIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };
}
