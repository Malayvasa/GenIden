//IMPORTING FONT
var NM;
function preload() {
NM = loadFont('font.otf');
}

//VARIABLES DECLARATION
var value1;
var newa =0.005;
var name="malay";
var fullname="";
var value=0;
var sCount;
var mCount;
var countVowel;
var countAlpha;

var radius = 250;
var speed =10;

var r=20;
var cr=10;

var angle = 90;
var angle2 = 270;

var angle3_1=30;
var angle3_2=150;
var angle3_3=270;

var angle4_1 = 0;
var angle4_2 = 90;
var angle4_3 = 180;
var angle4_4 = 270;

var angle5_1=90;
var angle5_2=90+72;
var angle5_3=90+72*2;
var angle5_4=90+72*3;
var angle5_5=90+72*4;

var angle6_1=270;
var angle6_2=270+60*1;
var angle6_3=270+60*2;
var angle6_4=270+60*3;
var angle6_5=270+60*4;
var angle6_6=270+60*5;

var centerX = 400;
var centerY = 400;
var triCount=[0,0,0];
var scolor = "white";
var bcolor="black"
var spin=1;

//SETUP FUNCTION
function setup() {
var canvas = createCanvas(800, 800);
canvas.parent('p5');
textFont(NM);
angleMode(DEGREES);
noCursor();
}



