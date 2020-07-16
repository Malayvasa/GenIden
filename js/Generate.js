function Generate(){ 
    if(document.getElementById('name').value != ""){
        var placeHolder = document.getElementById('name').value;
        //Rick Roll
        if(placeHolder.toLowerCase()=="rick"){
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
        //Epic Sax
        else if(placeHolder.toLowerCase()=="sex"){
            window.location.replace("https://www.youtube.com/watch?v=6iFbuIpe68k");
        }
        else if(placeHolder.toLowerCase()=="george floyd"){
            window.location.replace("https://blacklivesmatter.com/");
        }
        else{
        name = placeHolder;
        document.getElementById("feedback").innerHTML = "";
        }
  } 
  else {
        document.getElementById("feedback").style.color="red";
        document.getElementById("feedback").innerHTML = "Invalid Name!";
  }
  
}
  function ToggleAnimate(){animate= -animate;}
  
  document.querySelector(".btn").addEventListener("click", Generate);
  document.querySelectorAll(".btn")[1].addEventListener("click", function(){
    animate = -animate;
  });
  document.querySelector("#name").addEventListener("keydown", function(e){
    if(e.keyCode==13){
      Generate();
    }
  })

  