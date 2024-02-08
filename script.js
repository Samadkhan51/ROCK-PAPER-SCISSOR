let choices = document.querySelectorAll('button');
let disp = document.getElementById('disp');
let display = document.getElementById('display');
let reset = document.getElementById('reset');
let userScore =0;
let compScore =0;

choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
    reset.style.display = "block";
    let userChoice = choice.value;
    playGame(userChoice);
  });
})

reset.addEventListener('click', ()=>{
  location.reload();
});

const playGame = (userChoice) =>{
 let comp = computerChoice();
let user = userChoice;

const drawGame = ()=>{
  console.log("Game was Draw");
  disp.innerText = user+" Draws " + comp;
  display.style.width = "300px";
  display.style.backgroundColor = "#08182bff";
}


let userScoreDisplay = document.getElementById('user-Score');
let compScoreDisplay = document.getElementById('comp-Score');
const showWinner = (userWin,user,comp)=>{
   if(userWin)
   {
    userScore++;
    userScoreDisplay.innerText = userScore;
    console.log("you wins");
    disp.innerText = "you wins "+user+" beats " + comp;
    display.style.backgroundColor = "green";
   }
   else{9
    compScore++;
    compScoreDisplay.innerText = compScore;
    console.log("computer wins");
    disp.innerText = "You lose,Computer wins "+comp+" beats " +user;
    display.style.backgroundColor = "red";
   }
  };

if(comp ==  user)
{
 drawGame();
}
else{ 
  let userWin = true;
if(user == "rock" && comp=="scissors")
{
  showWinner(userWin,user,comp);
}
else if(comp == "rock" && user=="scissors")
{
  userWin = false;
  showWinner(userWin,user,comp);
}
else if(user == "paper" && comp == "rock")
{
  showWinner(userWin,user,comp);
  
}
else if(comp == "paper" && user == "rock")
{
  userWin = false;
  showWinner(userWin,user,comp);
}
else if(user == "scissors" && comp == "paper")
{
  showWinner(userWin,user,comp);
  
}
else if(comp == "scissors" && user == "paper")
{
  userWin = false;
  showWinner(userWin,user,comp);
}
}
}

const computerChoice = ()=>{
  const compChoice = ["rock","paper","scissors"];
  let num = Math.floor(Math.random() * 3);
  // console.log("This is computer choice "+compChoice[num]);
  let final = compChoice[num];
  return final;
}