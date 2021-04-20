const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//CREATING THE VARIABLES FOR :-

//THE ENGINE AND THE WORLD
   var engine, world;

//FIRST PYRAMID OF BLOCKS
   var block1, block2, block3, block4, block5, block6;
   var block7, block8, block9, block10, block11;
   var block12, block13, block14, block15;
   var block16, block17, block18;
   var block19, block20;
   var block21;

//SECOND PYRAMID OF BLOCKS
   var b1, b2, b3, b4;
   var b5, b6, b7;
   var b8, b9;
   var b10;

//PLATFORMS AND THE GROUND
   var platform, platform2, ground;

//THE POLYGON AND THE SLINSHOT
   var polygon, slingShot;


 function setup(){

//CREATING CANVAS
     createCanvas(1200,400);

//CREATING THE WORLD AND THE ENGINE
     engine = Engine.create();
     world = engine.world;

//CREATING THE GROUND
     ground = new Ground(600, height, 1200, 20);

//CREATING THE PLATFORMS
     platform = new Ground(975, 250, 225, 10);
     platform2 = new Ground(470, 325, 175, 10);

//CREATING THE POLYGONS
     polygon = new Polygon(100, 300, 10);

//CREATING THE FIRST PYRAMID
     block1 = new Box(900, 230, 30, 30);
     block2 = new Box(930, 230, 30, 30);
     block3 = new Box(960, 230, 30, 30);
     block4 = new Box(990, 230, 30, 30);
     block5 = new Box(1020, 230, 30, 30);
     block6 = new Box(1050, 230, 30, 30);
     block7 = new Box(915, 200, 30, 30);
     block8 = new Box(945, 200, 30, 30);
     block9 = new Box(975, 200, 30, 30);
     block10 = new Box(1005, 200, 30, 30);
     block11 = new Box(1035, 200, 30, 30);
     block12 = new Box(930, 170, 30, 30);
     block13 = new Box(960, 170, 30, 30);
     block14 = new Box(990, 170, 30, 30);
     block15 = new Box(1020, 170, 30, 30);
     block16 = new Box(945, 140, 30, 30);
     block17 = new Box(975, 140, 30, 30);
     block18 = new Box(1005, 140, 30, 30);
     block19 = new Box(960, 110, 30, 30);
     block20 = new Box(990, 110, 30, 30);
     block21 = new Box(975, 80, 30, 30);

//CREATING THE SECOND PYRAMID     
     b1 = new Box(425, 305, 30, 20);
     b2 = new Box(455, 305, 30, 20);
     b3 = new Box(485, 305, 30, 20);
     b4 = new Box(515, 305, 30, 20);
     b5 = new Box(440, 285, 30, 20);
     b6 = new Box(470, 285, 30, 20);
     b7 = new Box(500, 285, 30, 20);
     b8 = new Box(455, 265, 30, 20);
     b9 = new Box(485, 265, 30, 20);
     b10 = new Box(470, 245, 30, 20);

     slingShot = new SlingShot(polygon.body, {x: 100, y: 300})
}


function draw(){
    
     rectMode(CENTER);

     background("brown");
    
     Engine.update(engine);

     ground.display();
     platform.display();
     platform2.display();

     polygon.display();

     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();
     block13.display();
     block14.display();
     block15.display();
     block16.display();
     block17.display();
     block18.display();
     block19.display();
     block20.display();
     block21.display();

     b1.display();
     b2.display();
     b3.display();
     b4.display();
     b5.display();
     b6.display();
     b7.display();
     b8.display();
     b9.display();
     b10.display();

     slingShot.display();
}


 function mouseDragged(){
     Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}


 function mouseReleased(){
     slingShot.fly();
}


 function keyPressed(){
   if(keyCode === 32){
      slingShot.attach(polygon.body);  
}   
}