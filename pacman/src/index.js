const PACMAN_EL = document.querySelector("#pacman");
const gameField = document.querySelector("#game").getClientRects()[0];
const WIN_SCORE = 465;
let velocityX = 1;
let velocityY = 0;
let positionX = 100;
let positionY = 100;
let enterRight;
let enterLeft;
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

let imageCount = 0;
function movePacMan() {
  positionX += velocityX;
  PACMAN_EL.style.left = positionX + "px";
  positionY += velocityY;
  PACMAN_EL.style.top = positionY + "px";
}
function update() {
  movePacMan();
  for (i in squares) {
    if (squares[i].classList.contains("wall")) {
      checkWallCollision(squares[i]);
    } else if (
      squares[i].classList.contains("left-exit") ||
      squares[i].classList.contains("right-exit")
    ) {
      checkExitColl(squares[i]);
    } else if (squares[i].classList.contains("right-enter")) {
      enterRight = squares[i];
    } else if (squares[i].classList.contains("left-enter")) {
      enterLeft = squares[i];
    } else if (squares[i].classList.contains("power-pellet")) {
      checkPowerDots(squares[i]);
    }
  }
  checkDots();
}

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowDown":
      velocityY = 4;
      velocityX = 0;
      PACMAN_EL.style.transform = "rotate(90deg)";
      break;
    case "ArrowUp":
      velocityY = -4;
      velocityX = 0;
      PACMAN_EL.style.transform = "rotate(-90deg)";
      break;
    case "ArrowLeft":
      velocityX = -4;
      velocityY = 0;
      PACMAN_EL.style.transform = "rotate(180deg)";
      break;
    case "ArrowRight":
      velocityX = 4;
      velocityY = 0;
      PACMAN_EL.style.transform = "rotate(0deg)";
      break;
  }
});

function checkWallCollision(wall) {
  if (
    PACMAN_EL.getClientRects()[0].x <
      wall.getClientRects()[0].x + wall.getClientRects()[0].width &&
    PACMAN_EL.getClientRects()[0].x + PACMAN_EL.getClientRects()[0].width >
      wall.getClientRects()[0].x &&
    PACMAN_EL.getClientRects()[0].y <
      wall.getClientRects()[0].y + wall.getClientRects()[0].height &&
    PACMAN_EL.getClientRects()[0].y + PACMAN_EL.getClientRects()[0].height >
      wall.getClientRects()[0].y
  ) {
    if (velocityX > 0) {
      positionX -= 4;
      PACMAN_EL.style.left = positionX + "px";
    } else if (velocityX < 0) {
      positionX += 4;
      PACMAN_EL.style.left = positionX + "px";
    }
    if (velocityY > 0) {
      positionY -= 4;
      PACMAN_EL.style.top = positionY + "px";
    } else if (velocityY < 0) {
      positionY += 4;
      PACMAN_EL.style.top = positionY + "px";
    }
  }
}
function checkExitColl(exit) {
  if (
    PACMAN_EL.getClientRects()[0].x <
      exit.getClientRects()[0].x + exit.getClientRects()[0].width &&
    PACMAN_EL.getClientRects()[0].x + PACMAN_EL.getClientRects()[0].width >
      exit.getClientRects()[0].x &&
    PACMAN_EL.getClientRects()[0].y <
      exit.getClientRects()[0].y + exit.getClientRects()[0].height &&
    PACMAN_EL.getClientRects()[0].y + PACMAN_EL.getClientRects()[0].height >
      exit.getClientRects()[0].y
  ) {
    if (exit.classList.contains("left-exit")) {
      positionX = enterRight.getClientRects()[0].x - 250;
    }
    if (exit.classList.contains("right-exit")) {
      positionX = enterLeft.getClientRects()[0].x - 155;
    }
  }
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
function checkPowerDots(pacPowerDot) {
  if (
    PACMAN_EL.getClientRects()[0].x <
      pacPowerDot.getClientRects()[0].x +
        pacPowerDot.getClientRects()[0].width &&
    PACMAN_EL.getClientRects()[0].x + PACMAN_EL.getClientRects()[0].width >
      pacPowerDot.getClientRects()[0].x &&
    PACMAN_EL.getClientRects()[0].y <
      pacPowerDot.getClientRects()[0].y +
        pacPowerDot.getClientRects()[0].height &&
    PACMAN_EL.getClientRects()[0].y + PACMAN_EL.getClientRects()[0].height >
      pacPowerDot.getClientRects()[0].y
  ) {
    pacPowerDot.classList.remove("power-pellet");
    score += 10;
    SCOREFIELD.innerText = `Score: ${score}`;
  }
}

function animate() {
  PACMAN_EL.style.backgroundImage = `url("${pacmanImages[imageCount]}")`;

  imageCount++;
  if (pacmanImages.length === imageCount) {
    imageCount = 0;
  }
  return imageCount;
}

function checkWin() {
  if (score === WIN_SCORE) {
    alert("You Won");
    velocityX = 0;
    velocityY = 0;
    document.removeEventListener("keydown");
  }
}
setInterval(checkWin, 100);
setInterval(animate, 100);
setInterval(update, 16.666);
