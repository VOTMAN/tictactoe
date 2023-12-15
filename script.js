let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let winArea = document.querySelector(".winner-box");
let win = document.querySelector(".winner");
let newGame = document.querySelector(".newGame");

let turnO = true;

let winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnO) {
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    }) 
})

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                printWinner(pos1);
                btns.forEach((btn) => {
                    btn.disabled = true;
                })
            }
        }
    }
}

const printWinner = (winner) => {
    winArea.classList.remove("hidden");
    win.innerText = `${winner} Won!`;
}

reset.addEventListener("click", () => {
    location.reload();
})

newGame.addEventListener("click", () => {
    location.reload();
})