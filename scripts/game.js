// Game object that sets up game data
let game = {
    score: 0, 
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

// New game function that resets progess
function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
}

// Show score function that displays current score count in respective element
function showScore() {
    document.getElementById("score").innerText = game.score;
}

// Export function so require statement in test file works
// Functions in object because multiple functions will be exported
module.exports = { game, newGame, showScore };