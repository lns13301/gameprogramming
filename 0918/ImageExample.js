var imgWarrior = new Image();
imgWarrior.src = "warrior.png";
imgWarrior.addEventListener("load", drawScreen, false);

function drawScreen()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#dd703f";
    Context.fillRect(0,0,8000,6000);

    Context.drawImage(imgWarrior, 500, 500, 800, 800);
}