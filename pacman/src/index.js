const PACMAN_EL = document.querySelector("#pacman");
const gameField = document.querySelector("#game").getClientRects()[0];

const BLINKY_EL = document.querySelector("#blinky");
const BLINKY_PICS = [
  "../assets/images/ghosts/ghost-blinky-right.png",
  "../assets/images/ghosts/ghost-blinky-down.png",
  "../assets/images/ghosts/ghost-blinky-left.png",
  "../assets/images/ghosts/ghost-blinky-up.png"
]
BLINKY_EL.style.top = "200px";
BLINKY_EL.style.left = "200px";

let blinkyXY = [200, 200];
let blinkyDirection = [0, 0];
BLINKY_EL.style.backgroundImage = `url("${BLINKY_PICS[0]}")`;

let pacmanDirection = [2, 0];
let pacmanXY = [100, 100];

let score = 0;
const SCOREFIELD = document.createElement("span");
SCOREFIELD.innerText = `Score: ${score}`;
SCOREFIELD.classList.add("score");
document.body.appendChild(SCOREFIELD);

let pacmanImages = [
  "./assets/images/pacman/pacman-0.png",
  "./assets/images/pacman/pacman-1.png",
  "./assets/images/pacman/pacman-2.png",
];
const PACMAN_1 = "./assets/images/pacman/pacman-1.png";
const PACMAN_2 = "./assets/images/pacman/pacman-2.png";
const PACMAN_3 = "./assets/images/pacman/pacman-0.png";

let imageCount = 0;
function movePacMan() {
  pacmanXY[0] += pacmanDirection[0];
  PACMAN_EL.style.left = pacmanXY[0] + "px";
  pacmanXY[1] += pacmanDirection[1];
  PACMAN_EL.style.top = pacmanXY[1] + "px";
}
function update() {
  movePacMan();
  followPacman(BLINKY_EL, blinkyDirection);
  moveGhost(blinkyDirection, blinkyXY, BLINKY_EL);
  for (i in squares) {
    if (squares[i].classList.contains("wall")) {
      checkCollision(PACMAN_EL, squares[i], pacmanXY, pacmanDirection);
      checkCollision(BLINKY_EL, squares[i], blinkyXY, blinkyDirection);
    }
  }
  checkDots();
  setTimeout(update, 16.67);
}

setInterval(animate, 100);

document.addEventListener("keydown", function () {
  switch (event.key) {
    case "ArrowDown":
      pacmanDirection[1] = 2;
      pacmanDirection[0] = 0;
      PACMAN_EL.style.transform = "rotate(90deg)";
      break;
    case "ArrowUp":
      pacmanDirection[1] = -2;
      pacmanDirection[0] = 0;
      PACMAN_EL.style.transform = "rotate(-90deg)";
      break;
    case "ArrowLeft":
      pacmanDirection[0] = -2;
      pacmanDirection[1] = 0;
      PACMAN_EL.style.transform = "rotate(180deg)";
      break;
    case "ArrowRight":
      pacmanDirection[0] = 2;
      pacmanDirection[1] = 0;
      PACMAN_EL.style.transform = "rotate(0deg)";
      break;
  }
});

function checkCollision(entity, target, positionXY, direction) {
  if (
    entity.getClientRects()[0].x <
      target.getClientRects()[0].x + target.getClientRects()[0].width &&
    entity.getClientRects()[0].x + entity.getClientRects()[0].width >
      target.getClientRects()[0].x &&
    entity.getClientRects()[0].y <
      target.getClientRects()[0].y + target.getClientRects()[0].height &&
    entity.getClientRects()[0].y + entity.getClientRects()[0].height >
      target.getClientRects()[0].y
  ) {
    if (direction[0] > 0 ) {
      positionXY[0] -= 4;
      entity.style.left = positionXY[0] + "px";
    } else if (direction[0] < 0) {
      positionXY[0] += 4;
      entity.style.left = positionXY[0] + "px";
    }
    if (direction[1] > 0) {
      positionXY[1] -= 3;
      entity.style.top = positionXY[1] + "px";
    } else if (direction[1] < 0) {
      positionXY[1] += 3;
      entity.style.top = positionXY[1] + "px";
    }
  }
}

function animate() {
  PACMAN_EL.style.backgroundImage = `url("${pacmanImages[imageCount]}")`;

  imageCount++;
  if (pacmanImages.length == imageCount) {
    imageCount = 0;
  }
  return imageCount;
}
const img = document.getElementById("imgPac");
function checkDots() {
  for (i in squares) {
    const pacDot = squares[i].querySelector("img.pac-dot");

    if (pacDot) {
      if (
        PACMAN_EL.getClientRects()[0].x <
          pacDot.getClientRects()[0].x + pacDot.getClientRects()[0].width &&
        PACMAN_EL.getClientRects()[0].x + PACMAN_EL.getClientRects()[0].width >
          pacDot.getClientRects()[0].x &&
        PACMAN_EL.getClientRects()[0].y <
          pacDot.getClientRects()[0].y + pacDot.getClientRects()[0].height &&
        PACMAN_EL.getClientRects()[0].y + PACMAN_EL.getClientRects()[0].height >
          pacDot.getClientRects()[0].y
      ) {
        pacDot.classList.remove("pac-dot");
        score++;
        SCOREFIELD.innerText = `Score: ${score}`;
      }
    }
  }
}

function moveGhost(direction, ghostXY, ghost) {
  ghostXY[0] += direction[0];
  ghostXY[1] += direction[1];
  ghost.style.left = ghostXY[0] + "px";
  ghost.style.top = ghostXY[1] + "px";

}


function followPacman(entity, direction) {
    console.log("follow");
    const xDifference = entity.getClientRects()[0].x - PACMAN_EL.getClientRects()[0].x;
    const yDifference = entity.getClientRects()[0].y - PACMAN_EL.getClientRects()[0].y;
    if(Math.abs(xDifference) < Math.abs(yDifference) ) {
      if(Math.abs(xDifference) < 10) {
        direction[0] = 0;
        if(yDifference > 0) {
          direction[1] = -2;
        }
        else if(yDifference < 0) {
          direction[1] = 2;
        }
      else {
      //direction[1] = 0;
      if(xDifference > 0) {
        direction[0] = -2;
      }
      else if(xDifference < 0) {
        direction[0] = 2;
      }
      
      }
    }
    }
    else if(Math.abs(xDifference) > Math.abs(yDifference)) {
      if(Math.abs(yDifference) < 10) {
        direction[1] = 0;
        if(xDifference > 0) {
          direction[0] = -2;
        }
        else if(xDifference < 0) {
          direction[0] = 2;
        }
        
      }
      else {
      //direction[0] = 0;
      if(yDifference > 0) {
        direction[1] = -2;
      }
      else if(yDifference < 0) {
        direction[1] = 2;
      }
      
      }
    }
    
}

setTimeout(update, 1000/60);

