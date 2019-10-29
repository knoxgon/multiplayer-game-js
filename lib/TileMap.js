class TileMap {
  constructor(jsonFile, imageFile) {
    this.layers = [];
    this.layerPromise = fetch(`http://localhost:5500/${jsonFile}`)
    .then(res => res.json())
    .then(respons => {
      this.imageFile = imageFile;
      respons.layers.forEach(t => {
        this.layers.push({data: t.data, name: t.name});
      });
    });
    this.tiles = [];
  }
  readFile() {
    this.layerPromise.then((_) => {
      this.layers.forEach((layer,lindex) => {
        let i = 0;
        this.tiles[lindex] = [];
        layer.data.forEach(elem => {
           //if(layer.name == "wall")
             //addCollisionToTile((i % 16) * 32, Math.floor(i / 16) * 32, 32, 32)
          this.tiles[lindex].push(new Tile(this.imageFile, elem, (i % 16) * 32, Math.floor(i / 16) * 32, 32, 32, 32, 32));
          i++;
        });
      });
    });
  }
  render() {
    this.tiles.forEach(e => {
      e.forEach(f => {
        f.render();
      });
    });
  }
}