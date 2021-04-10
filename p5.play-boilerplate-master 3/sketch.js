var Price;

var B1, B2, B3, B4, B5;

var C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18, C19, C20, C21, C22;

function preload() {

  PriceIMG = loadImage("images/Price's Flashlight equipped.jpg");

  B1img = loadImage("images/Flashlight equipped.png");

  B2img = loadImage("images/Knife equipped.png");

  B3img = loadImage("images/Pistol equipped.png");

  B4img = loadImage("images/AK-47 equipped.png");

  B5img = loadImage("images/SPAS equipped.png");

}

function setup() {
  createCanvas(400,400);

  Price = createSprite(200, 200, 4, 4);
  Price.addImage(PriceIMG);
  Price.scale = 0.25;

  B1 = createSprite(15, 15, 4, 4);
  B1.addImage(B1img);
  B1.scale = 0.25;

  B2 = createSprite(15, 375, 4, 4);
  B2.addImage(B2img);
  B2.scale = 0.25;

  B3 = createSprite(375, 15, 4, 4);
  B3.addImage(B3img);
  B3.scale = 0.25;

  B4 = createSprite(375, 375, 4, 4);
  B4.addImage(B4img);
  B4.scale = 0.25;

  B5 = createSprite(200, 375, 4, 4);
  B5.addImage(B5img);
  B5.scale = 0.25;

  var C1 = createSprite(15, 75, 100, 20);
  C1.shapeColor = "brown";
  C1.debug = true;

  var C2 = createSprite(110, 57, 20, 55);
  C2.shapeColor = "brown";
  C2.debug = true;

  var C3 = createSprite(47, 165, 20, 105);
  C3.shapeColor = "brown";
  C3.debug = true;

  var C4 = createSprite(40, 230, 70, 20);
  C4.shapeColor = "brown";
  C4.debug = true;

  var C5 = createSprite(172, 100, 143, 20);
  C5.shapeColor = "brown";
  C5.debug = true;

  var C6 = createSprite(132, 160, 143, 20);
  C6.shapeColor = "brown";
  C6.debug = true;

  var C7 = createSprite(160, 255, 70, 20);
  C7.shapeColor = "brown";
  C7.debug = true;

  var C8 = createSprite(297, 160, 140, 20);
  C8.shapeColor = "brown";
  C8.debug = true;

var C9 = createSprite(110, 282, 20, 70);
C9.shapeColor = "brown";
C9.debug = true;

var C10 = createSprite(260, 80, 20, 70);
C10.shapeColor = "brown";
C10.debug = true;

var C11 = createSprite(215, 325, 70, 20);
C11.shapeColor = "brown";
C11.debug = true;

var C12 = createSprite(185, 208, 20, 70);
C12.shapeColor = "brown";
C12.debug = true;

var C13 = createSprite(87, 330, 70, 20);
C13.shapeColor = "brown";
C13.debug = true;

var C14 = createSprite(190, 35, 20, 65);
C14.shapeColor = "brown";
C14.debug = true;

var C15 = createSprite(225, 50, 45, 20);
C15.shapeColor = "brown";
C15.debug = true;

var C16 = createSprite(315, 60, 20, 100);
C16.shapeColor = "brown";
C16.debug = true;

var C17 = createSprite(65, 287, 20, 60);
C17.shapeColor = "brown";
C17.debug = true;

var C18 = createSprite(245, 243, 20, 140);
C18.shapeColor = "brown";
C18.debug = true;

var C19 = createSprite(30, 270, 47, 20);
C19.shapeColor = "brown";
C19.debug = true;

var C20 = createSprite(380, 131, 20, 90);
C20.shapeColor = "brown";
C20.debug = true;

var C21 = createSprite(348, 99, 42, 20);
C21.shapeColor = "brown";
C21.debug = true;

var C22 = createSprite(276, 347, 240, 20);
C22.shapeColor = "brown";
C22.debug = true;


}

function draw() {
  background(128,128,128);  
  drawSprites();
}