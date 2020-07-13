var radius = 250;
var speed =0.024;
var countVowel;
var rcircle=20;
var center = 400;
var value=0;
var angle=0;
var animate =1;

function OrbitingCircles(){
    countVowel=0;

    if (animate == 1){speed =0.024;}else{speed=0;}

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

    angle = angle+speed*(180/PI);
   
}