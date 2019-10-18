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
    if(stats != null)
      this.stats = new Stats(stats);
  }
  render() {
    WindowGraphic.setColor(this.color);
    WindowGraphic.drawCircle(this.x, this.y, this.radius);
  }
  move(event) {
    if (event.keyCode === 87) { //w
      this.compass.up = event.type === 'keydown';
    }
    if (event.keyCode === 65) { //a
      this.compass.left = event.type === 'keydown';
    }
    if (event.keyCode === 83) { //s
      this.compass.down = event.type === 'keydown';
    }
    if (event.keyCode === 68) { //d
      this.compass.right = event.type === 'keydown';
    }
    if(event.keyCode === 32){ //space
      this.compass.boost = event.type === 'keydown';
    }
    sck.emit('player move', this.compass);
  }
  setPos(data) {
    this.x = data.x;
    this.y = data.y;
  }
}