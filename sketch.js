//INITIALISE PLAYER VARIABLES
let player;
let playerSprite;
let playerSpeed = 5;

//INITIALISE TILEMAP VARIABLES
let tileMap = []; //array to store tiles in
let tilesX = 10; //number of tiles on the x axis
let tilesY = 10; //number of tiles on the y axis
let tileSize = 50; //the size of the tiles
let textures = [];

let graphicsMap = [[0,0,0,0,0,0,0,0,0,1],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,1,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,1,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,1,0,0,0,0,0,0,0,0]]
let tileRules = [[0,0,0,0,0,0,0,0,0,1],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,1,0,0,0,0,0,0,0,0]]


function preload(){
  textures[0] = loadImage("grassy.png")
  textures[1] = loadImage("stone.png")
  playerSprite = loadImage("librarian-bw.png")
   
}


function setup() {
  createCanvas(500,500);

  //CREATING TILEMAP
  let tileID = 0; // ID number for a specific tile
  //nested loop that creates the tile map 
  for (let tileX = 0; tileX < tilesX; tileX++){
    tileMap[tileX] = [] //creates an empty column on the tilemap
    for (let tileY = 0; tileY < tilesY; tileY++){
      //Set the texture for the tile
      let texture = graphicsMap[tileY][tileX]
      console.log(graphicsMap[tileY][tileX])
      //creates a new tile from the tile class and puts it in the current column
      tileMap[tileX][tileY] = new Tile(textures[texture],tileX,tileY,tileSize,tileID)
      tileID++ //increments the tile id for the next tile
    }
  }

  player = new Player(playerSprite, 3, 3, tileSize,tileRules)
}

function draw() {
  background(0);

  //displays all of the tiles
  for (let tileX = 0; tileX < tilesX; tileX++){
    for (let tileY = 0; tileY < tilesY; tileY++){
      tileMap[tileX][tileY].display()
    }
  }

  //displays a message in each of the selected tiles
}

//creates the tile class
class Tile {
  constructor(texture,tileX, tileY, tileSize, tileID){
    //tile texture
    this.texture = texture;
    //position on tile map
    this.tileX = tileX;
    this.tileY = tileY;
    //pixel position on the canvas
    this.xPos = this.tileX * tileSize;
    this.yPos = this.tileY * tileSize;

    this.tileSize = tileSize; //sets the tile size
    this.tileID = tileID; //sets the tileID number
  }

  display(){
    noStroke()
    image(this.texture,this.xPos,this.yPos,this.tileSize,this.tileSize)
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

    //image(grassTile,this.xPos,this.yPos)
  }

  displayMessage(){
    //text settings for the assessed message
    image(stoneTile,this.xPos,this.yPos)
  }
}

class Player {
  constructor(sprite,startX,startY,tileSize,tileRule){
    //sprite
    this.sprite = sprite;

    //tile position
    this.tileX = startX;
    this.tileY = startY;

    //tile data
    this.tileSize = tileSize;
    this.tileRules = tileRule

    //coordinates of player on grid
    this.xPos = startX * size;
    this.yPos = startY * size;

    //target pisition on grid
    this.tx = this.xPos;
    this.ty = this.yPos;

    //direction
    this.dirX = 0;
    this.dirY = 0;

    //movement
    this.isMoving = false;
    this.speed = 5

  }

  setDirection(){
    let up = 87;    //w
    let down = 83;    //s
    let left = 65;    //a
    let right = 68    //d

    if (this.isMoving == false){

      //moves up
      if (keyIsDown(up)){
        this.dirX = 0;
        this.dirY = -1;
      }

      //moves down
      if (keyIsDown(down)){
        this.dirX = 0;
        this.dirY = 1;
      }

      //moves left
      if (keyIsDown(left)){
        this.dirX = 1;
        this.dirY = 0;
      }

      //moves down
      if (keyIsDown(right)){
        this.dirX = -1;
        this.dirY = 0;
      }

      //checks target tile
      this.checkTargetTile()
    }
  }

  checkTargetTile(){
    
  }
}