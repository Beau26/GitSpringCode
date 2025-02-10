//GLOBAL VARIABLES
let tileMap = [];
let tilesX = 10;
let tilesY = 10;
let tileSize = 50;

function setup() {
  createCanvas(500,500);
  let tileID = 0;
  for (tileX = 0; tileX >= tilesX; tileX++){
    tileMap[tileX] = []
    for (tileY = 0; tileY >= tilesY; tileY++){
      tileMap[tileX][tileY] = new Tile(tileX,tileY,tileSize,tileID)
      tileID++
    }
  }
}

function draw() {
  background(0);
}

class Tile {
  constructor(tileX, tileY, tileSize, tileID){
    this.tileX = tileX;
    this.tileY = tileY;
    this.tileSize = tileSize;
    this.tileID = tileID;
  }
}