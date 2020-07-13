//IMPORTING FONT
var font;
function preload() {
    font = loadFont('./styles/fonts/font.otf');
}

//VARIABLES
var name="swasti";
var animate=-1;
        
//SETUP FUNCTION
function setup() {
    pixelDensity(1);
    var canvas = createCanvas(800, 800);
    canvas.parent('p5');
    textFont(font);
    angleMode(DEGREES);
    noCursor();
}

//EXPORTING PNG   

document.querySelectorAll(".btn")[2].addEventListener("click", function(){
    animate = -1;
    var save=name.toLowerCase();
    saveCanvas(save, 'png');
    animate = 1;
  });

//DRAW FUNCTION
function draw() {


    //CONVERT NAME TO UPPER CASE
    name=name.toUpperCase();

    //COLOR THEME
    ColorTheme(name);

    //PRIMARY SHAPE
    PrimaryShape(name);

    //OUTER RING
    stroke(scolor);
    noFill();
    ellipse(400,400,500);

    //INNER CIRCLES
    InnerCircles(name);

    //UPPER SHAPE
    UpperShape(name);

    //LOWER SHAPE
    LowerShape(name);

    //DISPLAYING NAME
    Branding(name);

    //ORBITING CIRCLES
    OrbitingCircles(name,animate);
    
}
