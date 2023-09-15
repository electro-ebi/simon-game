gamePattern=[];
buttonColours=[ "red", "blue", "green", "yellow" ];
var blue = new Audio("sounds/blue.mp3");
      blue.play();


nextSequence();

 function nextSequence(){
    var randomNumber=Math.floor((Math.random())*4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).trigger("blue");
   
        
    
    
    
    
    
 }