/**
 * @jest-environment jsdom
 */

// Imports functions from game.js file
const {
    expect
} = require("@jest/globals");
const {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn
} = require("../game");

// Runs before each test is run
// Creates mock DOM
beforeAll(() => {
    // Add Node fs module, 
    // file system handling module allowing to open, read & write files
    let fs = require("fs");
    // Read content of html file and store in variable
    // Tests are run from Node root directory, file path starts there
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// Tests

// Tests if game object has correct key and sets up starting game data correctly
describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

// Tests if newGame function works correctly and resets what it should, 
// also tests if connected functions showScore and addTurn work as expected
describe("newGame works correctly", () => {
    beforeAll(() => {
        // Sets state before all tests
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toEqual(0);
    });
    test("should add one move to the computer's game array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});

// Tests if all gameplay functions work as expected, 
// if addTurn adds a turn and lightsOn adds class to buttons
describe("gameplay works correctly", () => {
    beforeEach(() => {
        // Sets state before each test
        game.score = 0;
        game.playerMoves = [];
        game.currentGame = [];
        addTurn();
    });
    // Resets state after each test
    afterEach(() => {
        game.score = 0;
        game.playerMoves = [];
        game.currentGame = [];
    });
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.score).toEqual(0);
        expect(game.currentGame.length).toBe(2);
    });
    test("should add correct class to light up the button", () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain("light");
    });
});