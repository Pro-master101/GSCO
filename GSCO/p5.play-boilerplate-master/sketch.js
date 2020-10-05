var car,wall;
var speed,weight;




function setup() {
  createCanvas(1000,400);

  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(100,200,50,20);
  wall = createSprite(900,200,20,400);
  car.shapeColor = "White";
  wall.shapeColor = "Grey";
  

}

function draw() {
  background(0);
  car.velocityX = speed;
  if(wall.x - car.x < (car.width + wall.width) /2 ) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation > 180) {
      car.shapeColor = "Red";
    } 
    if(deformation < 180 && deformation > 100) {
      car.shapeColor = "Yellow";
       

    }

    if (deformation < 100) {
      car.shapeColor = "Green";
    }
    
  }
  fill("pink");
  circle(110,210,10);
  circle(125,210,10);

 fill("yellow");
 text("deformation: " + deformation,500,200 );
  drawSprites();
}