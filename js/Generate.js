function Generate(){ 
  var input = document.getElementById('name').value;
  if(input != ""){
      name = input;
      document.getElementById("feedback").innerHTML = "";
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

if ($(window).width() <= 812) {
  $('input').focus( function() {
    $('#sticky-footer').hide();
});

$('input').blur( function() {
    $('#sticky-footer').show();
});
}