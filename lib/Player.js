class Player extends Entity {
  constructor(name, posX, posY, r, speed, stats = null) {
    super(posX, posY, r, speed);
    this.name = name;
    this.compass = {
      left: false,
      right: false,
      down: false,
      up: false,
      boost: false
    };
    //this.sprite = new PlayableSprite('../assets/char16x18.png', 16, 18, 15, 1, {UP: 1,DOWN: 0,LEFT: 2,RIGHT: 3});
    this.sprite = new PlayableSprite('../assets/char32x32.png', 32, 32, 15, 1, {UP: 3,DOWN: 0,LEFT: 1,RIGHT: 2});
    this.sprite.setXY(this.x, this.y)
  }
  render() {
    this.sprite.update();
    this.sprite.drawFrame();
    this.sprite.hasMoved = false;
  }
  resetCompass() {
    this.compass.up = false;
    this.compass.down = false;
    this.compass.left = false;
    this.compass.right = false;
    this.compass.boost = false;
  }
  move() {
    this.resetCompass();
    let send = false;

    if (keys[87]) { //w
      this.compass.up = true;
      send = true;
    }
    if (keys[65]) { //a
      this.compass.left = true;
      send = true;
    }
    if (keys[83]) { //s
      this.compass.down = true;
      send = true;
    }
    if (keys[68]) { //d
      this.compass.right = true;
      send = true;
    }
    if(keys[32]){ //space
      this.compass.boost = true;
    }

    if(send){
      sck.emit('player move', this.compass);
    }
  }

  setPos(data) {
    this.x = data.x;
    this.y = data.y;
    this.sprite.setXY(this.x, this.y);
    this.sprite.hasMoved = true;
    this.sprite.currentFace = data.currentFace !== undefined ? data.currentFace : this.sprite.currentFace;
  }
}