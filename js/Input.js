const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

var mouseX = 0;
var mouseY = 0;

var tileToAdd = WORLD_WALL;
function setupInput() {
  builderInput();
}

function updateMousePos(evt) {  // Mouse Stuff
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;

  // Start Cheat/Hack to move warrior - For Testing
    /*
    warriorX = mouseX;
    warriorY = mouseY;
    warriorSpeedX = 4;
    warriorSpeedY = -4;
    */
  // End Cheat/Hack
}
