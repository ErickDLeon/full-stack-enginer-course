//Arrow Function that takes user choice 
const getUserChoise = userInput => {
  userInput = userInput.toLowerCase();

  switch(userInput) {
    case 'rock':
    case 'paper':
    case 'scissors':
    case 'bomb':
    return userInput;
    default:
    console.log('error');
    break;
  }

};

//Arrow Function that return random choice 
const getComputerChoice = () => {
  const number = Math.floor(Math.random()*3);

    switch(number) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }

};

// Determinate a winner 
const determineWinner = (userChoice, computerChoice) => {
  
  if(userChoice === 'bomb') {
    return `the user won`;
  }
  
  if(userChoice === computerChoice) {
    return `it's a tie`;
  }

  if(userChoice === 'rock')
  {
    if(computerChoice === 'paper') {
      return `the computer won`;
    } else {
      return `the user won`;
    }
  }

  if(userChoice === 'paper')
  {
    if(computerChoice === 'scissors') {
      return `the computer won`;
    } else {
      return `the user won`;
    }
  }

  if(userChoice === 'scissors')
  {
    if(computerChoice === 'rock') {
      return `the computer won`;
    } else {
      return `the user won`;
    }
  }

};

// funtion for play the game
function playGame() {
  let userChoice = getUserChoise('bomb');
  let computerChoice = getComputerChoice();

  console.log(`user: ${userChoice} - computer: ${computerChoice} = ${determineWinner(userChoice, computerChoice)}`);
}

playGame();