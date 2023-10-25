// Iteration 8: Making scoreboard functional
console.log(window.location.search)
let params = new URLSearchParams(window.location.search)

let score = params.get("score")
console.log("score: ", score)

let scoreboard = document.getElementById("score-board")
scoreboard.textContent = score;

let playAgain = document.getElementById("play-again-button")
playAgain.addEventListener('click', function() {
    window.location.href = "./game.html"
})