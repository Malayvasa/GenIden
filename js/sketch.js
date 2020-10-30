//IMPORTING FONT
var font;


//VARIABLES
var name="malay";
var animate= 1;
var radius = 250;
var speed =0.024;
var countVowel;
var rcircle=20;
var center = 400;
var value=0;
var angle=0;
        
//SETUP FUNCTION
function setup() {
    pixelDensity(1);
    var canvas = createCanvas(800, 800);
    canvas.parent('p5');
    textFont('Space Mono');
    angleMode(DEGREES);
    noCursor();
}

//EXPORTING PNG   

document.querySelectorAll(".btn")[2].addEventListener("click", function(){
    if(animate == 1){animate = -1;}
    var save=name.toLowerCase();
    saveCanvas(save, 'png');
  });

//DRAW FUNCTION
function draw() {


    //CONVERT NAME TO UPPER CASE
    name=name.toUpperCase();

    //COLOR THEME
    var BeforeM=0;
    var AfterM=0;

    for(var j=0; j<name.length ;j++){
        value=name[j].charCodeAt() - 64; 
        if(value<=(77-64))
        BeforeM++;
        else
        AfterM++;
        }
        
        if(BeforeM>AfterM){
            //WHITE
            document.body.style.background = "white";
            background("white");
            scolor = "black";
            bcolor="white";
            document.body.style.color = "black";
        }
        else if(AfterM>BeforeM){
            //BLACK
            background("black");
            scolor = "white";
            bcolor="black";
            document.body.style.background = "black";
            document.body.style.color = "white";
        }
        else{
            //TURQUOISE
            background("#b2d8d8");
            scolor = "black";
            bcolor = "#b2d8d8";
            document.body.style.background = "#b2d8d8";
            document.body.style.color = "black";
        }

    //PRIMARY SHAPE
    
    strokeWeight(2);
    value=name[0].charCodeAt() - 64;

switch(value){
//START A
case 1:

    push();
    translate(400,400);
    stroke(scolor);
    noFill();
    ellipse(0,0,200);
    ellipse(0,0,225);
    line(237.5-400,0,287.5-400,0);
    line(512.5-400,0,562.5-400,0);
    circle(212.5-400,0,50);
    circle(587.5-400,0,50);
    pop();

    var a=0; var b=0;
    
    for(var i = 0; i<26;i++){
        noFill();
        stroke(scolor);
        circle(400+150*cos(a),400+150*sin(a),25);
        line(400+170*cos(b),400+170*sin(b),400+240*cos(b),400+240*sin(b));
        a=a+15;
        b=b+30;
    }

break;
// END A

//START B
case 2:

    stroke(scolor);
    noFill();
    quad(200,400)
    circle(400,300,200);
    circle(400,500,200);
    
    fill(bcolor);
    stroke(bcolor);
    quad(400,200,510,200,510,400,400,400);
    quad(400,400,290,400,290,600,400,600);
    
    noFill();
    stroke(scolor);
    circle(400,400,400);
    line(460,400,575,400);
    line(340,400,225,400);
    triangle(400,200,550,300,400,400);
    triangle(400,400,250,500,400,600);
    
break;
//END B

//START C
case 3:

    noFill();
    stroke(scolor);

    push();
    circle(400,400,300);
    circle(400,400,320);
    fill(bcolor);
    triangle(400 + 200 * cos(90),400 + 200 * sin(90),400 + 200 * cos(210),400 + 200 * sin(210),400 + 200 * cos(330),400 + 200 * sin(330));
    triangle(400 + 100 * cos(30),400 + 100 * sin(30),400 + 100 * cos(30+120),400 + 100 * sin(30+120),400 + 100 * cos(30+240),400 + 100 * sin(30+240));
    pop();

break;
//END C

//START D
case 4:

    noFill();
    stroke(scolor);
    circle(275,400,250);
    circle(525,400,250);

    fill(bcolor);
    stroke(bcolor);
    quad(400,400,150,400,150,530,400,530);
    quad(400,400,650,400,650,270,400,270);

    noFill();
    stroke(scolor);
    line(400,400,400+125,400-125);
    line(400+125,400-125,400+125,400+125);
    line(400-125,400+125,400,400);
    line(400-125,400+125,400-125,400-125);

    circle(400+125,400-125,50);
    circle(400-125,400+125,50);

break;
//END D

//START E
case 5:

    noFill();
    stroke(scolor);
    quad(400-125,400-125,400+125,400-125,400+125,400+125,400-125,400+125);
    circle(400+125,400-125,50);
    circle(400-125,400+125,50);
    circle(400+125,400+125,50);
    circle(400-125,400-125,50);
    quad(400,150,150,400,400,650,650,400);

break;
//END E

//START F
case 6:

    stroke(scolor);
    fill(bcolor);
    triangle(400,400,400-125,400-125,400+125,400-125);

    push();
    stroke(scolor);
    fill(bcolor);
    translate(400,400);
    ellipse(0,0,225);
    circle(212.5-400,0,70);
    circle(212.5-400,0,50);
    circle(587.5-400,0,70); 
    circle(587.5-400,0,50);
    pop();

    line(400-125,400-125,210,400);
    line(210,400,400,650);
    line(400,650,590,400);
    line(590,400,400+125,400-125);

break;
//END F

//START G
case 7:

    stroke(scolor);
    noFill();
    triangle(400,200,550,300,400,400);
    triangle(400,400,250,500,400,600);
    quad(200,400)

    fill(bcolor);
    circle(400,300,200);
    circle(400,500,200);

    fill(bcolor);
    stroke(bcolor);
    quad(400,200,510,200,510,400,400,400);
    quad(400,400,290,400,290,600,400,600);

    noFill();
    stroke(scolor);
    circle(550,300,50);
    circle(250,500,50);
    line(460,400,575,400);
    line(340,400,225,400);

break;
//END G

//START H
case 8:

    noFill();
    stroke(scolor);
    circle(300,400,200);
    circle(400,400,450);
    circle(500,400,200);
    line(400,220,300 + 100 * cos(180+53),400+100*sin(180+53));
    line(400,220,400,400);
    line(400,400,400,580);
    line(400,580,500 + 100 * cos(53),400+100*sin(53));

break;
//END H

//START I
case 9:
    
    var a=0; var b=0;

    for(var i = 0; i<26;i++){
        noFill();
        stroke(scolor);
        circle(400+150*cos(a),400+150*sin(a),25);
        
        fill(bcolor);
        circle(400+150*cos(a),400+150*sin(a),2);
        circle(400+60*cos(a),400+60*sin(a),2);
        circle(400+190*cos(b),400+190*sin(b),5);
        line(400+170*cos(b),400+170*sin(b),400+190*cos(b),400+190*sin(b));
        a=a+15;
        b=b+30;
     }

    noFill();
    quad(400-125,400,400,400+125,400+125,400,400,400-125);
    circle(400,400,250);

break;
//END I

//START J
case 10:

    var a=0; var b=0;
    for(var i = 0; i<=26;i++){
        noFill();
        stroke(scolor);
        circle((400-75)+85*cos(a),(400)+85*sin(a),5);
        circle((400+75)+85*cos(a),(400)+85*sin(a),5);
        a=a+15;
    }
    
    fill(bcolor);
    stroke(scolor);
    circle(400-75,400,150);
    circle(400+75,400,150);
    
    noFill();
    stroke(scolor);
    triangle(400-75,400,400+75,400,400,400-150);
    triangle(400-75,400,400,400-150,400-150,400-150);
    triangle(400+75,400,400,400-150,400+150,400-150);
    triangle(400-75,400,400-150-75,400,400-150,400+150);
    triangle(400+75,400,400+75+150,400,400+150,400+150);
    
    fill(bcolor);
    stroke(scolor);
    circle(400,400,100);

break;
//END J

//START K
case 11:

    noFill();
    stroke(scolor);
    triangle(350,400+25,450,400+25,400,350+25);
    quad(400-75,400-75,400+75,400-75,400+75,400+75,400-75,400+75);
    quad(400-125,400-125,400+125,400-125,400+125,400+125,400-125,400+125);
    quad(400,400-125,400+125,400,400,400+125,400-125,400);
    
    var a=0; var b=0;
    for(var i = 0; i<=26;i++){
        noFill();
        stroke(scolor);
        circle(400+200*cos(a-45),400+200*sin(a-45),20);
        fill(bcolor);
        circle(400+200*cos(a-45+7.5),400+200*sin(a-45+7.5),2);
        a=a+15;
    }

break;
//END K

//START L
case 12:

    noFill();
    stroke(scolor);
    quad(400,400-80,400+80,400,400,400+80,400-80,400);
    quad(400-80,400-80,400+80,400-80,400+80,400+80,400-80,400+80);
    triangle(400-80,400-80,400,400-80,400-80,400-160);
    triangle(400,400-80,400+80,400-80,400+80,400-160);
    triangle(400+80,400-80,400+160,400-80,400+80,400);
    triangle(400+80,400,400+80,400+80,400+160,400+80);
    triangle(400-80,400-80,400-160,400-80,400-80,400);
    triangle(400-80,400,400-80,400+80,400-160,400+80);
    triangle(400-80,400+80,400-80,400+160,400,400+80);
    triangle(400,400+80,400+80,400+80,400+80,400+160);
    circle(400,400,225);
    circle(400,400,360);

break;
//END L

//START M
case 13:

    noFill();
    stroke(scolor);
    circle(400,400,250);
    
    fill(bcolor);
    noStroke();
    quad(400 + 200 * cos(270+30),400+200*sin(270+30),400 + 200 * cos(270+60+30),400+200*sin(270+60+30),400 + 200 * cos(90+30),400+200*sin(90+30),400 + 200 * cos(90+60+30),400+200*sin(90+60+30));
    
    stroke(scolor);
    circle(400,400,150);
    triangle(400 + 100 * cos(270+30),400+100*sin(270+30),400 + 200 * cos(270+30+30),400+200*sin(270+30+30),400 + 100 * cos(270+60+30),400+100*sin(270+60+30));
    triangle(400 + 100 * cos(90+30),400+100*sin(90+30),400 + 200 * cos(90+30+30),400+200*sin(90+30+30),400 + 100 * cos(90+60+30),400+100*sin(90+60+30));
    line(400 + 200 * cos(270+30+30),400+200*sin(270+30+30),400 + 200 * cos(90+30+30),400+200*sin(90+30+30));
   
    noFill();
    circle(400 + 200 * cos(270+30+30),400+200*sin(270+30+30),50);
    circle(400 + 200 * cos(90+30+30),400+200*sin(90+30+30),50);
    circle(400,400,400);

break;
//END M

//START N
case 14:

    noFill();
    stroke(scolor);
    circle(300,400,200);
    circle(400,400,450);
    circle(500,400,200);
    line(400,400,300 + 100 * cos(180+53),400+100*sin(180+53));
    line(400,220,400,400);
    line(400,400,400,580);
    line(400,400,500 + 100 * cos(53),400+100*sin(53));
    line(300 + 100 * cos(180-53),400+100*sin(180-53),500 + 100 * cos(-53),400+100*sin(-53));
    line(300 + 100 * cos(180+53),400+100*sin(180+53),300 + 100 * cos(180-53),400+100*sin(180-53));
    line(500 + 100 * cos(53),400+100*sin(53),500 + 100 * cos(-53),400+100*sin(-53));

break;
//END N

//START O
case 15:

    noFill();
    stroke(scolor);
    triangle(350,400+25,450,400+25,400,350+25);
    quad(400-75,400-75,400+75,400-75,400+75,400+75,400-75,400+75);
    circle(400,400,400);
    quad(400,400-125,400+125,400,400,400+125,400-125,400);
    
    var a=0; var b=0;
    for(var i = 0; i<=26;i++){
        noFill();
        stroke(scolor);
        circle(400+200*cos(a),400+200*sin(a),30);
        line(400+100*cos(b),400+100*sin(b),400+180*cos(b),400+180*sin(b));
        fill(bcolor);
        circle(400+200*cos(a),400+200*sin(a),20);
        a=a+15;
        b=b+30;
    }

break;
//END O

//START P
case 16:

    noFill();
    stroke(scolor);
    quad(400-125,400-125,400+125,400-125,400+125,400+125,400-125,400+125);
    quad(400-120,400-120,400+120,400-120,400+120,400+120,400-120,400+120);
    circle(400+125,400-125,60);
    circle(400-125,400+125,60);
    circle(400+125,400+125,60);
    circle(400-125,400-125,60);
    circle(400+125,400-125,50);
    circle(400-125,400+125,50);
    circle(400+125,400+125,50);
    circle(400-125,400-125,50);
    quad(400,160,160,400,400,640,640,400);
    quad(400,170,170,400,400,630,630,400); 

break;
//END P

//START Q
case 17:

    var a=0;var b=0;
    for(var i = 0; i<=52;i++){
        fill(bcolor);
        circle(400+200*cos(a),400+200*sin(a),20);
        
        noFill();
        stroke(scolor);
        circle(400+200*cos(a),400+200*sin(a),30);
        line(400+100*cos(b),400+100*sin(b),400+200*cos(b),400+200*sin(b));
        
        a=a+15;
        b=b+7.5;
    }

    noFill();
    stroke(scolor);
    circle(300,400,200);
    circle(400,400,450);
    circle(500,400,200);
    line(400,400,300 + 100 * cos(180+53),400+100*sin(180+53));
    line(400,220,400,400);
    line(400,400,400,580);
    line(400,400,500 + 100 * cos(53),400+100*sin(53));
    line(300 + 100 * cos(180-53),400+100*sin(180-53),500 + 100 * cos(-53),400+100*sin(-53));
    line(300 + 100 * cos(180+53),400+100*sin(180+53),300 + 100 * cos(180-53),400+100*sin(180-53));
    line(500 + 100 * cos(53),400+100*sin(53),500 + 100 * cos(-53),400+100*sin(-53));
    
    fill(bcolor);
    stroke(scolor);
    circle(400,400,100);

break;
//END Q

//START R
case 18:

    noFill();
    stroke(scolor);circle(275,400,240);
    circle(525,400,240);
    circle(275,400,250);
    circle(525,400,250);

    fill(bcolor);
    stroke(bcolor);
    quad(400,400,150,400,150,530,400,530);
    quad(400,400,650,400,650,270,400,270);

    noFill();
    stroke(scolor);
    line(400,400,400+125,400-125);
    line(400+125,400-125,400+125,400+125);
    line(400-125,400+125,400,400);
    line(400-125,400+125,400-125,400-125);
    circle(400+125,400-125,60);
    circle(400-125,400+125,60);
    circle(400+125,400-125,50);
    circle(400-125,400+125,50);
    line(155,400,645,400); 

break;
//END R

//START S
case 19:

    var a=0;var b=0;
    for(var i = 0; i<=26;i++){
        fill(bcolor);
        circle(400+200*cos(a),400+200*sin(a),20);
        
        noFill();
        stroke(scolor);
        circle(400+200*cos(a),400+200*sin(a),30);
        line(400+180*cos(b),400+180*sin(b),400+250*cos(b),400+250*sin(b));
        
        a=a+15;
        b=b+30; 
    }

    noFill();
    stroke(scolor);
    circle(300,400,200);
    circle(400,400,450);
    circle(500,400,200);
    line(400,400,300 + 100 * cos(180+53),400+100*sin(180+53));
    line(400,220,400,400);
    line(400,400,400,580);
    line(400,400,500 + 100 * cos(53),400+100*sin(53));
    line(300 + 100 * cos(180-53),400+100*sin(180-53),500 + 100 * cos(-53),400+100*sin(-53));
    line(300 + 100 * cos(180+53),400+100*sin(180+53),300 + 100 * cos(180-53),400+100*sin(180-53));
    line(500 + 100 * cos(53),400+100*sin(53),500 + 100 * cos(-53),400+100*sin(-53));

break;
//END S

//START T
case 20:

    noFill();
    stroke(scolor);
    circle(400,400,400);

    noStroke();
    fill(bcolor);
    quad(400-210,400-20,400+210,400-20,400+210,400+210,400-210,400+210);

    noFill();
    stroke(scolor);
    circle(400,400,300);

    noStroke();
    fill(bcolor);
    quad(400-160,400+20,400-160,400-160,400+160,400-160,400+160,400+20);

    var a=180;var b=0;
    for(var i = 0; i<=12;i++){
        noFill();
        stroke(scolor);
        circle(400+150*cos(a),400+150*sin(a),10);
        circle(400+200*cos(b),400+200*sin(b),10); 
        a=a+15;
        b=b+15;
    }

    noFill();
    stroke(scolor);
    circle(400,400,150);        
    quad(400-120,400,400-70,400+25,400-20,400,400-70,400-25);
    quad(400+20,400,400+70,400+25,400+120,400,400+70,400-25);

break;
//END T

//START U
case 21:

    noFill();
    stroke(scolor);
    triangle(350,400+25,450,400+25,400,350+25);
    quad(400-85,400-85,400+85,400-85,400+85,400+85,400-85,400+85);
    quad(400-75,400-75,400+75,400-75,400+75,400+75,400-75,400+75);
    quad(400-65,400-65,400+65,400-65,400+65,400+65,400-65,400+65);
    quad(400-125,400-125,400+125,400-125,400+125,400+125,400-125,400+125);
    quad(400-115,400-115,400+115,400-115,400+115,400+115,400-115,400+115);
    quad(400-135,400-135,400+135,400-135,400+135,400+135,400-135,400+135);
    quad(400-135,400-135,400+135,400-135,400+135,400+135,400-135,400+135);
    quad(400,400-125,400+125,400,400,400+125,400-125,400);
    quad(400,400-115,400+115,400,400,400+115,400-115,400);
    quad(400,400-135,400+135,400,400,400+135,400-135,400);

    var a=0; var b=0;
    for(var i = 0; i<=26;i++){
        noFill();
        stroke(scolor);
        circle(400+200*cos(a-45),400+200*sin(a-45),30);
       
        fill(bcolor);
        circle(400+200*cos(a-45+7.5),400+200*sin(a-45+7.5),2);
        a=a+15;
    }

break;
//END U

//START V
case 22:

    noFill();
    stroke(scolor);

    var a=45;var b=45+180;
    for(var i = 0; i<=12;i++){
        noFill();
        stroke(scolor);
        circle(300+110*cos(a),400+110*sin(a),10);
        circle(500+110*cos(b),400+110*sin(b),10); 
        a=a+15;
        b=b+15;
    }

    circle(300,400,200);
    circle(500,400,200);
    circle(300,400,180);
    circle(500,400,180);

    fill(bcolor);
    stroke(scolor);
    circle(400,400,100);
    line(300+110*cos(a),350+110*sin(a),500+110*cos(b),450+110*sin(b));
    circle(400,250,70);

break;
//END V

//START W
case 23:

    stroke(scolor);
    fill(bcolor);
    triangle(400,400,400-125,400-125,400+125,400-125);

    push();
    stroke(scolor);
    fill(bcolor);
    translate(400,400);
    ellipse(0,0,225);
    circle(212.5-400,0,70);
    circle(212.5-400,0,60);
    circle(212.5-400,0,50);
    circle(587.5-400,0,70);
    circle(587.5-400,0,60)
    circle(587.5-400,0,50);
    pop();

    line(400-125,400-125,210,400);
    line(400-115,400-115,210+10,400+10);
    line(210,400,400,650);
    line(210+10,400-20,400+13,650-20);
    line(400,650,590,400);
    line(400-13,650-20,590-10,400-20);
    line(590,400,400+125,400-125);
    line(590-10,400+10,400+115,400-115);

break;
//END W

//START X
case 24:

    noFill();
    stroke(scolor);
    circle(300,400,200);
    circle(300,400,210);
    circle(400,400,450);
    circle(400,400,440);
    circle(500,400,200);
    circle(500,400,210);
    line(400,400,300 + 100 * cos(180+53),400+100*sin(180+53));
    line(400,400,500 + 100 * cos(53),400+100*sin(53));
    line(300 + 100 * cos(180-53),400+100*sin(180-53),500 + 100 * cos(-53),400+100*sin(-53));
    line(300 + 100 * cos(180+53),400+100*sin(180+53),300 + 100 * cos(180-53),400+100*sin(180-53));
    line(500 + 100 * cos(53),400+100*sin(53),500 + 100 * cos(-53),400+100*sin(-53));

    fill(bcolor);
    stroke(scolor);
    circle(400,400,100);

break;
//END X

//START Y
case 25:

    noFill();
    stroke(scolor);
    triangle(350,400+25,450,400+25,400,350+25);
    quad(400-65,400-65,400+65,400-65,400+65,400+65,400-65,400+65);
    quad(400-55,400-55,400+55,400-55,400+55,400+55,400-55,400+55);
    circle(400,400,400);
    circle(400,400,410);
    circle(400,400,390);
    quad(400,400-125,400+125,400,400,400+125,400-125,400);
    quad(400,400-115,400+115,400,400,400+115,400-115,400);

    var a=0; var b=0;
    for(var i = 0; i<=12;i++){
        noFill();
        stroke(scolor);
        circle(400+200*cos(a),400+200*sin(a),30);

        fill(bcolor);
        circle(400+200*cos(a),400+200*sin(a),20);
        a=a+15;
        b=b+30;
    }

break;
//END Y

//START Z
case 26:

    fill(bcolor);
    stroke(scolor);
    circle(400,400,330+50);
    circle(400,400,320+50);
    circle(400,400,310+50);
    circle(400,400,300+50);
    circle(400,400,230+50);
    circle(400,400,220+50);
    circle(400,400,210+50);
    circle(400,400,200+50);

    fill(bcolor);
    stroke(scolor); 
    circle(300,400,200);
    circle(500,400,200);
    
    fill(bcolor);
    stroke(scolor);
    circle(300,400,150);
    circle(500,400,150);
    circle(300,400,140);
    circle(500,400,140);

    var a=45;var b=45+180;
    for(var i = 0; i<=52;i++){
        noFill();
        stroke(scolor);
        circle(300+90*cos(a),400+90*sin(a),5);
        circle(500+90*cos(b),400+90*sin(b),5); 
        a=a+7.5;
        b=b+7.5;
    }

    fill(bcolor);
    stroke(scolor);
    circle(400,400,100); 

break;
//END Z

}

    //OUTER RING
    stroke(scolor);
    noFill();
    ellipse(400,400,500);

    //INNER CIRCLES
    
    var countAlpha = name.length;
    var cr=10;
    //NUMBER OF ALPHABETS 3
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
    
    //NUMBER OF ALPHABETS BETWEEN 3 & 5
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
        
    //NUMBER OF ALPHABETS 5 & 7
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
    
    //NUMBER OF ALPHABETS MORE THAN 7
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

    //UPPER SHAPE
    if(name[0]==name[name.length-1]){
        //SAME FIRST AND LAST LETTER
            noFill();
            stroke(scolor);
            line(355,175+20,400,200+20);
            line(400,200+20,445,175+20);
            line(355,175+45,400,200+45);
            line(400,200+45,445,175+45);
        }
        else{
        //DIFFERENT FIRST AND LAST LETTER
            noFill();
            stroke(scolor);
            quad(400,200,355,175,400,150,445,175);
        } 

    //LOWER SHAPE
    var countAlpha = name.length;
    if(countAlpha%2==0){
        //NUMBER OF ALPHABETS IS EVEN
        stroke(scolor);
        noFill();
        quad(400,455,355,545,400,635,445,545);
        noFill();
        quad(400,455+25,355,545+25,400,635+25,445,545+25);      
    }
    else{
        //NUMBER OF ALPHABETS IS ODD
        stroke(scolor);
        noFill();
        quad(400,455,355,545,400,635,445,545); 
    }

    //DISPLAYING NAME
    textSize(20);
    noStroke();
    fill(scolor);
    text("@malayvasa", 25, 30, 500);
    text("generative identity", 570, 30, 500);
    var save=name.toLowerCase();
    text(save,25,770,500);
    text("made in p5.js",630,770,500);

    //ORBITING CIRCLES
    countVowel=0;

    //COUNT VOWELS
    for(var i=0;i<name.length;i++){
        value=name[i].charCodeAt() - 64;
        if(value==1||value==5||value==9||value==15||value==21)
        countVowel++; 
    }

    for(var j=0;j<countVowel;j++){
        var x = center + radius * cos(angle);
        var y = center + radius * sin(angle);
        noFill();
        stroke(scolor);
        circle(x,y,rcircle);
        angle = angle+360/countVowel;
    }

    if(animate==1){
    angle = angle+speed*(180/PI);
    }
    else{
        angle=90;
    }
    
}
