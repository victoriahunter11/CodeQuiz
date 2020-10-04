

var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var MAX_HIGH_SCORES = 5;

console.log("highScores");


finalScore.innerText = mostRecentScore;


username.addEventListener("keyup" , () => {
    console.log(username.value);
    saveScoreBtn.disabled =  !username.value;
});

saveHighScore =  e => {
    console.log("clicked save");
    e.preventDefault();

    var score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };

    highScores.push(score);

    highScores.sort( (a,b) =>  b.score - a.score);
       
        highScores.splice(5);
    

        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.assign('/');

    console.log(highScores);
};