//DRAW FUNCTION
function draw() {
strokeWeight(2);
//VARIABLES INITIALIZATION
value=0;
countShapes=0;
countVowel=0;
countAlpha=0;
sCount=0;
mCount=0;
sun1=0;
sun2=0;
moon1=0;
moon2=0;

//ANIMATE
if(spin==1){
speed = 0.024 ;
}else{
speed =0;
}



//TO UPPER CASE
name=name.toUpperCase();


for(var i=0;i<name.length;i++){
value=name[i].charCodeAt() - 64;
if(value==1||value==5||value==9||value==15||value==21)
countVowel++; 
}

countAlpha=name.length;

for(var j=0; j<name.length ;j++){
value=name[j].charCodeAt() - 64; 
//CHECKING IF LETTERS BELONG TO SUN/MOON START
if(value<=(77-64))
sCount++;
else
mCount++;
}

if(sCount>mCount)
{document.body.style.background = "white";
background("white");
scolor = "black";
bcolor="white";
document.body.style.color = "black";
}else if(mCount>sCount){
background("black");
scolor = "white";
bcolor="black";
document.body.style.background = "black";
document.body.style.color = "white";
}else{
background("#b2d8d8");
scolor = "black";
bcolor = "#b2d8d8";
document.body.style.background = "#b2d8d8";
document.body.style.color = "black";
}
//DISPLAYING NAME
textSize(20);
noStroke();
fill(scolor);
text("@malayvasa", 25, 30, 500);
text("generative identity", 570, 30, 500);
name=name.toLowerCase();
fullname=fullname.toLowerCase();
text(name,25,770,500);
text("made in p5.js",630,770,500);
//    text(mouseX, 25, 70, 500);
//    text(mouseY, 25, 90, 500);


name=name.toUpperCase();   
value=name[0].charCodeAt() - 64;
PrimaryShape(value);


//OUTER RING
stroke(scolor);
noFill();
ellipse(400,400,500);
//ellipse(400,400,550);

if(countVowel==2)
{

stroke(scolor);
noFill();
var x = centerX + radius * cos(angle);
var y = centerY + radius * sin(angle);
ellipse(x, y, r, r);
var x2 = centerX + radius * cos(angle2);
var y2 = centerY + radius * sin(angle2);
ellipse(x2, y2, r, r);
//      line(x,y,x2,y2);
//       var xn = centerX + (radius+25) * cos(anglen);
//	var yn = centerY + (radius+25) * sin(anglen);
//  ellipse(xn, yn, r, r);
//   var xn2 = centerX +(radius+25) * cos(anglen2);
//	var yn2 = centerY +(radius+25) * sin(anglen2);
//  ellipse(xn2, yn2, r, r);

angle = angle + speed*(180/PI);
angle2 = angle2 + speed*(180/PI);
//  anglen = anglen - speed*(180/PI);
//  anglen2 = anglen2 - speed*(180/PI);
}


else if(countVowel==3)
{
stroke(scolor);
noFill();
var x = centerX + radius * cos(angle3_1);
var y = centerY + radius * sin(angle3_1);
ellipse(x, y, r, r);
var x2 = centerX + radius * cos(angle3_2);
var y2 = centerY + radius * sin(angle3_2);
ellipse(x2, y2, r, r);
var x3 = centerX + radius * cos(angle3_3);
var y3 = centerY + radius * sin(angle3_3);
ellipse(x3, y3, r, r);

angle3_1 = angle3_1 + speed*(180/PI);
angle3_2 = angle3_2 + speed*(180/PI);
angle3_3 = angle3_3 + speed*(180/PI);

}
else if(countVowel==4)
{
stroke(scolor);
noFill();
var x = centerX + radius * cos(angle4_1);
var y = centerY + radius * sin(angle4_1);
ellipse(x, y, r, r);
var x2 = centerX + radius * cos(angle4_2);
var y2 = centerY + radius * sin(angle4_2);
ellipse(x2, y2, r, r);
var x3 = centerX + radius * cos(angle4_3);
var y3 = centerY + radius * sin(angle4_3);
ellipse(x3, y3, r, r);
var x4 = centerX + radius * cos(angle4_4);
var y4 = centerY + radius * sin(angle4_4);
ellipse(x4, y4, r, r);

angle4_1 = angle4_1 + speed*(180/PI);
angle4_2 = angle4_2 + speed*(180/PI);
angle4_3 = angle4_3 + speed*(180/PI);
angle4_4 = angle4_4 + speed*(180/PI);

}
else if(countVowel==5)
{
stroke(scolor);
noFill();
var x = centerX + radius * cos(angle5_1);
var y = centerY + radius * sin(angle5_1);
ellipse(x, y, r, r);
var x2 = centerX + radius * cos(angle5_2);
var y2 = centerY + radius * sin(angle5_2);
ellipse(x2, y2, r, r);
var x3 = centerX + radius * cos(angle5_3);
var y3 = centerY + radius * sin(angle5_3);
ellipse(x3, y3, r, r);
var x4 = centerX + radius * cos(angle5_4);
var y4 = centerY + radius * sin(angle5_4);
ellipse(x4, y4, r, r);
var x5 = centerX + radius * cos(angle5_5);
var y5 = centerY + radius * sin(angle5_5);
ellipse(x5, y5, r, r);

angle5_1 = angle5_1 + speed*(180/PI);
angle5_2 = angle5_2 + speed*(180/PI);
angle5_3 = angle5_3 + speed*(180/PI);
angle5_4 = angle5_4 + speed*(180/PI);
angle5_5 = angle5_5 + speed*(180/PI);
}
else if(countVowel==6)
{
stroke(scolor);
noFill();
var x = centerX + radius * cos(angle6_1);
var y = centerY + radius * sin(angle6_1);
ellipse(x, y, r, r);
var x2 = centerX + radius * cos(angle6_2);
var y2 = centerY + radius * sin(angle6_2);
ellipse(x2, y2, r, r);
var x3 = centerX + radius * cos(angle6_3);
var y3 = centerY + radius * sin(angle6_3);
ellipse(x3, y3, r, r);
var x4 = centerX + radius * cos(angle6_4);
var y4 = centerY + radius * sin(angle6_4);
ellipse(x4, y4, r, r);
var x5 = centerX + radius * cos(angle6_5);
var y5 = centerY + radius * sin(angle6_5);
ellipse(x5, y5, r, r);
var x6 = centerX + radius * cos(angle6_6);
var y6 = centerY + radius * sin(angle6_6);
ellipse(x6, y6, r, r);

angle6_1 = angle6_1 + speed*(180/PI);
angle6_2 = angle6_2 + speed*(180/PI);
angle6_3 = angle6_3 + speed*(180/PI);
angle6_4 = angle6_4 + speed*(180/PI);
angle6_5 = angle6_5 + speed*(180/PI);
angle6_6 = angle6_6 + speed*(180/PI);
}

if(countAlpha%2==0)
{
//even
stroke(scolor);
noFill();
quad(400,455,355,545,400,635,445,545);
noFill();
quad(400,455+25,355,545+25,400,635+25,445,545+25);      
}
else
{
//odd
stroke(scolor);
noFill();

quad(400,455,355,545,400,635,445,545); 

}

if(name[0]==name[name.length-1])
{
//same
noFill();
stroke(scolor);

line(355,175+20,400,200+20);
line(400,200+20,445,175+20);

line(355,175+45,400,200+45);
line(400,200+45,445,175+45);

}
else
{
//different
noFill();
stroke(scolor);
quad(400,200,355,175,400,150,445,175);
//      heart(400, 255, 30);
} 

//INNER CIRCLES
if(countAlpha==3){
smooth();
fill("#ffc53f");
noStroke();
circle(380,400,cr);

smooth();
fill("#00e2a6");
noStroke();
circle(400,400,cr);

smooth();
fill("#008fbf");
noStroke();
circle(420,400,cr);
}

else if(countAlpha>3 && countAlpha<=5){
smooth();
fill("#fc2557");
noStroke();
circle(360,400,cr);

smooth();
fill("#ffc53f");
noStroke();
circle(380,400,cr);

smooth();
fill("#00e2a6");
noStroke();
circle(400,400,cr);

smooth();
fill("#008fbf");
noStroke();
circle(420,400,cr);

smooth();
fill("#004259");
noStroke();
circle(440,400,cr);
}


else if(countAlpha>5 && countAlpha<=7){
smooth();
noStroke();
fill("#fc2557");
circle(360,400,cr);

smooth();
noStroke();
fill("#ffc53f");
circle(380,400,cr);

smooth();
noStroke();
fill("#00e2a6");
circle(400,400,cr);

smooth();
noStroke();
fill("#008fbf");
circle(420,400,cr);

smooth();
noStroke();
fill("#004259");
circle(440,400,cr);

smooth();
noStroke();
fill("#ffc53f");
circle(400,380,cr);

smooth();
noStroke();
fill("#008fbf");
circle(400,420,cr);

}

else if(countAlpha>7){
smooth();
fill("#fc2557");
noStroke();
circle(360,400,cr);

smooth();
fill("#ffc53f");
noStroke();
circle(380,400,cr);

smooth();
fill("#00e2a6");
noStroke();
circle(400,400,cr);

smooth();
fill("#008fbf");
noStroke();
circle(420,400,cr);

smooth();
fill("#004259");
noStroke();
circle(440,400,cr);

fill("#fc2557");
noStroke();
circle(400,360,cr);    

smooth();
fill("#ffc53f");
noStroke();
circle(400,380,cr);

smooth();
fill("#008fbf");
noStroke();
circle(400,420,cr);

smooth();
fill("#004259");
noStroke();
circle(400,440,cr);
}  



}

function keyTyped() {
if (key === '1') {
var namep=name.toLowerCase();
saveCanvas(namep, 'png');
}
}
