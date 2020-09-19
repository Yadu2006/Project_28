const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango1, mango2, mango3, mango4, mango5;
var stone, slingShot, tree;

function preload() {

    tree = loadImage("tree.png");
    man = loadImage("boy.png");

}

function setup(){
    

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    treeSprite = createSprite(800, 220, 50, 50);
    treeSprite.addImage(tree);
    treeSprite.scale = 0.3;

    boy = createSprite(400, 330, 50, 50);
    boy.addImage(man);
    boy.scale = 0.1010;

    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(800, 100 , 20, 1);
    ground3 = new Ground(770, 200 , 20, 1);
    ground4 = new Ground(870, 130 , 20, 1);
    ground5 = new Ground(680, 180 , 20, 1);
    ground6 = new Ground(910, 190 , 20, 1);

    mango1 = new Box(800, 70, 30, 40);
    mango2 = new Box(770, 170, 30, 40);
    mango3 = new Box(870, 100, 30, 40);

    mango4 = new Box(680, 150, 30, 40);
    mango5 = new Box(910, 160, 30, 40);

    stone = new Bird(340, 270);

    slingshot = new SlingShot(stone.body,{x:340, y:270});
}

function draw(){
    
    background(255);
    Engine.update(engine);
    strokeWeight(4);

    drawSprites();

    ground.display();

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();

    stone.display();

    slingshot.display();   
    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed()
{

    if(keyCode === 32)
    {

        slingshot.attach(stone.body);

    }

}