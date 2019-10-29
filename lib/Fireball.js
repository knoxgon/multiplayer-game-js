class Fireball extends Projectile {
  constructor(img, damage, x, y, r, speed) {
    super(damage, x, y, r, speed);
    this.image = new Image();
    this.image.src = img;

  }
  render() {
    WindowGraphic.context.drawImage(
      this.image,
      
      );
  }

}