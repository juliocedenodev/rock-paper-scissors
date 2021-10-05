let cpuWin = `You Lose this round`;
let playerWin = `You Win this round`; 
let draw = `It's a Tie!, try again`;

let playerWins = "You Win, Congratulations!";
let cpuWins = " You Lose, Too bad!";

let playerScore = 0;
let cpuScore = 0;
let drawScore = 0;

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

function cpu(selection)
{
    let options = ["rock", "paper", "scissors"]
    selection = options[Math.floor(Math.random() * options.length)]
    return selection;
}

function round(playerSelection, cpuSelection)
{
  if (cpuSelection === "rock" && playerSelection === "scissors" || 
      cpuSelection === "paper" && playerSelection === "rock" || 
      cpuSelection === "scissors" && playerSelection=== "paper") 
    {
      return cpuWin;
    }

  else if (playerSelection === "rock" && cpuSelection === "scissors" || 
           playerSelection === "paper" && cpuSelection === "rock" || 
           playerSelection === "scissors" && cpuSelection === "paper")
    {
      return playerWin; 
    }
    
  else if(playerSelection === cpuSelection)
    {
      return draw;
    }
}

function getScore(result)
{
  if (result == playerWin)
    {
      playerScore++;
    }
    else if (result == cpuWin)
    {
      cpuScore++;
    }
    else if (result == draw)
    {
      drawScore++;
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`CPU Score: ${cpuScore}`);
    console.log(`Draws: ${drawScore}`);
    
    let score =  `Player Score: ${playerScore}
    CPU Score: ${cpuScore}
    Draws: ${drawScore}`;
   
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = score;
    
    container.appendChild(content);


    if (playerScore === 5)
    {
      console.log(playerWins);
      const finalScore = document.querySelector('#finalScore');
      const win = document.createElement('div');
      win.classList.add('content');
      win.textContent = playerWins;
      finalScore.appendChild(win);

      return;
    }
    else if (cpuScore === 5)
    {
      const finalScore = document.querySelector('#finalScore');
      const wincpu = document.createElement('div');
      wincpu.classList.add('content');
      wincpu.textContent = cpuWins;
      finalScore.appendChild(wincpu);
      console.log(cpuWins);

      return;
    }
    document.getElementById("finalScore").innerHTML = "";
}

document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

function user()
{
  let playerSelection = this.id;
  let cpuSelection = cpu();
  let result = round(playerSelection, cpuSelection);
  console.log(result);
  
  const container = document.querySelector('#container');
  const desc = document.createElement('div');
  desc.classList.add('desc');
  desc.textContent = result;
  
  container.appendChild(desc);

  getScore(result);

  if (playerScore === 5 || cpuScore === 5) {
    playerScore = 0;
    cpuScore = 0;
    drawScore = 0;
    document.getElementById("container").innerHTML = "";
    return;
  }
  
}
