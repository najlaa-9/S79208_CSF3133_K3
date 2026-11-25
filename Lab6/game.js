// Global variables
let gameStarted = false;
let wins = 0;
let losses = 0;
let draws = 0;
let round = 0;
let results = [];

// Start Game Function
function startGame() {

    let name = document.getElementById("playerName").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    document.querySelector("header p").innerHTML =
        "Welcome, " + name + "! Using innerHTML";

    let time = new Date();
    document.getElementById("startTime").innerHTML =
        "Game Started: " + time;

    gameStarted = true;
}

// Generate Computer Choice
function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

// Play One Round
function playRound(playerChoice) {

    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();

    // Change images
    document.getElementById("playerImg").src =
        playerChoice + ".png";

    document.getElementById("computerImg").src =
        computerChoice + ".png";

    let result;

    if (playerChoice === computerChoice) {
        result = "Draw";
        draws++;
        document.getElementById("result").style.color = "gray";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Win";
        wins++;
        document.getElementById("result").style.color = "green";
    }
    else {
        result = "Lose";
        losses++;
        document.getElementById("result").style.color = "red";
    }

    // Display result
    document.getElementById("result").innerHTML =
        "You " + result + "!";

    // Update score
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Store result
    results.push(result);

    // History table
    round++;

    let table = document.getElementById("history");

    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = round;
    cell2.innerHTML = playerChoice;
    cell3.innerHTML = computerChoice;
    cell4.innerHTML = result;
}

// Show Summary
function showSummary() {

    let totalWins = 0;

    for (let i = 0; i < results.length; i++) {

        if (results[i] === "Win") {
            totalWins++;
        }
    }

    let percentage = 0;

    if (results.length > 0) {
        percentage =
            ((totalWins / results.length) * 100).toFixed(2);
    }

    alert(
        "You won " +
        totalWins +
        " out of " +
        results.length +
        " rounds (" +
        percentage +
        "%)"
    );
}

// Reset Game
function resetGame() {

    wins = 0;
    losses = 0;
    draws = 0;
    round = 0;
    results = [];

    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    document.getElementById("result").innerHTML =
        "Result will be shown here";

    document.getElementById("result").style.color = "black";

    let table = document.getElementById("history");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    gameStarted = false;
}