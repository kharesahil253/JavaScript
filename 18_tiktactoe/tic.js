const button = document.querySelectorAll(".box");// Targeting the all buttons 
let currentplayer = "X";
button.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.textContent) {
            box.textContent = currentplayer;
            if (checkwinner(currentplayer)) {
                alert(`${currentplayer} wins!`);
                return; // Stops further execution
            } else if (Array.from(button).every(b => b.textContent)) {
                alert("It's a draw!");
                return;
            }
            currentplayer = currentplayer === "X" ? "O" : "X"; // Swap turn after checking
        }
    });
});

const winningconditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const checkwinner = (player) => {
    return winningconditions.some(condition =>
        condition.every(index => button[index].textContent === player)
    );
};


const resetgame = () => {
    button.forEach(box => box.textContent = "");
    currentplayer = "X";
}

const resetbut = document.getElementById("reset");

// console.log(resetbut)
resetbut.addEventListener('click', resetgame);