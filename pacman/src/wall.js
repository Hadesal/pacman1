const grid = document.querySelector(".grid");
const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 0, 4, 0, 4, 0, 4, 0,
  4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 1, 1, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4,
  0, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 0, 0, 1, 1, 1,
  1, 1, 4, 0, 4, 1, 1, 1, 1, 1, 4, 0, 4, 0, 4, 4, 1, 1, 1, 1, 4, 0, 4, 1, 1, 1,
  1, 4, 0, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4,
  4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 0, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 1, 1, 1, 1, 4, 0,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 4, 0, 4, 1, 1, 1, 1, 4, 0, 4, 1, 1, 1, 1,
  4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
  4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 4, 4, 4, 1, 0,
  0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 4, 1, 1, 1, 1, 1, 4, 0, 4, 1, 4, 0, 4, 1, 1,
  1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 0, 4, 1, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
  4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 0, 4, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4,
  1, 1, 1, 1, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
  0, 4, 4, 4, 0, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 4, 0, 4, 0, 0, 0,
  0, 0, 0, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 4, 0, 0, 0, 1, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 1, 0, 0, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4,
  4, 4, 1, 4, 4, 4, 0, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 4, 0, 4, 1,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 0, 4, 0, 0, 0, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0,
  4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 4, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 1, 1,
  1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 0, 0, 0, 1,
  1, 1, 1, 4, 0, 4, 0, 4, 4, 4, 0, 4, 0, 4, 1, 1, 1, 0, 0, 0, 1, 1, 1, 4, 0, 4,
  1, 1, 1, 1, 4, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 4, 0, 4, 1, 1, 1, 1, 4, 4, 4, 0, 0, 1, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 4,
  0, 4, 1, 1, 1, 1, 4, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 4, 0, 4, 1, 1, 1, 1, 1,
  1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 0, 0, 4,
  4, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 0,
  0, 4, 4, 4, 1, 1, 1, 1, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 1, 1, 1, 1, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
  0, 4, 1, 4, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 4, 1, 1, 1, 1, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0,
  4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 0, 4, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
const squares = [];

//create your board
function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement("div");
    const img = document.createElement("img");

    grid.appendChild(square);
    squares.push(square);

    //add layout to the board
    if (layout[i] === 0) {
      img.classList.add("pac-dot");
      img.id = "imgPac";
      square.appendChild(img);
    } else if (layout[i] === 1) {
      squares[i].classList.add("wall");
    } else if (layout[i] === 2) {
      squares[i].classList.add("ghost-lair");
    } else if (layout[i] === 3) {
      squares[i].classList.add("power-pellet");
    } else if (layout[i] === 4) {
      squares[i];
    }
  }
}
createBoard();
//   "

//                1,1,1,
//               1,0,0,0,1,
//              1,0,0,0,0,0,1,
//             1,0,0,0,0,0,0,0,1,
//            1,0,0,0,0,0,0,0,0,0,1,
//           1,0,0,0,0,0,0,0,0,0,0,0,1,
//          1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//         1,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,1,
//        1,0,0,0,0,0,1,4,4,4,4,1,0,0,0,0,0,0,1,
//       1,0,0,0,0,0,1,1,1,4,4,4,1,1,1,0,0,0,0,0,1,
//      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//     1,0,0,0,0,0,1,1,1,1,1,4,4,4,1,1,1,1,1,0,0,0,0,0,1,
//    1,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,1,0,0,0,0,0,1
//   ,1,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,0,0,0,0,0,1
//  ,1,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,0,0,0,0,0,1,
// 1,,1,1,1,1,1,4,4,4,4,1,4,4,4,4,4,4,4,1,4,4,4,4,4,4,1,1,1,1,1,1,1

//                                  "
