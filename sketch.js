var pattern = [1];
var sounds = [];
var singlesound;
let overBox = true;


var size;
var sizemove;
var sizecircle;
var moveX = 0;
var moveY = 0;
var rgb = 0;
var colorInc = 0;

var myFont;

///////////////////////////////////////////////////////////

function preload() {
  sounds.push(loadSound("sounds/amb_01.mp3"));
  sounds.push(loadSound("sounds/amb_02.mp3"));
  sounds.push(loadSound("sounds/amb_03.mp3"));
  sounds.push(loadSound("sounds/amb_04.mp3"));
  sounds.push(loadSound("sounds/amb_05.mp3"));
  sounds.push(loadSound("sounds/amb_06.mp3"));
  sounds.push(loadSound("sounds/amb_07.mp3"));
  sounds.push(loadSound("sounds/amb_08.mp3"));
  sounds.push(loadSound("sounds/amb_09.mp3"));
  sounds.push(loadSound("sounds/amb_10.mp3"));
  
  myFont = loadFont("ApfelGrotezk-Regular.otf");
}


///////////////////////////////////////////////////////////

function setup() {
  createCanvas(windowWidth, windowHeight);

  tilde = loadImage("tilde.png");
  tildeFilled = loadImage("tilde_02.png");
  
  // sound stuff
	
  masterVolume(0.9);
  
    fill(255);
    ellipse(width/2, height/2, 100, 100);
 
}


///////////////////////////////////////////////////////////

function draw() {
    
   
  
	if (mouseIsPressed) {
   
      overBox = true; 
      
      
      for (var i = 0; i < 5; i = i + 1) {
	r = random(255);
     	g = random(255);
     	b = random(255);
	fill(r,g,b);
          
          sizecircle = random(75);
	      moveX = random(-10, 10);
    	  moveY = random(-10, 10);
		
          ellipse(mouseX + moveX, mouseY + moveY, sizecircle, sizecircle);
          
          translate(width / 2, height / 2);
          rotate(PI / random(3.0));
          image(tilde, mouseX, mouseY, 100, 100);
          }
        
          
      size = random(150);
      sizemove = random(-200,100);
      moveX = random(-10, 10);
      moveY = random(-10, 10);
      
      image(tilde, mouseX + sizemove, mouseY + sizemove , size, size);
      
      image(tildeFilled, mouseX - (size/2) + moveX, mouseY - (size/2) + moveY , size, size);
      
          
		
	} else {

	 colorInc = 0;
	 background(223, 217, 212);

       textSize(40);
	fill(0);
       text("settete~", width/2-40, height/2);
       textSize(20);
      text("audio collective", width/2-38, height/2+25);
      text("hello@settete.com", 10, 35);
     
      text("(click, drag around and have fun)", width/2-38, height/2+80);  
    

	} 
}


///////////////////////////////////////////////////////////



function mousePressed(){
  singlesound = random(sounds);
  singlesound.loop();
  var len = singlesound.duration();
  singlesound.jump(random(len));
  

  
}


function mouseReleased(){
  singlesound.stop();
}
