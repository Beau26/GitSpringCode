//GLOBAL VARIABLES
let tileMap = []; //array to store tiles in
let tilesX = 10; //number of tiles on the x axis
let tilesY = 10; //number of tiles on the y axis
let tileSize = 50; //the size of the tiles
let grassTile;
let stoneTile;


function preload(){
  grassTile = loadImage("grassy.png")
  stoneTile = loadImage("stone.png")
   
}


function setup() {
  createCanvas(500,500);
  let tileID = 0; // ID number for a specific tile
  //nested loop that creates the tile map 
  for (let tileX = 0; tileX < tilesX; tileX++){
    tileMap[tileX] = [] //creates an empty column on the tilemap
    for (let tileY = 0; tileY < tilesY; tileY++){
      //creates a new tile from the tile class and puts it in the current column
      tileMap[tileX][tileY] = new Tile(tileX,tileY,tileSize,tileID)
      tileID++ //increments the tile id for the next tile
    }
  }
}

function draw() {
  background(0);

  //displays all of the tiles
  for (let tileX = 0; tileX < tilesX; tileX++){
    for (let tileY = 0; tileY < tilesY; tileY++){
      tileMap[tileX][tileY].debugGrid()
    }
  }

  //displays a message in each of the selected tiles
  tileMap[5][6].displayMessage()
  tileMap[0][8].displayMessage()
  tileMap[3][4].displayMessage()
  tileMap[3][0].displayMessage()
}

//creates the tile class
class Tile {
  constructor(tileX, tileY, tileSize, tileID){
    //position on tile map
    this.tileX = tileX;
    this.tileY = tileY;
    //pixel position on the canvas
    this.xPos = this.tileX * tileSize;
    this.yPos = this.tileY * tileSize;

    this.tileSize = tileSize; //sets the tile size
    this.tileID = tileID; //sets the tileID number
  }

  debugGrid(){
    let xPadding = 2; //padding for x values
    let yCoordinatePadding = 8; //padding for the y for the coordinate value
    let yIDPadding = 18; // padding for the y for the id value

    //Text Settings for the coordinate and id text
    strokeWeight(1)
    stroke("black")
    fill(121,51,255)

    //display x and y coordinate text
    textSize(8)
    text("X: "+ this.tileX + ",Y: " + this.tileY, this.xPos + xPadding, this.yPos + yCoordinatePadding)

    //display tileID text
    textSize(10)
    text("ID: " + this.tileID, this.xPos + xPadding, this.yPos + yIDPadding)

    image(grassTile,this.xPos,this.yPos)
  }

  displayMessage(){
    //text settings for the assessed message
    image(stoneTile,this.xPos,this.yPos)
  }
}