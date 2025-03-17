//INITIALISE PLAYER VARIABLES
let player;
let playerSprite;
let playerSpeed = 5;

//INITIALISE TILEMAP VARIABLES
let tileMap = []; //array to store tiles in
let tilesX = 10; //number of tiles on the x axis
let tilesY = 10; //number of tiles on the y axis
let tileSize = 50; //the size of the tiles
let textures = []; //value to store textures

//Items and Inventory
let items = [];
let itemTextures = [];
let itemTypeName = ["","Key"]

let inventory = [];


//LEVEL DATA OBJECTS

let level0 = {

  graphicsMap: [
  //       2nd Value (x)
// 0  1  2  3  4  5  6  7  8  9
  [0, 0, 0, 0, 0, 0, 0, 2, 3, 2], //0
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], //2
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //9
],

  itemMap: [
  //       2nd Value (x)
// 0  1  2  3  4  5   6  7  8  9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], //1
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //9
],

  tileRules: [
   //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9
    [0, 0, 0, 0, 0, 0, 0, 1, 4, 1], //0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], //2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //9
  ],

  startTiles: [
              [8,1],
              [8,1]
            ]

}

let level1 = {
    graphicsMap: [
    //         2nd VALUE (x)  
    //    0  1  2  3  4  5  6  7  8  9
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 0
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 1
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 2 
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 3
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 4 
        [3, 4, 4, 4, 4, 4, 4, 4, 4, 3], // 5
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 6
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 7
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 8
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]  // 9
    ],

    tileRules: [
    //         2nd VALUE (x)  
    //   0  1  2  3  4  5  6  7  8  9
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 1
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 2 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 3
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 4  1st VALUE (y)
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 5
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 6
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 7
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 8
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // 9
    ],

    itemMap: [
      //       2nd Value (x)
    // 0  1  2  3  4  5   6  7  8  9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //9
    ],

    startTiles: [
                [1,5],
                [8,5]
              ]

}

let level2 = {

    graphicsMap: [ 
    //              2nd Value (x)
    //   0  1  2  3  4  5  6  7  8  9 
        [2, 3, 2, 2, 2, 2, 2, 2, 2, 2], // 0
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 1
        [2, 4, 2, 4, 4, 4, 4, 4, 4, 2], // 2
        [2, 4, 4, 4, 4, 4, 4, 2, 4, 2], // 3
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 4    1st Value (y)
        [2, 4, 2, 4, 4, 4, 4, 4, 4, 2], // 5
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 6
        [2, 4, 4, 4, 4, 4, 2, 2, 4, 2], // 7
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 8
        [2, 2, 3, 2, 2, 2, 2, 2, 2, 2]  // 9
    ],

    tileRules: [ 
    //              2nd Value (x)
    //   0  1  2  3  4  5  6  7  8  9 
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 1
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], // 2
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 3d
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1], // 4    1st Value (y)
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], // 5
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 6
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 1], // 7
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 8
        [1, 1, 3, 1, 1, 1, 1, 1, 1, 1]  // 9
    ],

    itemMap: [
      //       2nd Value (x)
    // 0  1  2  3  4  5   6  7  8  9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //9
    ],

    startTiles: [
                [2,8],
              ]

}

//Level Control Variables

let levels = [level0,level1,level2];
let currentLevel = 0;
let graphicsMap;
let tileRules;

//timer values
let count;
let countMax = 30;


function preload(){
  //tilemap textures
  textures[0] = loadImage("grassy.png")
  textures[1] = loadImage("stone.png")
  textures[2] = loadImage("wall_50x.png")
  textures[3] = loadImage("door.png")
  textures[4] = loadImage("void_50x.png")

  //item textures
  itemTextures[0] = loadImage("void_50x.png")
  itemTextures[1] = loadImage("stone.png")

  //sprite
  playerSprite = loadImage("librarian-bw.png")
   
}


function setup() {
  createCanvas(500,500);

  loadLevel();

  player = new Player(playerSprite, 3, 3, tileSize,tileRules);
}

