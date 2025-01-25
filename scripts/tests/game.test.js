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

// Test if score key exists
describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
});

