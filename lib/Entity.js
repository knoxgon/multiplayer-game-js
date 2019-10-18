class Entity {
  constructor(posX, posY, r, speed = 0){
    this.x = posX;
    this.y = posY;
    this.radius = r;
    this.speed = speed;
  }
  setPos(trg) {
    this.x = trg.x;
    this.y = trg.y;
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
  }
  move(dx, dy) {
    this.setPos(this.x + dx, this.y + dy);
  }
}