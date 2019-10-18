class Spritesheet {
  constructor(img, img_w, img_h, frame_w, frame_h, total_frame) {
    this.img = new Image(img_w, img_w);
    this.img.src = img;
    this.frame_width = frame_w;
    this.frame_height = frame_h;
    this.total_frame = total_frame;
  }
  render() {
    
  }
}