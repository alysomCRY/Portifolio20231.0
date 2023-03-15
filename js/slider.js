let slide = 1;

document.getElementById("r1").checked = true;
    
setInterval(function(){
    nxtimg();
},4000)

function nxtimg (){
    slide++;
    if(slide>4){
        slide = 1;
    }
    document.getElementById("r"+slide).checked = true;
}