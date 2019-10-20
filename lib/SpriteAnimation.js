class SpriteAnimation {
  constructor(spriteSrc, totalFrameCount = 1, ticksPerFrame = 0, scale = 0) {
    this.image = new Image();
    this.image.src = spriteSrc;
    this.totalFrameCount = totalFrameCount;
    this.ticksPerFrame = ticksPerFrame;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.scale = scale;
  }
  update() {
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.totalFrameCount - 1) {
        this.frameIndex++;
      } else {
        this.frameIndex = 0;
      }
    }
  }
  render() {
    WindowGraphic.context.drawImage(
      this.image,
      this.frameIndex * this.image.width / this.totalFrameCount,
      0,
      (this.image.width / this.totalFrameCount),
      this.image.height,
      0,
      0,
      (this.image.width / this.totalFrameCount) * this.scale,
      (this.image.height) * this.scale);
      this.update();
  }

}