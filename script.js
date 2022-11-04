var globalCount = 0;
function goUp(){
    globalCount++;
    document.getElementById("number").innerText = globalCount;
    document.body.style.background = "red";
    setTimeout(backGreen, 200)
}
function backGreen(){
    document.body.style.background = "#00FF00";
}