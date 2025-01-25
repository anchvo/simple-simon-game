let game = {
    score: 0, 
    currentGame: [],
    playerMoves: [],

}

// Export function so require statement in test file works
// Functions in object because multiple functions will be exported
module.exports = { game };