// image search
$(function() {
   $("button").click(function(){
      $("#flickrembed").animate({
        height: 'toggle'
      });
   });
});


//Featurettes button action
document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "I Love Coffee";
});

document.getElementById("myBtn2").addEventListener("click", function(){
    document.getElementById("demo2").innerHTML = "Coffee is Love";
});


//Pop Up Event Listener, page not created
var x = document.getElementById("popUp");
x.addEventListener("click", myFunction);

function myFunction() {
    alert ("Something went wrong.")
}
