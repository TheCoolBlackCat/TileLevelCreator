var canvas, canvasContext;

// var warrior = new warriorClass(warriorPic);

window.onload = function() {
  canvas = document.getElementById("canvas");
  canvasContext = canvas.getContext("2d");

  // Pre-load
  colorRect(0,0, canvas.width,canvas.height, "black");
  colorText("Loading...", canvas.width/2, canvas.height/2, "white");

  loadImages();
  showDrawables();
  document.getElementById("tileCodes").children[tileToAdd].classList.add("selected");

}

function imageLoadingDoneSoStartGame() {
  setupInput();
  // loadLevel(levelOne);
  drawWorlds();
}

function loadLevel(whichLevel) {
  worldGrid = whichLevel.slice(); // Copy array
}
