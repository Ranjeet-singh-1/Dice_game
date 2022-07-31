"use strict";
const images=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]
let value1= Math.floor(Math.random()*6+1) ;
let value2= Math.floor(Math.random()*6+1) ;
if (value1==value2) {
    document.getElementById("h1").innerHTML="Draw!";
    document.getElementById("pic1").src=images[value1-1];
    document.getElementById("pic2").src=images[value2-1]
} 
else if(value1>value2) {
    document.getElementById("h1").innerHTML="🚩 Play 1 Wins!";
    document.getElementById("pic1").src=images[value1-1];
    document.getElementById("pic2").src=images[value2-1]
}
else{
    document.getElementById("h1").innerHTML="Player 2 Wins! 🚩";
    document.getElementById("pic1").src=images[value1-1];
    document.getElementById("pic2").src=images[value2-1]
}
