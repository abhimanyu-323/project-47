const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hunter,hunter_img;
var enemy,enemy_img;
var boss,boss_img;
var miniBoss,miniBoss_img;
var bg,bg_img;
var score,visibility;
var enemyGroup;



function preload(){

	boss_img = loadAnimation("img1rem.png","img2rem.png","img3rem.png");
	miniBoss_img = loadAnimation("pic1.png","pic1png");
	hunter_img = loadImage("hunter.png");
	enemy_img = loadAnimation("pic3.png","pic4.png");
	bg_img = loadImage("background_img.png");
	
}

function setup() {

	createCanvas(1200, 1200);

	hunter = createSprite(900,400,1,1)
	hunter.addImage(hunter_img);
	hunter.scale=0.3;

	//enemy_img = loadAnimation("enemy.gif");
	//enemy.addAnimation(enemy_img);

	boss = createSprite(150,400,20,50)
	boss.addAnimation("moving",boss_img);
	boss.scale=0.6;

	miniBoss = createSprite(550,650,20,50)
	miniBoss.addAnimation("attack",miniBoss_img);
	miniBoss.scale=0.6;

	enemy = createSprite(550,50,20,50)
	enemy.addAnimation("attack",enemy_img);
	enemy.scale=0.6;

	score = 0;

    bg = createSprite(0,0,0,0);
	bg.addImage(bg_img);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    // hunter = new Hunter(400,400,1,1);
	 //enemy = new Enemy(800,800,1,1);
	// boss = new boss(600,600,1,1);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(bg_img);
	  
		if(keyWentDown("left")){
			hunter.velocityX = hunter.velocityX-5;
		}
		if(keyWentDown("right")){
			hunter.velocityX = hunter.velocityX+5;
		}
		if(keyWentDown("up")){
			hunter.velocityY = hunter.velocityY-2;
		}
		if(keyWentDown("down")){
			hunter.velocityX = hunter.velocityY+2;
		}
		
    fill("black");
	textSize(22);
	stroke("white")
	strokeWeight(2);
	Text("Score: "+score,40,90);
  
	if(boss.isTouching(hunter)){
		score = score+2;
		boss.visibility=boss.visibility-5;
		TransitionEvent(255,boss.visibility);
		boss.remove();
	}
	if(miniBoss.isTouching(hunter)){
		score = score+2;
		miniBoss.visibility=miniBoss.visibility-5;
		TransitionEvent(255,miniBoss.visibility);
		miniBoss.remove();
	}
	if(enemy.isTouching(hunter)){
		score = score+2;
		enemy.visibility=enemy.visibility-5;
		TransitionEvent(255,enemy.visibility);
		enemy.remove();
	}
  drawSprites();
}





