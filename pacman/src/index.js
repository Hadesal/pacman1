let velocityX = 1;
let velocityY = 0;
let positionX = 0;
let positionY = 0;
const PACMAN_EL = document.querySelector("#pacman");

let pacmanImages =[
    "./assets/images/pacman/pacman-0.png",
    "./assets/images/pacman/pacman-1.png",
    "./assets/images/pacman/pacman-2.png",
]


const PACMAN_SOURCE = PACMAN_EL.querySelector("img").src;
const PACMAN_1 = "../assets/images/pacman/pacman-1.png";
const PACMAN_2 = "../assets/images/pacman/pacman-2.png";
const PACMAN_3 = "../assets/images/pacman/pacman-0.png";

let x = 0;

function update() {
    positionX += velocityX;
    PACMAN_EL.style.left = positionX + "px";
    positionY += velocityY;
    PACMAN_EL.style.top = positionY + "px"; 
}

setInterval(animate, 500);

document.addEventListener("keydown", function() {
    switch(event.key) {
        case "ArrowDown": velocityY = 1;
        velocityX = 0;
        PACMAN_EL.style.transform = "rotate(90deg)";
        break;
        case "ArrowUp": velocityY = -1;
        velocityX = 0;
        PACMAN_EL.style.transform = "rotate(-90deg)";
        break;
        case "ArrowLeft": velocityX = -1;
        velocityY = 0;
        PACMAN_EL.style.transform = "rotate(180deg)";
        break;
        case "ArrowRight": velocityX = 1;
        velocityY = 0;
        PACMAN_EL.style.transform = "rotate(0deg)";
        break;
    }
})

function animate() {
    document.getElementById("pacman-img").src = pacmanImages[x]
            x++;
            if (pacmanImages.length == x) {
                x = 0;
            } return x
        }

setInterval(update, 16.67);
