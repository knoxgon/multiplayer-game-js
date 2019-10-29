let sck = io.connect('http://localhost:1234');
//let sck = io.connect('http://10.7.1.95:1234');
let WindowGraphic = new Graphic(document.getElementById("myCanvas"), document.getElementById("myCanvas").getContext("2d"));
let keys = []
let listOfPlayers = {};
const MOUSE = {x:0,y:0}

let randomNick = "PlayerNick_" + Math.random() % 999999999;
let randomX = (Math.random() * 400) + 1;
let randomY = (Math.random() * 400) + 1;

let player = new Player(randomNick, randomX, randomY, 32, 32, 15, 1);
sck.emit('new player spawn', player);

let tmap = new TileMap('gamelayer.json', '../assets/terrain_atlas.png');
tmap.readFile();

sck.on('player join', (data) => {
  //Iterate players
  for(let key in data) {
    //We dont want to recreate same player
    if(!listOfPlayers.hasOwnProperty(data[key].name)) {
      //Create new player asset
      listOfPlayers[data[key].name] = new Player(data[key].name, data[key].x, data[key].y, data[key].width, data[key].height, data[key].radius, data[key].speed);
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

WindowGraphic.canvas.addEventListener('mousemove', (evt) => {
  let rect = WindowGraphic.canvas.getBoundingClientRect();
  MOUSE.x = evt.clientX - rect.left;
  MOUSE.y = evt.clientY - rect.top;
}, false);


sck.on('player leave', (data) => {
  delete listOfPlayers[data.name];
});

function loop() {
  WindowGraphic.clear();
  tmap.render();
  // player refresh
  for (let key in listOfPlayers) {
    if (listOfPlayers.hasOwnProperty(key)) {
      listOfPlayers[key].render();
    }
  };
  if(listOfPlayers[player.name])
    listOfPlayers[player.name].move();
  requestAnimationFrame(loop);  
}
requestAnimationFrame(loop);