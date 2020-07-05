function LowerShape(name){

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
}
