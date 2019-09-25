window.addEventListener("load", drawScreen, false);

var imgBackground = new Image();
imgBackground.src = "img/background.png";
imgBackground.addEventListener("load", drawScreen, false);

var imgPlayer = new Image();
imgPlayer.src = "img/background.png";
imgBackground.addEventListener("load", drawScreen, false);

var imgPlayer = new Image();
imgPlayer.src = "img/player.png";
imgPlayer.addEventListener("load", drawScreen, false);

function drawScreen() {
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 800, 600);

    Context.drawImage(imgBackground, 0, 0);
    Context.drawImage(imgPlayer, 350, 250);

    window.addEventListener("load", drawScreen, false);
    window.addEventListener("keydown", onkeydown, true);

    var imgBackground = new Image();
    imgPlayer.src = "img/player.png";
    imgPlayer.addEventListener("load", drawScreen, false);

    var intPlayerX = 350;
    var intPlayerY = 250;
}