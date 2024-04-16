var timer=60;
var score=0;
var hitrn=0;

function incscore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}
function getnewHit(){
 hitrn=Math.floor(Math.random()*10);
 document.querySelector("#hitval").textContent=hitrn;
}

function runtimer(){
    var time=setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timervalue").textContent=timer;
        }else{
            document.querySelector("#panelbottom").innerHTML=`<h1>Game Over <br>Your Score:${score}</h1>`;
            clearInterval(timer);
        }
    },1000);
}

function makeBubble(){
    var cast="";

for(var i=1;i<=280;i++){
    var rn=Math.floor(Math.random()*10);
cast +=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#panelbottom").innerHTML=cast;
}
document.querySelector("#panelbottom").
addEventListener("click",function(dets){
   var clickednum= Number(dets.target.textContent);
   if(clickednum == hitrn){
    incscore();
    makeBubble();
    getnewHit();
   } 
})
makeBubble();
runtimer();
getnewHit();