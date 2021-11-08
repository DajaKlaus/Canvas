var color = "555500";
document.addEventListener("DOMContentLoaded", domloaded, false);
function fractalFunction() {
  color = "#900";
}
function domloaded() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  if (color == "#900"){
    ctx.fillStyle = color;
  }

  const shape = [
    { x: 0, y: 0 },
    { x: 0, y: 500 },
    { x: 500, y: 500 },
    { x: 500, y: 0 }
  ];

  let point = {
    x: Math.round(Math.random() * 500),
    y: Math.round(Math.random() * 500)
  };

  let count = 0;
  let previousRand = null;

  while (count < 15000) {
    let currentRand = Math.floor(Math.random() * shape.length);

    if (currentRand !== previousRand) {
      previousRand = currentRand;

      let corner = shape[currentRand];
      point.x = (point.x + corner.x) / 2;
      point.y = (point.y + corner.y) / 2;
      ctx.fillRect(point.x, point.y, 1, 1);
      count++;
    }
  }
}
