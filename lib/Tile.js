class Tile {
  constructor(tileset, i, x, y, w, h, pngW, pngH) {
    this.sprite = new Sprite(tileset, {
       x: ((i - 1) % pngW) * w,
      y: (Math.floor(i / pngH)) * h,
      w: 32,
      h: 32
    }, {
      x, y, w, h
    });
  }
  render() {
    this.sprite.render();
  }
}