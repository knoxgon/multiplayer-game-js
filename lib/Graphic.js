class Graphic {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.context = ctx;
    this.color = "black"
  }
  setColor(color = "black") {
    this.color = color;
  }
  drawCircle(x, y, radius) {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(x, y, radius, 0, 2 * Math.PI);
    this.context.fill();
    this.context.stroke();
  }
  drawRectangle(x, y, width, height) {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.fillRect(x, y, width, height);
    this.context.fill();
    this.context.stroke();
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}