let sck = io.connect('http://localhost:1234');
//let sck = io.connect('http://10.7.1.95:1234');
let WindowGraphic = new Graphic(document.getElementById("myCanvas"), document.getElementById("myCanvas").getContext("2d"));
let keys = []
let listOfPlayers = {};


let randomNick = "PlayerNick_" + Math.random() % 999999999;
let randomX = 35;
let randomY = 35;

let player = new Player(randomNick, randomX, randomY, 10, 1);
sck.emit('new player spawn', player);

let tmap = new TileMap('gamelayer.json');
tmap.readFile();

//const coin = new SpriteAnimation('assets/coin-sprite-animation.png', 10, 4, 0.5);

sck.on('player join', (data) => {
  //Iterate players
  for(let key in data) {
    //We dont want to recreate same player
    if(!listOfPlayers.hasOwnProperty(data[key].name)) {
      //Create new player asset
      listOfPlayers[data[key].name] = new Player(data[key].name, data[key].x, data[key].y, data[key].radius, data[key].speed);
    }
  }
});

sck.on('position update', (data) => {
  listOfPlayers[data.name].setPos(data);
});

document.addEventListener('keydown', (event) => {
  keys[event.keyCode] = true;
  // player.move(event);
});
document.addEventListener('keyup', (event) => {
  // player.move(event);
  keys[event.keyCode] = false;
});

sck.on('player leave', (data) => {
  delete listOfPlayers[data.name];
});

sck.on('player shoot', (data) => {

});

function loop() {
  WindowGraphic.clear();
  tmap.render();
  // player.move();
  for (let key in listOfPlayers) {
    if (listOfPlayers.hasOwnProperty(key)) {
      listOfPlayers[key].render();
    }
  };
  if(listOfPlayers[player.name])
    listOfPlayers[player.name].move()
  requestAnimationFrame(loop);  
}
requestAnimationFrame(loop);