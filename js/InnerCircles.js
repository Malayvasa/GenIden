function InnerCircles(name){

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
}
