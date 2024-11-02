const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const gameScreen = document.getElementById('game-screen');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const target = document.getElementById('target');
const reactionTimeElement = document.getElementById('reaction-time');

let startTime, endTime, timeout;

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
target.addEventListener('click', recordReaction);

function startGame() {
    startScreen.classList.add('hide');
    gameScreen.classList.remove('hide');
    showTarget();
}

function showTarget() {
    const randomTime = Math.floor(Math.random() * 3000) + 2000;
    timeout = setTimeout(() => {
        const x = Math.random() * (window.innerWidth - 50);
        const y = Math.random() * (window.innerHeight - 50);
        target.style.left = `${x}px`;
        target.style.top = `${y}px`;
        target.classList.remove('hide');
        startTime = new Date().getTime();
    }, randomTime);
}

function recordReaction() {
    endTime = new Date().getTime();
    const reactionTime = endTime - startTime;
    reactionTimeElement.innerText = reactionTime;
    target.classList.add('hide');
    gameScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    clearTimeout(timeout);
}

function restartGame() {
    resultScreen.classList.add('hide');
    startScreen.classList.remove('hide');
}

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});