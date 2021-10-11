var road,boy,potion,sword,money,monster;
var roadImg,boyImg,potionImg,swordImg,moneyImg,monsterImg;
var inventoryCollection = 0;
var potionG,swordG,moneyG,monsterGroup;

// Game States
var PLAY = 1;
var end = 0;
var gameState=PLAY;

function preload(){
roadImg = loadImage("1.jpg");
boyImg = loadImage("Jim_Lake_Jr.png");
potionImg = loadImage("Potion_of_Leaping.gif");
swordImg = loadImage("Gear-Lostvayne_Render.png");
moneyImg = loadImage("Birthstone-0.png");
monsterImg = loadImage("Suguru_Geto.png");

}

function setup() {
 createCanvas(400,600);

 // Moving background
road=createSprite(200,200);
road.addImage(roadImg);
road.velocityY = 4;

//creating boy running
boy = createSprite(70,580,20,20);
boy.addImage(boyImg);
boy.scale=0.08;

}

function draw() {
    if(gameState===PLAY){
        background(0);
        boy.x = World.mouseX;
        
        edges= createEdgeSprites();
        boy.collide(edges);
    
//code to reset the background
if(road.y > 400 ){
    road.y = height/2;
  }
  
    createPotion();
    createSword();
    createMoney();
    createMonster();

    if (potionG.isTouching(boy)) {
      potionG.destroyEach();
      treasureCollection=inventoryCollection+60;
    }
    else if (swordG.isTouching(boy)) {
      swordG.destroyEach();
      treasureCollection=inventoryCollection+100;

      
    }else if(moneyG.isTouching(boy)) {
      moneyG.destroyEach();
      treasureCollection=inventoryCollection+173;

      
    }else{
      if(monsterGroup.isTouching(boy)) {
        gameState=END;    
    boy.addImage(boyImg);
    boy.x=200;
    boy.y=300;
    potionG.destroyEach();
    potionG.setVelocityEach(0);
    swordG.destroyEach();
    swordG.setVelocityEach(0);
    moneyG.destroyEach();
    moneyG.setVelocityEach(0);
  }
}

  drawSprites();
  textSize(20);
  fill(255);
  text("Inventory: "+ inventoryCollection,150,30);
  }

}

function createPotion() {
  if (World.frameCount % 200 == 0) {
  var potion = createSprite(Math.round(random(50, 350),40, 10, 10));
  potion.addImage(potionImg);
  potion.scale=0.12;
  potion.velocityY = 3;
  potion.lifetime = 150;
  potionG.add(cash);
  }
}

function createSword() {
  if (World.frameCount % 320 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.03;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordG.add(sword);
}
}

function createMoney() {
  if (World.frameCount % 410 == 0) {
  var money = createSprite(Math.round(random(50, 350),40, 10, 10));
  money.addImage(moneyImg);
  money.scale=0.13;
  money.velocityY = 3;
  money.lifetime = 150;
  moneyG.add(money);
  }
}

function createMonster(){
  if (World.frameCount % 530 == 0) {
  var monster = createSprite(Math.round(random(50, 350),40, 10, 10));
  monster.addImage(monsterImg);
  monster.scale=0.1;
  monster.velocityY = 3;
  monster.lifetime = 150;
  monsterGroup.add(monster);
  }
}

