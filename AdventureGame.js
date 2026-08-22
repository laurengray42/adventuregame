/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

const readline = require("readline-sync");
// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");
// Get player name using readline-sync
let playerName = "";
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "Village";
let gameRunning = true;
let inventory = [];

playerName = readline.question("what is your name? ");
// Display welcome message and starting stats
console.log("welcome  ", playerName);
console.log("Gold is", playerGold);