function loadLevel() {
  graphicsMap = levels[currentLevel].graphicsMap
  tileRules = levels[currentLevel].tileRules
  itemMap = levels[currentLevel].itemMap

  //CREATING TILEMAP
  let tileID = 0; // ID number for a specific tile

  //nested loop that creates the tile map 
  for (let tileX = 0; tileX < tilesX; tileX++) {
    tileMap[tileX] = []; //creates an empty column on the tilemap
    for (let tileY = 0; tileY < tilesY; tileY++) {

      //Set the texture for the tile
      let texture = graphicsMap[tileY][tileX];
      //creates a new tile from the tile class and puts it in the current column
      tileMap[tileX][tileY] = new Tile(textures[texture], tileX, tileY, tileSize, tileID);

      tileID++;
    }
  }

  //CREATING ITEMMAP

  //nested loop that creates the item map 
  for (let tileX = 0; tileX < tilesX; tileX++) {
    items[tileX] = []; //creates an empty column on the tilemap
    for (let tileY = 0; tileY < tilesY; tileY++) {

      //Set the texture for the tile
      let itemTexture = itemMap[tileY][tileX];
      let itemID = itemTexture
      let itemName = itemTypeName[itemID]
        //creates a new tile from the tile class and puts it in the current column
        if (itemID != 0){
          items[tileX][tileY] = new Item(itemName,itemTextures[itemTexture], tileX, tileY, tileSize, itemID);
        }
        else{
          items[tileX][tileY] = ""
        }
      
    }
  }
}

