// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

const num1Holder = document.getElementById("number1");
const num2Holder = document.getElementById("number2");
const answer = document.getElementById("number3");

const btns=document.querySelectorAll('.btns')

const timer = document.getElementById("timer");

let score=0,num1,num2,num3,operator;

randomise()

function randomise() {
    num1 = Math.floor(1+Math.random() * 100);
    num2 = Math.floor(1+Math.random() * 100);
   
    

// Iteration 3: Creating variables required to make the game functional
num1Holder.innerText = num1;
num2Holder.innerText = num2;
operator = Math.floor(Math.random() * 5);
    console.log(operator);
    
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
switch (operator) {
    case 0:
      num3 = num1 + num2;
      break;
    case 1:
      num3 = num1 - num2;
      break;
    case 2:
      num3 = num1 * num2;
      break;
    case 3:
      num3 = (num1 / num2);
      break;
    case 4:
      num3 = num1 % num2;
      break;
  }
  answer.innerText = num3.toFixed(1);
}
// Iteration 5: Creating a randomise function to make the game functional
for (let i=0;i<5;i++) {
    btns[i].onclick=()=>{
        if (i==operator) {
            score++;
            localStorage.setItem('score',score)
            randomise()
            resetTimer()
        }
        else gameOver()
    }
}
// Iteration 6: Making the Operators (button) functional
function gameOver() {
    window.open("gameover.html","_self")
}
// Iteration 7: Making Timer functional

let time=20;

setInterval(()=>{
    if (time==0) {
        gameOver()
        return;
    }
    timer.innerText=time;
    time--;
},1000)

function resetTimer() {
    time=20;
}