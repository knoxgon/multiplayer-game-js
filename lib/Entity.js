class Entity {
  constructor(posX, posY, w, h, r = 0, speed = 0){
    this.x = posX;
    this.y = posY;
    this.radius = r;
    this.width = w;
    this.height = h;
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
  get left() { return this.x }
  get right() { return this.x + this.width }
  get top() { return this.y }
  get bottom() { return this.y + this.height }
  
  isTouchingLeft(other, dx = 0) {
    return this.right + dx > other.left && this.left < other.left && this.bottom > other.top && this.top < other.bottom;
  }

  isTouchingRight(other, dx = 0) {
    return this.left + dx < other.right && this.right > other.right && this.bottom > other.top && this.top < other.bottom;
  }

  isTouchingTop(other, dy = 0) {
    return this.bottom + dy > other.top && this.top < other.top && this.right > other.left && this.left < other.right;
  }

  isTouchingBottom(other, dy = 0) {
    return this.top + dy < other.bottom && this.bottom > other.bottom && this.right > other.left && this.left < other.right;
  }
}