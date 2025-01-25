/**
 * @jest-environment jsdom
 */

// Imports functions from game.js file
const { game } = require("../game");

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

