document.addEventListener("DOMContentLoaded", () => {
  const bars = () => {
    const tl = new TimelineMax({ onComplete: bars });
    const voiceBars = document.querySelector("#voice-bars");
    const barsEl = voiceBars.querySelectorAll("rect");

    const scale = () => {
      return 0.1 + Math.random() * 3;
    };

    const color = () => {
      const colors = ["green", "red", "blue", "yellow"];

      return colors[Math.floor(Math.random() * colors.length)];
    };

    tl.set(barsEl, {
      y: -30,
      transformOrigin: "50%, 50%",
    });
    tl.staggerTo(
      barsEl,
      0.5,
      {
        scaleY: scale,
        repeat: 1,
        yoyo: true,
        fill: color,
        ease: Bounce.easeIn,
      },
      0.1
    );
    return tl;
  };

  const blink = () => {
    const tl = new TimelineMax();
    return tl;
  };

  const move = (elements) => {
    const tl = new TimelineMax();

    tl.staggerTo(
      elements,
      0.5,
      {
        y: -60,
        repeat: -1,
        yoyo: true,
        ease: Power0.easeNone,
      },
      0.5
    );

    return tl;
  };

  // Master timeline
  const master = new TimelineMax();
  master.add("start");
  master.add(bars());
  master.add(move(document.querySelectorAll("#leg-right, #leg-left")), "start");
});
