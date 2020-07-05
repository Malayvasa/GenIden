function UpperShape(name){

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

}