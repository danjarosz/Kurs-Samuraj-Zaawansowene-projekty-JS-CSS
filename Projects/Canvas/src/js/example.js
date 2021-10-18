export const example = () => {
  const canvas = document.querySelector("#canvas");
  // kontekst rysowania
  const ctx = canvas.getContext("2d");

  // rysowanie prostokąta
  ctx.fillStyle = "#ff0033";
  ctx.fillRect(0, 0, 100, 50);

  // rysowanie linii
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#00ff00";
  ctx.moveTo(50, 50);
  ctx.lineTo(100, 100);
  ctx.lineTo(200, 150);
  // ctx.closePath();
  ctx.stroke();
};
