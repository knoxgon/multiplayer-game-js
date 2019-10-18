class TileMap {
  constructor(file) 
  {
    this.layers = [];
    this.layerPromise = fetch(`http://192.168.1.11:5500/${file}`)
    //this.layerPromise = fetch(`http://10.7.1.95:5500/${file}`)
    .then(res => res.json())
    .then(respons => {
      respons.layers.forEach(t => {
        this.layers.push(t.data);
      });
    });
    this.tiles = [];
  }
  readFile() {
    this.layerPromise.then((_) => {
      this.layers.forEach((layer,lindex) => {
        let i = 0;
        this.tiles[lindex] = [];
        layer.forEach(elem => {
          this.tiles[lindex].push(new Tile('../assets/terrain_atlas.png', elem, (i % 16) * 32, Math.floor(i / 16) * 32, 32, 32, 32, 32));
          i++;
        });
      });
    });
  }
  render() {
    this.tiles.forEach(e => {
      e.forEach(f => {
        f.render();
      })
    });
  }
}