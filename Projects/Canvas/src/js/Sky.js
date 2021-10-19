class Sky {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  initCanvas = () => {
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.width, this.height);
  };

  clearCanvas = () => {
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.width, this.height);
  };

  generateStarts = (count) => {
    let stars = [];

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 3 + 2;

      stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius,
        orginalRadius: radius,
        color: "#fff",
        speed: Math.random() + 0.25,
      });
    }

    this.stars = stars;
  };

  drawStar = (star) => {
    // zapis stanu canvasa
    this.ctx.save();

    this.ctx.fillStyle = star.color;
    this.ctx.beginPath();
    this.ctx.translate(star.x, star.y);
    this.ctx.moveTo(0, 0 - star.radius);
    for (let i = 0; i < 5; i++) {
      this.ctx.rotate((Math.PI / 180) * 36);
      this.ctx.lineTo(0, 0 - star.radius * 0.65);
      this.ctx.rotate((Math.PI / 180) * 36);
      this.ctx.lineTo(0, 0 - star.radius);
    }
    this.ctx.fill();

    // przywrócenie stanu canvasa
    this.ctx.restore();
  };

  drawStars = () => {
    this.stars.forEach((star) => {
      this.drawStar(star);
    });
  };

  updateStars = () => {
    this.stars.forEach((star) => {
      star.x += star.speed;
      star.y -= (star.speed * (this.width / 2 - star.x)) / 2800;
      star.radius = star.orginalRadius * (Math.random() / 4 + 0.9);

      if (star.x > this.width + 2 * star.radius) {
        star.x = -2 * star.radius;
      }
    });
  };

  generateRandomConstellation = () => {
    const x = (this.width / 2) * Math.random() + 0.5;
    const y = (this.height / 2) * Math.random() + 0.5;
    const radius = (this.height / 2) * Math.random();

    this.constellation = {
      stars: this.stars
        .filter(
          (star) =>
            star.x > x - radius &&
            star.x < x + radius &&
            star.y > y - radius &&
            star.y < y + radius
        )
        .slice(0, Math.round(Math.random() * 7 + 3)),
      isClosed: Math.random() > 0.5,
    };
  };

  drawConstellation = () => {
    const { stars, isClosed } = this.constellation;
    const starsCount = stars.length;

    if (!starsCount) {
      return;
    }

    const firstStar = stars[0];
    const lastStar = stars[starsCount - 1];

    this.ctx.beginPath();
    this.ctx.moveTo(firstStar.x, firstStar.y);
    this.ctx.lineTo(stars[1].x, stars[1].y);

    for (let i = 1; i < starsCount - 1; i++) {
      const nextStar = stars[i + 1];
      this.ctx.lineTo(nextStar.x, nextStar.y);
    }

    if (isClosed) {
      this.ctx.lineTo(firstStar.x, firstStar.y);
    }

    this.ctx.strokeStyle = "#f7eada";
    this.ctx.stroke();
  };

  drawOverLayer = () => {
    let gradient = this.ctx.createRadialGradient(
      this.width / 2,
      this.height / 2,
      250,
      this.width / 2,
      this.height / 2,
      this.width / 2
    );
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.75");

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.width, this.height);
  };

  draw = () => {
    this.clearCanvas();

    this.drawStars();
    this.updateStars();

    this.drawConstellation();

    this.drawOverLayer();

    window.requestAnimationFrame(this.draw);
  };

  run = () => {
    this.initCanvas();
    this.generateStarts(500);
    this.generateRandomConstellation();
    this.draw();
  };
}

export default Sky;
