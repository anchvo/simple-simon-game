let game = {
    score: 0, 
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
}

// Export function so require statement in test file works
// Functions in object because multiple functions will be exported
module.exports = { game, newGame };