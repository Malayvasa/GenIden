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
var sum=0;
var value=0;
var sCount;
var mCount;
var countVowel=0;
var countAlpha=0;
var diameter=0;
var sun1;
var sun2;
var moon1;
var moon2;
var triFlag=0;
var radius = 250;
var speed =10;
var speed2 =0.8;
var r=20;
var cr=10;
var angle = 90;
var angle2 = 270;
var anglen = 0;
var anglen2 = 180;

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
    scale(1);
 strokeWeight(2);
  //VARIABLES INITIALIZATION
  sum=0;
  value=0;
  countShapes=0;
  countVowel=0;
  countAlpha=0;
  diameter=0;
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

    
  //NAME INPUT 
   
  //TO UPPER CASE
  name=name.toUpperCase();


     for(var i=0;i<name.length;i++)
  {
    value=name[i].charCodeAt() - 64;
    sum=sum+value;
    
    ///READING Z<J<Q START
    if(value==(74-64)||value==(90-64)||value==(81-64))
    {
      triFlag=1;
      //J
      if(value==(74-64))
        triCount[0]++;
      //Q  
      if(value==(90-64))
        triCount[1]++;
      //Z  
      if(value==(81-64))
      triCount[2]++;
        
    }
    ///READING Z<J<Q END
    
    ///READING VOWELS START
    if(value==1||value==5||value==9||value==15||value==21)
    countVowel++; 
    ///READING VOWELS END
    
    //COUNTING NUMBER OF ALPHABETS
    countAlpha=name.length;
    
    diameter=sum*2;
      
          
  }
    
    for(var j=0; j<name.length ;j++){
       value=name[j].charCodeAt() - 64; 
        //CHECKING IF LETTERS BELONG TO SUN/MOON START
    if(value<=(77-64))
      sCount++;
    else
      mCount++;

  //CHECKING IF LETTERS BELONG TO SUN/MOON END
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
     if(value==1){ 
         beginShape();
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
         endShape(CLOSE);
                
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
}else if(value==2){
   
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
    

}else if(value==3){
    noFill();
    stroke(scolor);
    push();
//    ellipse(400,400,400);
    circle(400,400,300);
    circle(400,400,320);
    fill(bcolor);
    beginShape();
    
    triangle(400 + 200 * cos(90),400 + 200 * sin(90),400 + 200 * cos(210),400 + 200 * sin(210),400 + 200 * cos(330),400 + 200 * sin(330));
//    ellipse(400,400,200);
    triangle(400 + 100 * cos(30),400 + 100 * sin(30),400 + 100 * cos(30+120),400 + 100 * sin(30+120),400 + 100 * cos(30+240),400 + 100 * sin(30+240));
   
    endShape(CLOSE);
// 
    pop();
}else if(value==4){
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
    
}else if(value==5){
    noFill();
    stroke(scolor);
    quad(400-125,400-125,400+125,400-125,400+125,400+125,400-125,400+125);
     circle(400+125,400-125,50);
    circle(400-125,400+125,50);
    circle(400+125,400+125,50);
    circle(400-125,400-125,50);
    quad(400,150,150,400,400,650,650,400);
}
    else if(value==6){
        stroke(scolor);
    fill(bcolor);
    triangle(400,400,400-125,400-125,400+125,400-125);
        
        
    beginShape();
         push();
        stroke(scolor);
    fill(bcolor);
                  translate(400,400);
         
        ellipse(0,0,225);

    
//    line(237.5-400,0,287.5-400,0);
//    line(512.5-400,0,562.5-400,0);
//        
 
        circle(212.5-400,0,70);
           circle(212.5-400,0,50);
   
         circle(587.5-400,0,70); 
          circle(587.5-400,0,50);
         endShape(CLOSE);
                
                  pop();
        line(400-125,400-125,210,400);
        line(210,400,400,650);
        line(400,650,590,400);
        line(590,400,400+125,400-125);
        
}
    else if(value==7){
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
    }
    else if(value == 8){
        noFill();
        stroke(scolor);
        circle(300,400,200);
        circle(400,400,450);
        circle(500,400,200);
        line(400,220,300 + 100 * cos(180+53),400+100*sin(180+53));
        line(400,220,400,400);
        line(400,400,400,580);
        line(400,580,500 + 100 * cos(53),400+100*sin(53));
    }
    else if(value==9){ var a=0; var b=0;
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
    }else if(value==10){
        
        
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
        
    }else if(value==11){
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
    }
    else if(value==12){
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
                  }
    else if(value==13){
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
    }else if(value==14){
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
    }
    else if(value==15){
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
    }else if(value==16){
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
    }else if(value==17){
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
    }
    else if(value==18){
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
    }
    else if(value==19){
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
        
    }else if(value==20){
        
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
        
    }else if(value==21){
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
        
    }else if(value==22){
       noFill();
            stroke(scolor);
//        circle(300,350,220);
//        circle(500,450,220);
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
    }else if(value==23){
        
        stroke(scolor);
    fill(bcolor);
    triangle(400,400,400-125,400-125,400+125,400-125);
        
        
    beginShape();
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
         endShape(CLOSE);
                
                  pop();
        line(400-125,400-125,210,400);
        line(400-115,400-115,210+10,400+10);
        line(210,400,400,650);
        line(210+10,400-20,400+13,650-20);
        line(400,650,590,400);
        line(400-13,650-20,590-10,400-20);
        line(590,400,400+125,400-125);
          line(590-10,400+10,400+115,400-115);
        
    }
    else if(value==24){
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
    }
    else if(value==25){
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
    }
    else if(value==26){
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
    }
     newa = newa + speed2;
    function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
    function hexagon(transX, transY, s) {
  push();
  translate(transX, transY);
  scale(s);
  beginShape();
	vertex(-75, -130);
	vertex(75, -130);
	vertex(150, 0);
	vertex(75, 130);
  vertex(-75, 130);
	vertex(-150, 0);
	endShape(CLOSE); 
	pop();
}
    
    //OUTER RING
    stroke(scolor);
    noFill();
    ellipse(400,400,500);
//    ellipse(400,400,550);
    
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
  //CUSTOM CURSOR
    fill(bcolor);
    stroke("red");
//    circle(mouseX,mouseY,cr);
//    line(mouseX,0,mouseX,800);
//    line(0,mouseY,800,mouseY);
     
   
}

function keyTyped() {
  if (key === '1') {
      var namep=name.toLowerCase();
     saveCanvas(namep, 'png');
  }
}
