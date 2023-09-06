
var timer = 60;
var score = 0 ;
var hitrn;


function increase(){
  score +=10;
  document.querySelector("#score").textContent = score;
  
}




function getNewHit(){
  hitrn = Math.floor(Math.random()*10);
 document.querySelector("#hitval").textContent = hitrn ;

 
}

function makeBubble(){
    var clutter ="";
 
    for( var i=1;i<168;i++)
    { var a= Math.floor(Math.random()*10);
       clutter += `<div class="bubble">${a}</div>`;
    }
    
    
    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
  var timerint =  setInterval( function (){
        if(timer>0){
        timer--;
        document.querySelector('#timer').textContent = timer;
        }
        else {
            clearInterval(timerint)
        }
        
    },1000)
}

runTimer();
makeBubble();
getNewHit();
document.querySelector("#pbtm").addEventListener("click" , function(dets){
    var clickedval = Number(dets.target.textContent);
    
    if(clickedval === hitrn){
        increase();
        makeBubble();
        getNewHit();
    }
});




