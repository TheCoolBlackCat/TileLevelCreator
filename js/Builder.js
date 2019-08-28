function setTile(col, row, tile) {
  worldGrid[rowColToArrayIndex(col, row)] = tile;
  drawWorlds();
}

function mouseOverWhatTile(e) {
  updateMousePos(e);
  // console.log(mouseX, mouseY, WORLD_W, WORLD_H, WORLD_COLS, WORLD_ROWS);
  // var i, j, col, row;
  // for (j = 0, col = -1; j < mouseX && j < WORLD_COLS*800; j += WORLD_W) ++col;
  // for (i = 0, row = -1; i < mouseY && i < WORLD_ROWS*600; i += WORLD_H) ++row;
  var TILE_SIZE = WORLD_W;
  var arrayIndex = 0;
  var found = false;
  for(var row = 0; row < WORLD_ROWS; row++) {
    for (var col = 0; col < WORLD_COLS; col++) {
      // console.log("col:", col*TILE_SIZE+"-"+(col+1)*TILE_SIZE, "row:", row*TILE_SIZE+"-"+(row+1)*TILE_SIZE, "FOUND:", tileTypeAtColRow(row, col));
      if (mouseX > col*TILE_SIZE && mouseX < (col+1)*TILE_SIZE &&
          mouseY > row*TILE_SIZE && mouseY < (row+1)*TILE_SIZE)
          {found = true;break;}
      arrayIndex++;
    }
    if (found === true) break;
  }
  // console.log(col, row, tileTypeAtColRow(col, row));
  return {c: col, r: row, type: tileTypeAtColRow(col, row)};
}

function logWorld() {
  var log = document.getElementById("log");

  log.innerHTML = "[<br>";
  var arrayIndex = 0;
  for(var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
    log.innerHTML += "&nbsp;";
    for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
      log.innerText += worldGrid[arrayIndex];
      log.innerHTML += ((eachCol === WORLD_COLS-1 && eachRow === WORLD_ROWS-1) ? "":",") + "&nbsp;";
      if (eachCol === WORLD_COLS-1) log.innerHTML += "<br>";
      arrayIndex++;
    }
  }
  log.innerText += "];";
}

function showDrawables() {
  var tileCodes = document.getElementById("tileCodes");
  var tileImages = document.getElementById("tileImages");
  var images = [];

  for (var i = 0; i < imageList.length; i++) {
    var th = document.createElement("th");
    var td = document.createElement("td");
    var img = document.createElement("img");

    th.innerText = imageList[i].worldType;
    img.src = IMAGES_ROOT + imageList[i].theFile;

    th.id = imageList[i].worldType;
    td.headers = imageList[i].worldType;

    img.onclick = function (e) {
      var t = e.target.parentElement.headers[0];
      document.getElementById(tileToAdd).classList.remove("selected");
      tileToAdd = t;
      document.getElementById(t).classList.add("selected");
    }

    td.appendChild(img);
    images[imageList[i].worldType] = [th, td];
  }
  for (var i = 0; i < images.length; i++) {
    if (images[i] && images[i].length === 2) {
      tileCodes.appendChild(images[i][0]);
      tileImages.appendChild(images[i][1]);
    }
  }
}

function builderInput() {
  canvas.addEventListener("mousemove", function(e) {
    // console.log(mouseOverWhatTile(e));
  });

  canvas.addEventListener("click", function(e) {
    var tile = mouseOverWhatTile(e);
    setTile(tile.c, tile.r, tileToAdd);
    logNow = true;
  });

  document.addEventListener("contextmenu", function () {
    return false;;
  });

  canvas.addEventListener("contextmenu", function(e) {
    window.event.returnValue = false; // Override Default

    var tile = mouseOverWhatTile(e);
    setTile(tile.c, tile.r, 0);
    logNow = true;
  });
}