function draw() {
  background(0);

  //displays all of the tiles
  for (let tileX = 0; tileX < tilesX; tileX++){
    for (let tileY = 0; tileY < tilesY; tileY++){
      tileMap[tileX][tileY].display()
    }
  }

  for (let tileX = 0; tileX < tilesX; tileX++){
    for (let tileY = 0; tileY < tilesY; tileY++){
      if (itemMap[tileX][tileY] != 0){
        items[tileX][tileY].display()
      }
    }
  }

  if (player.transition){
    //called once per frame to make a 30 second timer
    if (count === countMax) player.transition = false;
    else count ++
  }
  player.display();

  player.setDirection();
  player.move();
  player.interact();

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

class Item {
  constructor(name,texture,tileX, tileY, tileSize, itemID){
    //item texture
    this.texture = texture;
    //position on tile map
    this.tileX = tileX;
    this.tileY = tileY;
    //pixel position on the canvas
    this.xPos = this.tileX * tileSize;
    this.yPos = this.tileY * tileSize;

    //itemInfo
    this.name = name;
    this.tileSize = tileSize; //sets the item size
    this.itemID = itemID; //Determines the type of item
  }

  display(){
    noStroke()
    image(this.texture,this.xPos,this.yPos,this.tileSize,this.tileSize)
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
    this.tileRules = tileRule;
    this.transition = false;

    //coordinates of player on grid
    this.xPos = startX * tileSize;
    this.yPos = startY * tileSize;

    //target pisition on grid
    this.tx = this.xPos;
    this.ty = this.yPos;

    //direction
    this.dirX = 0;
    this.dirY = 0;
    this.facing = ""

    //movement
    this.isMoving = false;
    this.speed = 5

  }

  display(){
    image(this.sprite,this.xPos,this.yPos,this.tileSize,this.tileSize);
  }

  setDirection(){
    let up = 87;    //w
    let down = 83;    //s
    let left = 65;    //a
    let right = 68    //d

    if (!this.isMoving){

      //moves up
      if (keyIsDown(up)){
        this.dirX = 0;
        this.dirY = -1;
        this.facing = "up";
      }

      //moves down
      if (keyIsDown(down)){
        this.dirX = 0;
        this.dirY = 1;
        this.facing = "down";
      }

      //moves left
      if (keyIsDown(left)){
        this.dirX = -1;
        this.dirY = 0;
        this.facing = "left";
      }

      //moves down
      if (keyIsDown(right)){
        this.dirX = 1;
        this.dirY = 0;
        this.facing = "right";
      }

      //checks target tile
      this.checkTargetTile()
    }
  }

  checkTargetTile(){
    //checks for transition
    if (this.transition){
      this.dirX = 0;
      this.dirY = 0;
    }

    //calculate current position
    this.tileX = Math.floor(this.xPos / this.tileSize);
    this.tileY = Math.floor(this.yPos / this.tileSize);
    
    //calculate next tile
    let nextTileX = this.tileX + this.dirX;
    let nextTileY = this.tileY + this.dirY;

    //Sets bounds for the border of the map
    if (nextTileX >= 0 &&        //left
        nextTileX < tilesX &&    //right
        nextTileY >= 0 &&        //top
        nextTileY < tilesY){     //bottom

          if (tileRules[nextTileY][nextTileX] === 2){
            currentLevel ++
            if (currentLevel >= levels.length){
              currentLevel = 0
            }
            loadLevel()
            this.setPlayerPosition(0)
            count = 0;
            this.transition = true;
          }
          
          else if (tileRules[nextTileY][nextTileX] === 3){
            currentLevel --
            
            console.log(currentLevel)
            loadLevel()
            this.setPlayerPosition(1)
            count = 0;
            this.transition = true;
          }

          //checks if next tile is not walkable
          else if (tileRules[nextTileY][nextTileX] != 1
                    && tileRules[nextTileY][nextTileX] != 4 
                    && itemMap[nextTileY][nextTileX] == 0){
            //next pixel positions
            this.tx = nextTileX * tileSize;
            this.ty = nextTileY * tileSize;

            //starts movement
            this.isMoving = true;
          }

    }

  }

  move(){

    //moves player
    if (this.isMoving){
      this.xPos += this.speed * this.dirX;
      this.yPos += this.speed * this.dirY;
    }

    //stops moving player
    if (this.xPos === this.tx && this.yPos === this.ty){
      this.isMoving = false;
      this.dirX = 0
      this.dirY = 0

    }
  }

  setPlayerPosition(doorValue){
    this.tileX = levels[currentLevel].startTiles[doorValue][0]
    this.tileY = levels[currentLevel].startTiles[doorValue][1]

    this.xPos = this.tileX * tileSize
    this.yPos = this.tileY * tileSize
  }

  interact(){
    if (keyIsDown(69)){ //e

      //Checks the tile above for items
      if (this.facing == "up"){
        let tileSelectedX = this.tileX 
        let tileSelectedY = this.tileY - 1

        //if there is an item, it is removed from the item map
        //and placed into the inventory
        if (itemMap[tileSelectedX][tileSelectedY] != 0){

          itemMap[tileSelectedX][tileSelectedY] = 0
          let itemValue = [items[tileSelectedX][tileSelectedY].name,items[tileSelectedX][tileSelectedY].itemID]
          append(inventory,itemValue)
          items[tileSelectedX][tileSelectedY] = ""

          console.log("Inventory",inventory)
        }
      }

      //Checks the tile below for items
      if (this.facing == "down"){
        let tileSelectedX = this.tileX 
        let tileSelectedY = this.tileY + 1
        
        //if there is an item, it is removed from the item map
        //and placed into the inventory
        if (itemMap[tileSelectedX][tileSelectedY] != 0){

          itemMap[tileSelectedX][tileSelectedY] = 0
          let itemValue = [items[tileSelectedX][tileSelectedY].name,items[tileSelectedX][tileSelectedY].itemID]
          append(inventory,itemValue)
          items[tileSelectedX][tileSelectedY] = ""

          console.log("Inventory",inventory)
        }
      }

      //Checks the tile to the left for items
      if (this.facing == "left"){
        let tileSelectedX = this.tileX - 1
        let tileSelectedY = this.tileY
        
        //if there is an item, it is removed from the item map
        //and placed into the inventory
        if (itemMap[tileSelectedX][tileSelectedY] != 0){

          itemMap[tileSelectedX][tileSelectedY] = 0
          let itemValue = [items[tileSelectedX][tileSelectedY].name,items[tileSelectedX][tileSelectedY].itemID]
          append(inventory,itemValue)
          items[tileSelectedX][tileSelectedY] = ""

          console.log("Inventory",inventory)
        }
      }

      //Checks the tile to the right for items
      if (this.facing == "right"){
        let tileSelectedX = this.tileX + 1
        let tileSelectedY = this.tileY
        
        //if there is an item, it is removed from the item map
        //and placed into the inventory
        if (itemMap[tileSelectedX][tileSelectedY] != 0){

          itemMap[tileSelectedX][tileSelectedY] = 0
          let itemValue = [items[tileSelectedX][tileSelectedY].name,items[tileSelectedX][tileSelectedY].itemID]
          append(inventory,itemValue)
          items[tileSelectedX][tileSelectedY] = ""

          console.log("Inventory",inventory)
        }
      }
    }
  }
}