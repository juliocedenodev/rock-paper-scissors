let cpuWin = `You Lose this round`;
let playerWin =  `You Win this round`; 
let draw = `It's a Tie!, try again`;
let playerWins = "You Win, Congratulations!";
let cpuWins = " You Lose, Too bad!";
let playerScore = 0;
let cpuScore = 0;
let drawScore = 0;

function cpu(selection)
{
    let options = ["rock", "paper", "scissors"]
    selection= options[Math.floor(Math.random() * options.length)]
    return selection;
}

function round(playerSelection, cpuSelection)
{
  if (cpuSelection === "rock" && playerSelection === "scissors" || cpuSelection === "paper" && playerSelection === "rock" || cpuSelection === "scissors" && playerSelection=== "paper" ) {
      return cpuWin;
  }
  else if(playerSelection=== "rock" && cpuSelection === "scissors" || playerSelection=== "paper" && cpuSelection === "rock" || playerSelection=== "scissors" && cpuSelection === "paper")
  {
    return playerWin; 
  }
  else if(playerSelection === cpuSelection)
  {
     return draw;
  }
}


  for (let i = 0; i< 1000; i++) {
 
  let playerSelection = prompt("Make your choice:").toLowerCase();
  let cpuSelection = cpu();
  result = round(playerSelection, cpuSelection);
  console.log(result);

  if(result == playerWin)
  {
    playerScore++;
    
  }
  else if(result == cpuWin)
  {
    cpuScore++;
    
  }
  else if(result == draw)
  {
    drawScore++;
  }

  console.log(`Player Score: ${playerScore}`);
  console.log(`CPU Score: ${cpuScore}`);
  console.log(`Draws: ${drawScore}`);

  if(playerScore === 5)
  {
    console.log(playerWins);
    break;
  }
  else if(cpuScore  === 5)
  {
    console.log(cpuWins);
    break;
  }

}


