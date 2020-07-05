//DISPLAYING PRIMARY SHAPE
function PrimaryShape(value){
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
}