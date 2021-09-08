  
  function setup(){
    createCanvas(1500,900);
    console.log("this is setup")
    edges = createEdgeSprites() 
    sea = createSprite(5,440,400,40)
    sea.addImage("sea",(seaImg))
      sea.scale = 0.6
      sea.velocityX = -5
      ship = createSprite(300,500,20,50)
      ship.addAnimation("ship-3",(shipImg))
    ship.scale = 0.25
    ship.x = 150
  
  }
  
  function draw() {
    console.log("this is draw function")
    background(seaImg);
    if(sea.x < 0){
      sea.x= sea.width/2;
    }
   drawSprites();
  }
  function preload(){
    console.log("this is preload")
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImg = loadImage("sea.png")
  seaImg.velocityX = 5
  }