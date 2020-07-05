function OrbitingCircles(name){

    var radius = 250;
    var speed =10;
    var countVowel = 0;
    var r=20;
    var centerX = 400;
    var centerY = 400;
    
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

    //COUNT VOWELS
    for(var i=0;i<name.length;i++){
        value=name[i].charCodeAt() - 64;
        if(value==1||value==5||value==9||value==15||value==21)
        countVowel++; 
    }

    if(countVowel==2){
        stroke(scolor);
        noFill();
        var x = centerX + radius * cos(angle);
        var y = centerY + radius * sin(angle);
        ellipse(x, y, r, r);
        var x2 = centerX + radius * cos(angle2);
        var y2 = centerY + radius * sin(angle2);
        ellipse(x2, y2, r, r);
        angle = angle + speed*(180/PI);
        angle2 = angle2 + speed*(180/PI);
    }
    else if(countVowel==3){

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
    else if(countVowel==4){

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
    else if(countVowel==5){

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
    else if(countVowel==6){

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

}
