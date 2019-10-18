let sck = io.connect('http://192.168.1.11:1234');
//let sck = io.connect('http://10.7.1.95:1234');
let WindowGraphic = new Graphic(document.getElementById("myCanvas"), document.getElementById("myCanvas").getContext("2d"));

let listOfPlayers = {};

let randomNick = "PlayerNick_" + Math.random() % 999999999;
let randomX = 25 + 10;
let randomY = 25 + 10;

let player = new Player(randomNick, randomX, randomY, 10, 5);
sck.emit('new player spawn', player);

let tmap = new TileMap('gamelayer.json');
tmap.readFile();

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
  player.move(event);
});
document.addEventListener('keyup', (event) => {
  player.move(event);
});

sck.on('player leave', (data) => {
  delete listOfPlayers[data.name];
});

sck.on('player shoot', (data) => {

  player.fire(data);
})

function loop() {
  WindowGraphic.clear();
  tmap.render();
  for (let key in listOfPlayers) {
    if (listOfPlayers.hasOwnProperty(key)) {
      listOfPlayers[key].render();
    }
  };
  requestAnimationFrame(loop);  
}
requestAnimationFrame(loop);