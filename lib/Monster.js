class Monster extends Entity {
  constructor(name, posX, posY, r, moveCeil, speed, stats) {
    super(posX, posY, r, speed);
    this.name = name;
    this.stats = new Stats(stats);
    this.compass = {
      left: false,
      right: false,
      down: false,
      up: false,
      boost: false
    };
  }
  resetCompass() {
    this.compass.up = false;
    this.compass.down = false;
    this.compass.left = false;
    this.compass.right = false;
    this.compass.boost = false;
  }
  update() {
    //random move
    

  }
}