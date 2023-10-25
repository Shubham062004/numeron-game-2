// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1Box = document.getElementById("number1");
let number2Box = document.getElementById("number2");

let number1 = Math.round(Math.random()*100)
let number2 = Math.round(Math.random()*100)

number1Box.textContent = number1;
number2Box.textContent = number2;

// Iteration 3: Creating variables required to make the game functional
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mul = document.getElementById("mul");
let divide = document.getElementById("divide");
let modulus = document.getElementById("modulus");
let timerBox = document.getElementById("timer");
let score = 0;
let interval;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3Box = document.getElementById("number3");
let number3;

// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    number1 = Math.round(Math.random()*100)
    number2 = Math.round(Math.random()*100)

    let operator = Math.ceil(Math.random()*5);
    number2Box.textContent = number2;
    number1Box.textContent = number1;

    // let operator = 1;
    switch(operator){
        case 1 : number3 = number2 + number1; break;
        case 2 : number3 = number2 - number1; break;
        case 3 : number3 = number2 * number1; break;
        case 4 : number3 = Math.floor(number1 / number2); break;
        case 5 : number3 = number2 % number1; break;
    }

    number3Box.textContent = number3;

    startTimer()

}

randomise()

// Iteration 6: Making the Operators (button) functional
plus.onclick = () => {
    if(number1 + number2 == number3){
        score++
        randomise()
        console.log("score: ",score);
    }else{
        gameOver();
    }
}

minus.onclick = () => {
    if(number2 - number1 == number3){
        score++
        randomise()
        console.log("score: ",score);
    }else{
        gameOver();
    }
}

mul.onclick = () => {
    if(number1 * number2 == number3){
        score++
        randomise()
        console.log("score: ",score);
    }else{
        gameOver();
    }
}

divide.onclick = () => {
    if(number1 / number2 == number3){
        score++
        randomise()
        console.log("score: ",score);
    }else{
        gameOver();
    }
}

modulus.onclick = () => {
    if(number1 % number2 == number3){
        score++
        randomise()
        console.log("score: ",score);
    }else{
        gameOver();
    }
}

function gameOver(){
    window.location.href = `./gameover.html?score=${score}`
}

// Iteration 7: Making Timer functional

function startTimer(){
    let time = 20;
    timerBox.textContent = time;
    clearInterval(interval)
    interval = setInterval(()=>{
        time--;
        timerBox.textContent = time;
        if(time == 0){
            gameOver()
        }
    },1000);
}