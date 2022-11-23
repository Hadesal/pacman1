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
let blinkyDirection = [1, 1];
BLINKY_EL.style.backgroundImage = `url("${BLINKY_PICS[0]}")`;

let velocityXY = [1, 0];
let positionXY = [100, 100];

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
  positionXY[0] += velocityXY[0];
  PACMAN_EL.style.left = positionXY[0] + "px";
  positionXY[1] += velocityXY[1];
  PACMAN_EL.style.top = positionXY[1] + "px";
}
function update() {
  movePacMan();
  moveGhost(blinkyDirection, blinkyXY, BLINKY_EL);
  for (i in squares) {
    if (squares[i].classList.contains("wall")) {
      checkCollision(squares[i]);
    }
  }
  checkDots();
  requestAnimationFrame(update);
}

setInterval(animate, 100);

document.addEventListener("keydown", function () {
  switch (event.key) {
    case "ArrowDown":
      velocityXY[1] = 2;
      velocityXY[0] = 0;
      PACMAN_EL.style.transform = "rotate(90deg)";
      break;
    case "ArrowUp":
      velocityXY[1] = -2;
      velocityXY[0] = 0;
      PACMAN_EL.style.transform = "rotate(-90deg)";
      break;
    case "ArrowLeft":
      velocityXY[0] = -2;
      velocityXY[1] = 0;
      PACMAN_EL.style.transform = "rotate(180deg)";
      break;
    case "ArrowRight":
      velocityXY[0] = 2;
      velocityXY[1] = 0;
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
    if (velocityXY[0] > 0) {
      positionXY[0] -= 2;
      PACMAN_EL.style.left = positionXY[0] + "px";
    } else if (velocityXY[0] < 0) {
      positionXY[0] += 2;
      PACMAN_EL.style.left = positionXY[0] + "px";
    }
    if (velocityXY[1] > 0) {
      positionXY[1] -= 2;
      PACMAN_EL.style.top = positionXY[1] + "px";
    } else if (velocityXY[1] < 0) {
      positionXY[1] += 2;
      PACMAN_EL.style.top = positionXY[1] + "px";
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
  for (i in squares) {
    if (squares[i].classList.contains("pac-dot")) {
      if (
        PACMAN_EL.getClientRects()[0].x <
          squares[i].getClientRects()[0].x +
            squares[i].getClientRects()[0].width &&
        PACMAN_EL.getClientRects()[0].x + PACMAN_EL.getClientRects()[0].width >
          squares[i].getClientRects()[0].x &&
        PACMAN_EL.getClientRects()[0].y <
          squares[i].getClientRects()[0].y +
            squares[i].getClientRects()[0].height &&
        PACMAN_EL.getClientRects()[0].y + PACMAN_EL.getClientRects()[0].height >
          squares[i].getClientRects()[0].y
      ) {
        squares[i].classList.remove("pac-dot");
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

function randomCollision(ghost, target, direction, ghostXY, pics) {
  if(ghost.getClientRects()[0].x <
  target.getClientRects()[0].x + target.getClientRects()[0].width &&
ghost.getClientRects()[0].x + ghost.getClientRects()[0].width >
  target.getClientRects()[0].x &&
ghost.getClientRects()[0].y <
  target.getClientRects()[0].y + target.getClientRects()[0].height &&
ghost.getClientRects()[0].y + ghost.getClientRects()[0].height >
  target.getClientRects()[0].y) {
    
}
}
requestAnimationFrame(update);

console.log(BLINKY_EL.getClientRects()[0].x - PACMAN_EL.getClientRects()[0].x);
console.log(BLINKY_EL.getClientRects()[0].y - PACMAN_EL.getClientRects()[0].y);
