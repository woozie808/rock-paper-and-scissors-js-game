function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getRPSChoice(number) {
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else if (number === 2) {
    return "scissors";
  }
}

function validateUserInput(input) {
  const validChoice = ["rock", "paper", "scissors"];
  const userInput = input.toLowerCase();

  if (!validChoice.includes(userInput)) {
    alert("entrada invalida, porfavor elija rock, paper , o scissors");
  }
  return userInput;
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    alert("It's a draw!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("You Win!");
  } else {
    alert("You Lose!");
  }
}

try {
  const userInput = prompt("elige entre rock, paper o scissors");

  const userChoice = validateUserInput(userInput);

  const randomNumber = getRandomNumber();
  const computerChoice = getRPSChoice(randomNumber);

  alert(`tu eleccion es ${userChoice}`);
  alert(`la eleccion de la PC es ${computerChoice}`);

  const result = determineWinner(userChoice, computerChoice);
  console.log(result);
} catch (error) {
  console.error(error.message);
}
