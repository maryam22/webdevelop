var imgBack = document.getElementById("imgBack");
var imgFront = document.getElementById("imgFront");
var heads = 0;
var tails = 0;
function Game() {  
    if (Math.random() > 0.5) {
        imgBack.style.display = "inline";
        imgFront.style.display = "none";
        tails++;
        document.getElementById("side-a").innerHTML= "Tails =" + tails
    } else {
        imgBack.style.display = "none";
        imgFront.style.display = "inline";
        heads++
        document.getElementById("side-b").innerHTML = "Heads =" + heads
    }}