const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const LIZARD = 'LIZARD';
const SPOCK = 'SPOCK';
const BOMB = 'BOMB';

const getUserChoice = userInput => {
  userInput = userInput.toUpperCase();
  if (!isValid(userInput)) {
    return console.log('Wrong input');
  }
  return userInput;
};

const isValid = userInput => {
  const validWords = [ROCK, PAPER, SCISSORS, LIZARD, SPOCK, BOMB];
  return validWords.includes(userInput);
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 5);
  switch (randomNumber) {
    case 0 : return ROCK;
    case 1 : return PAPER;
    case 2 : return SCISSORS;
    case 3 : return LIZARD;
    case 4 : return SPOCK;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (!userChoice) {
    return;
  }
  console.log(`${userChoice} vs ${computerChoice}`); // debug

  const outcomes = {
    [SCISSORS]: [PAPER, LIZARD], // Scissors cuts Paper & decapitates Lizard
    [PAPER]: [ROCK, SPOCK], // Paper covers Rock & disproves Spock
    [ROCK]: [SCISSORS, LIZARD], // Rock crushes Scissors & Lizard
    [LIZARD]: [SPOCK, PAPER], // Lizard poisons Spock & eats Paper
    [SPOCK]: [SCISSORS, ROCK], // Spock smashes Scissors & vaporises Rock
    [BOMB]: [BOMB] // Cheat code
  };

  if (userChoice === computerChoice) {
    return console.log('Its a Tie');
  }

  if (outcomes[computerChoice].includes(userChoice)) {
    return console.log('Computer won');
  }

  console.log('User won');
}

const playGame = () => {
  const userChoice = getUserChoice('Bomb');
  const computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
}

playGame();
