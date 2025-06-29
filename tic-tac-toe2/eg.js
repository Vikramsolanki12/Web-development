let turn = document.querySelectorAll(".box-cont");
let start_turn = "X";
turn.innerHTML = "change";

let x = document.querySelector("h1");
x.style.color='violet';

// Get all boxes
const boxes = document.querySelectorAll(".box-cont");

let currentPlayer = "X";
let gameActive = true;

// Winning combinations (index-based on box IDs)
const winningCombos = [
  ["box1", "box2", "box3"],
  ["box4", "box5", "box6"],
  ["box7", "box8", "box9"],
  ["box1", "box4", "box7"],
  ["box2", "box5", "box8"],
  ["box3", "box6", "box9"],
  ["box1", "box5", "box9"],
  ["box3", "box5", "box7"]
];

function checkWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo.map(id => document.getElementById(id).textContent);
    if (a && a === b && a === c) {
      gameActive = false;
      alert(`${a} wins!`);
      return;
    }
  }

  // Check for draw
  const allFilled = Array.from(boxes).every(box => box.textContent !== "");
  if (allFilled && gameActive) {
    gameActive = false;
    alert("It's a draw!");
  }
}

boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (!gameActive || box.textContent !== "") return;

    box.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

