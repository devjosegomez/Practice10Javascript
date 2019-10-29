var timesClicked = 0;
console.log(window);
window.onload= function(){
    alert("Generation cohort 18");
}

window.onload = () =>{
    alert("29/10/2019");
}

window.onload = main;

function main(){
    alert("Clean code");
}

window.onmousemove = move;
window.onclick = clicked;

function move(event){
    let h2 = document.getElementById("coord");
    h2.innerHTML = "Coordinates: (X: " + event.screenX + " Y: " +  event.screenY + ")";
}

function clicked(event){
    timesClicked++;
    let h2 = document.getElementById("clicked");
    h2.innerHTML = ("Clicked: "+ timesClicked);
}