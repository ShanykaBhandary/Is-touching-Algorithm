var fixedrect,movingrect



function setup() {
  createCanvas(800,800);
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor=("pink") 
  fixedrect=createSprite(500,300,20,40);
  fixedrect.shapeColor=("pink")
  
  
}

function draw() {
  background(255,255,255);
  movingrect.y=mouseY
  movingrect.x=mouseX

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor=("blue")
    fixedrect.shapeColor=("blue")



    }
    else{
      movingrect.shapeColor=("pink")
      fixedrect.shapeColor=("pink")
    }
  
  drawSprites();
}