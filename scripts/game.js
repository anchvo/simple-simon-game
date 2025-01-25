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
    addTurn();
}

// Show score function that displays current score count in respective element
function showScore() {
    document.getElementById("score").innerText = game.score;
}

// Add turn function that generates a random game turn 
// i.e. circle to click for the player
function addTurn() {
    game.playerMoves = [];
    // Pushes onto the compute game sequence containing game choices and buttons ids, 
    // generates a random number between zero and three
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();
}

// Lights on function that lights up buttons for 400ms
function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

// Show turns function that sets interval to turn on lightsOn and off, 
// incrementing the game turnNumber during the interval
function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

// Export function so require statement in test file works
// Functions in object because multiple functions will be exported
module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn,
    showTurns
};