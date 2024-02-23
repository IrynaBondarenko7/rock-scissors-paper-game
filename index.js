console.log("Welcome to RPS GAME");
console.log("The game will start in a few seconds");

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! Both chose [" + playerSelection + "].";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return (
      "You win! [" + playerSelection + "] beats [" + computerSelection + "]."
    );
  } else {
    return (
      "You lose! [" + computerSelection + "] beats [" + playerSelection + "]."
    );
  }
}

function inputValidation() {
  let selection = prompt(`Input your choice! "Rock" "Paper" "Scissors"`);
  if (selection === null) {
    console.log("User canceled the game. 🥲");
    console.log("Refresh the page to start a new game");
    return null;
  }
  selection = selection.toLowerCase().trim();

  while (
    selection !== "rock" &&
    selection !== "paper" &&
    selection !== "scissors"
  ) {
    selection = prompt(
      `Wrong input, try again!🥴 Please enter "Rock" "Paper" "Scissors"`
    );
  }
  return selection;
}

function game() {
  let userWin = 0;
  let computerWin = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`** Round ${i + 1} **`);
    const playerSelection = inputValidation();

    if (playerSelection === null) {
      console.log("Game canceled.");
      return;
    }
    const computerSelection = computerPlay();
    console.log(
      `Your choice is ${playerSelection} and computer\'s choice is ${computerSelection}`
    );
    const resultLog = playRound(playerSelection, computerSelection);
    console.log(resultLog);

    if (resultLog.includes("You win!")) {
      userWin += 1;
    } else if (resultLog.includes("You lose!")) {
      computerWin += 1;
    } else if (resultLog.includes("It's a tie!")) {
      userWin += 1;
      computerWin += 1;
    }
  }

  finalResultDetermination(userWin, computerWin);

  console.log("Refresh the page to start a new game");
}

function finalResultDetermination(userResult, computerResult) {
  console.log(`>>>> Game score: ${userResult}:${computerResult} <<<<`);

  if (userResult > computerResult) {
    console.log(
      "%cYou won the GAME and saved the world 😀 You are a hero!",
      "color: green; font-size: 16px"
    );
  } else if (userResult < computerResult) {
    console.log(
      "%cOh no, the computer won 😈 and will now take over the world",
      "color: blue; font-size: 16px"
    );
  } else if (userResult === computerResult) {
    console.log("%cIt's a tie!", "color: orange; font-size: 16px");
  }
}

setTimeout(() => {
  game();
}, 4000);
