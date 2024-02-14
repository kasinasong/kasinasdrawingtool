function setup() {
   
  c = color(211,147,176);
  egg = loadImage('egg.png');
  createCanvas(windowWidth,windowHeight);
  
button = createButton('X');
button.position(width-100,height-100);
button.size(40,40);
button.mousePressed(clear)
button.addClass("Button");
  

  
  pinkcolor=color(211,147,176);
  greencolor=color(0,158,111);
  browncolor=color(176,88,0);
  bluecolor=color(60,157,191);
 
  
pinkbutton = createButton('')
pinkbutton.position(50,50);
pinkbutton.size(40,40)
pinkbutton.mousePressed(pinkcolorf)
pinkbutton.addClass("pinkbutton")
  
greenbutton = createButton('')
greenbutton.position(120,50);
greenbutton.size(40,40)
greenbutton.mousePressed(greencolorf)
greenbutton.addClass("greenbutton")

brownbutton = createButton('')
brownbutton.position(190,50);
brownbutton.size(40,40)
brownbutton.mousePressed(browncolorf)
brownbutton.addClass("brownbutton")


bluebutton = createButton('')
bluebutton.position(260,50);
bluebutton.size(40,40)
bluebutton.mousePressed(bluecolorf)
bluebutton.addClass("bluebutton")


}

function pinkcolorf(){
  c=color(pinkcolor)
}

function greencolorf(){
  c=color(greencolor)
}

function browncolorf(){
  c=color(browncolor)
}

function bluecolorf(){
  c=color(bluecolor)
}


function draw() {
//rectangle border
//noFill();
//stroke(42,43,42);
//strokeWeight(4);
//rect(25,25,windowWidth-50,windowHeight-50,5)  
  
//draw  
if(mouseIsPressed===true){
  fill(c);
  noStroke();
  circle(mouseX,mouseY,20,20)}
  
  
if( keyIsPressed=== true){
  imageMode = (CENTER);
  image(egg,mouseX,mouseY,100,100)
  //image(sticker,mouseX,mouseY,100,100);
} 
   
//clear
  function clear(){
  clear();}

}