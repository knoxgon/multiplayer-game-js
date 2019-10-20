class PlayableSprite {
  constructor(image, frameWidth, frameHeight, FRAME_LIMIT, scale, face) {
    this.image = new Image();
    this.image.src = image;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;

    //Total frame from each row. (504/72 = 7) or 48x72 = (48/16)
    this.totalFrameCount = this.image.width / this.frameWidth;
    this.scale = scale;
    this.SCALED_WIDTH = this.scale * this.frameWidth;
    this.SCALED_HEIGHT = this.scale * this.frameHeight;
    this.FRAME_LIMIT = FRAME_LIMIT;
    this.face = face;


    this.currentLoopFrame = 0;

//    this.CYCLE_LOOP = [0, 1, 0, 2]; //16x18
    this.CYCLE_LOOP = [1, 0, 1, 2]; //32x32
    this.currentFace = 0;

    this.hasMoved = false;

    this.sprite_x = 0;
    this.sprite_y = 0;

    this.frameCount = 0;

  }
  setXY(x, y) {
    this.sprite_x = x;
    this.sprite_y = y;
    console.log(this.sprite_x, this.sprite_y);
  }
  drawFrame(frameX, frameY) {
    /**
     * @param frameX - x axis in picture
     * @param frameY - y axis in picture
     */
    WindowGraphic.context.drawImage(this.image,
      frameX * this.frameWidth,
      frameY * this.frameHeight, 
      this.frameWidth,
      this.frameHeight,
      this.sprite_x,
      this.sprite_y,
      this.SCALED_WIDTH,
      this.SCALED_HEIGHT);
  }
  update() {
    if (this.hasMoved) {
      this.frameCount++;
      if (this.frameCount >= this.FRAME_LIMIT) {
        this.frameCount = 0;
        this.currentLoopFrame++;
        if (this.currentLoopFrame >= this.totalFrameCount - 1) {
          this.currentLoopFrame = 0;
        }
      }
    }
    if (!this.hasMoved) {
      this.currentLoopFrame = 0;
    }
    this.drawFrame(this.CYCLE_LOOP[this.currentLoopFrame], this.currentFace);
  }
}