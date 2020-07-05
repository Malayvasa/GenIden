//IMPORTING FONT
var font;
function preload() {
    font = loadFont('font.otf');
}

//VARIABLES
var animate=1;
var countVowel;
var countAlpha;
        
//SETUP FUNCTION
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent('p5');
    textFont(font);
    angleMode(DEGREES);
    noCursor();
}

//EXPORTING PNG     
function keyTyped() {
    if (key === '1') {
    var save=name.toLowerCase();
    saveCanvas(save, 'png');
    }
}

//DRAW FUNCTION
function draw() {

    //VARIABLES INITIALIZATION
    countVowel=0;
    countAlpha=0;

    //SKETCH STROKE
    strokeWeight(2);

    //ANIMATE
    if(animate==1){
        speed = 0.024 ;
    }else{
        speed =0;
    }

    //CONVERT NAME TO UPPER CASE
    name=name.toUpperCase();

    //COUNT ALPHABETS
    countAlpha=name.length;

    //COUNT VOWELS
    for(var i=0;i<name.length;i++){
        value=name[i].charCodeAt() - 64;
        if(value==1||value==5||value==9||value==15||value==21)
        countVowel++; 
    }

    //PRIMARY SHAPE
    value=name[0].charCodeAt() - 64;
    PrimaryShape(value);


}


