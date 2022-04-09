let playerTurn = 1;
let xPlayer = new Array();
let oPlayer = new Array();
let winningx = 0;
let winningo = 0;
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function playGame(id) {
    document.getElementById(id).value =  switchPlayer(id);
    document.getElementById(id).disabled = true;
    checkTheWinner();
}

function switchPlayer(id) {
    ++playerTurn;
    if (playerTurn % 2 == 0) {
        xPlayer.push(id);
        return "X";
    }
    oPlayer.push(id);
    return "O";
}

function checkTheWinner() { 
    for (let k = 0; k < 8; ++k) {
        winningx = 0;
        winningo = 0;
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < xPlayer.length; ++j) {
                if (winningCombinations[k][i] == xPlayer[j]) {
                    ++winningx;
                } else if (winningCombinations[k][i] == oPlayer[j])
                    ++winningo;
            }
        }
        if (winningx == 3 || winningo == 3) {
            displayTheWinner();
        } 
    }
}

function displayTheWinner() {
    if (winningx == 3) {
        document.getElementById("displayTheWinner").innerHTML = "Player x won the game!!!";
        document.getElementById("displayTheWinner").disabled = true;
    } else if (winningo == 3) {
        document.getElementById("displayTheWinner").innerHTML = "Player o won the game!!!";
        document.getElementById("displayTheWinner").disabled = true;
    }
}
