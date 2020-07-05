function ColorTheme(name){
    
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
}