let count = 0;
document.getElementById("main").textContent = count;
document.getElementById("decrease").onclick=function(){
    count--;
    document.getElementById("main").textContent=count;
}
document.getElementById("increase").onclick=function(){
    count++;
    document.getElementById("main").textContent=count;
}
document.getElementById("reset").onclick=function(){
    count = 0;
    document.getElementById("main").textContent = count;
}