const PACMAN_EL = document.querySelector("#pacman");
const gameField = document.querySelector("#game").getClientRects()[0];

const BLINKY_EL = document.querySelector("#blinky");
const BLINKY_PICS = [
  "../assets/images/ghosts/ghost-blinky-right.png",
  "../assets/images/ghosts/ghost-blinky-down.png",
  "../assets/images/ghosts/ghost-blinky-left.png",
  "../assets/images/ghosts/ghost-blinky-up.png"
]
BLINKY_EL.style.top = "100px";
BLINKY_EL.style.left = "100px";

let blinkyXY = [100, 100];
let blinkyDirection = 2;
BLINKY_EL.style.backgroundImage = `url("${BLINKY_PICS[0]}")`;

let velocityX = 1;
let velocityY = 0;
let positionX = 100;
let positionY = 100;

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
  positionX += velocityX;
  PACMAN_EL.style.left = positionX + "px";
  positionY += velocityY;
  PACMAN_EL.style.top = positionY + "px";
}
function update() {
  movePacMan();
  moveGhost(blinkyDirection, blinkyXY, BLINKY_EL);
  for (i in squares) {
    if (squares[i].classList.contains("wall")) {
      checkCollision(squares[i]);
      randomCollision(BLINKY_EL, squares[i], blinkyDirection, blinkyXY, BLINKY_PICS);
    }
  }
  checkDots();
  requestAnimationFrame(update);
}

setInterval(animate, 500);

document.addEventListener("keydown", function () {
  switch (event.key) {
    case "ArrowDown":
      velocityY = 1;
      velocityX = 0;
      PACMAN_EL.style.transform = "rotate(90deg)";
      break;
    case "ArrowUp":
      velocityY = -1;
      velocityX = 0;
      PACMAN_EL.style.transform = "rotate(-90deg)";
      break;
    case "ArrowLeft":
      velocityX = -1;
      velocityY = 0;
      PACMAN_EL.style.transform = "rotate(180deg)";
      break;
    case "ArrowRight":
      velocityX = 1;
      velocityY = 0;
      PACMAN_EL.style.transform = "rotate(0deg)";
      break;
  }
});

function checkCollision(target) {
  if (
    PACMAN_EL.getClientRects()[0].x <
      target.getClientRects()[0].x + target.getClientRects()[0].width &&
    PACMAN_EL.getClientRects()[0].x + PACMAN_EL.getClientRects()[0].width >
      target.getClientRects()[0].x &&
    PACMAN_EL.getClientRects()[0].y <
      target.getClientRects()[0].y + target.getClientRects()[0].height &&
    PACMAN_EL.getClientRects()[0].y + PACMAN_EL.getClientRects()[0].height >
      target.getClientRects()[0].y
  ) {
    if (velocityX > 0) {
      positionX -= 2;
      PACMAN_EL.style.left = positionX + "px";
    } else if (velocityX < 0) {
      positionX += 2;
      PACMAN_EL.style.left = positionX + "px";
    }
    if (velocityY > 0) {
      positionY -= 2;
      PACMAN_EL.style.top = positionY + "px";
    } else if (velocityY < 0) {
      positionY += 2;
      PACMAN_EL.style.top = positionY + "px";
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

function checkDots() {
  for(i in squares) {
    if((squares[i].classList.contains("pac-dot")) &&
      (PACMAN_EL.getClientRects()[0].x < squares[i].getClientRects()[0].x + squares[i].getClientRects()[0].width &&
    PACMAN_EL.getClientRects()[0].x + PACMAN_EL.getClientRects()[0].width > squares[i].getClientRects()[0].x &&
    PACMAN_EL.getClientRects()[0].y < squares[i].getClientRects()[0].y + squares[i].getClientRects()[0].height &&
    PACMAN_EL.getClientRects()[0].y + PACMAN_EL.getClientRects()[0].height > squares[i].getClientRects()[0].y)){
      squares[i].classList.remove("pac-dot");
      score++;
      SCOREFIELD.innerText = `Score: ${score}`;
    }
    
  }
}

function moveGhost(direction, ghostXY, ghost) {
  switch(direction) {
    case 0: ghostXY[0] += 1;
            ghost.style.left = ghostXY[0] + "px";
            break;
    case 1: ghostXY[1] += 1;        
            ghost.style.top = ghostXY[1] + "px";
            break;
    case 2: ghostXY[0] -= 1;
            ghost.style.left = ghostXY[0] + "px";
            break;
    case 3: ghostXY[1] -= 1;
            ghost.style.top = ghostXY[1] + "px";
            break;
  }
}

function randomCollision(ghost, target, direction, ghostXY, pics) {
  if(ghost.getClientRects()[0].x <
  target.getClientRects()[0].x + target.getClientRects()[0].width &&
ghost.getClientRects()[0].x + ghost.getClientRects()[0].width >
  target.getClientRects()[0].x &&
ghost.getClientRects()[0].y <
  target.getClientRects()[0].y + target.getClientRects()[0].height &&
ghost.getClientRects()[0].y + ghost.getClientRects()[0].height >
  target.getClientRects()[0].y) {
    switch(direction) {
      case 0: ghostXY[0] -= 30;
              ghost.style.left = ghostXY[0] + "px";
              break;
      case 1: ghostXY[1] -= 30;        
              ghost.style.top = ghostXY[1] + "px";
              break;
      case 2: ghostXY[0] += 30;
              ghost.style.left = ghostXY[0] + "px";
              break;
      case 3: ghostXY[1] += 30;
              ghost.style.top = ghostXY[1] + "px";
              break;
    }
    direction += 1;
    ghost.style.backgroundImage = `url("${pics[direction]}")`;
  }
}

requestAnimationFrame(update);
