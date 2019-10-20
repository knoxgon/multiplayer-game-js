class Sprite {
  constructor(img, srcOptions, destOptions) {
    this.image = new Image();
    this.image.src = img;
    this.source = srcOptions;
    this.destination = destOptions;
  }
  render() {
    WindowGraphic.context.drawImage(
      this.image, //img
      this.source.x, //srcX
      this.source.y,//srcY
      this.source.w, //srcW
      this.source.h, //srcH
      this.destination.x, //destX
      this.destination.y, //destY
      this.destination.w, //destW
      this.destination.h //destH
    );
  }
}