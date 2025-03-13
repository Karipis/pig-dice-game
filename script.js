const btn_roll = document.getElementById('btn-roll');
const title = document.getElementById('title');
const die = document.getElementById('die');
const btn_save = document.getElementById('btn-save');
const player1_score = document.getElementById('player1-score');
const player2_score = document.getElementById('player2-score');
const player1_TempScore = document.getElementById('player1-temp-score');
const player2_TempScore = document.getElementById('player2-temp-score');
const player1_img = document.getElementById('player1-img');
const player2_img = document.getElementById('player2-img');
const diceSound = new Audio('dice-sound.mp3');

var player_1_points = 0;
var player_2_points = 0;
var player_1_TempPoints = 0;
var player_2_TempPoints = 0;
var currentPlayer = 1;
var currentDie = 0;

btn_roll.addEventListener('click', function () {
    diceSound.play();
    var rand = randomNumber();
    randomDie(rand, die);

    setTimeout(() => {
        die.classList.remove('dice-roll');
    }, 1200);

    if (currentPlayer === 1) {
        if (rand != 1) {
            player_1_TempPoints += rand;
        } else {
            player_1_TempPoints = 0;
            saveScore();
        }

        player1_TempScore.innerHTML = "Round Points: " + player_1_TempPoints;


    } else {
        if (rand != 1) {
            player_2_TempPoints += rand;
        } else {
            player_2_TempPoints = 0;
            saveScore();
        }

        player2_TempScore.innerHTML = "Round Points: " + player_2_TempPoints;

    }


})


btn_save.addEventListener('click', function () {
    saveScore();
});


function randomNumber() {
    let random = Math.floor(Math.random() * 6) + 1;
    return random;

}

function randomDie(number, die) {
    diceSound.play;
    switch (number) {
        case 1:
            die.classList = 'fa-solid fa-dice-one die dice-roll';
            break;
        case 2:
            die.classList = 'fa-solid fa-dice-two die dice-roll';
            break;
        case 3:
            die.classList = 'fa-solid fa-dice-three die dice-roll';
            break;
        case 4:
            die.classList = 'fa-solid fa-dice-four die dice-roll';
            break;
        case 5:
            die.classList = 'fa-solid fa-dice-five die dice-roll';
            break;
        case 6:
            die.classList = 'fa-solid fa-dice-six die dice-roll';
            break;
    }

}

function saveScore() {
    if (currentPlayer === 1) {
        player_1_points += player_1_TempPoints;
        player1_score.innerHTML = "Round Points: " + player_1_points + "/100";
        player1_TempScore.innerHTML = "Round Points: 0";
        player_1_TempPoints = 0;
        currentPlayer = 2;
    } else {
        currentPlayer = 1;
        player_2_points += player_2_TempPoints;
        player2_score.innerHTML = "Round Points: " + player_2_points + "/100";
        player2_TempScore.innerHTML = "Round Points: 0";
        player_2_TempPoints = 0;
    }
    checkWinner();
    player1_img.classList.toggle('current');
    player2_img.classList.toggle('current');
}

function checkWinner(){
    if(player_1_points >= 100){
        title.innerHTML = 'Congratulations! User 1 won the game!';
        setTimeout( () => {
            restartGame();
        },5000)
    }

    if(player_2_points >= 100){
        title.innerHTML = 'Congratulations! User 2 won the game!';
        setTimeout( () => {
            restartGame();
        },5000)
    }
    
    
}

function restartGame(){
    console.log('Restarted');
    player_1_points = 0;
    player_2_points = 0;
    player_1_TempPoints = 0;
    player_2_TempPoints = 0;
    currentPlayer = 1;
    currentDie = 0;
    player1_score.innerHTML = "Round Points: " + player_1_points + "/100";
    player1_TempScore.innerHTML = "Round Points: 0";
    player2_score.innerHTML = "Round Points: " + player_2_points + "/100";
    player2_TempScore.innerHTML = "Round Points: 0";
    title.innerHTML = 'The game of pig';
    player1_img.classList.add('current');
    player2_img.classList.remove('current');
}