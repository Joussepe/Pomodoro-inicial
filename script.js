let workTime = 25 * 60; // 25 minutos en segundos
let breakTime = 5 * 60; // 5 minutos en segundos
let timeLeft = workTime;
let timerInterval = null;
let isWorking = true;

const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function startTimer() {
    if (!timerInterval){
        timerInterval = setInterval(updateTimer, 1000);
        startButton.textContent = 'En marcha...'
        startButton.disabled = true;
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    isWorking = true;
    timeLeft = workTime;
    updateDisplay();
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
        isWorking = !isWorking;
        timeLeft = isWorking ? workTime : breakTime;
        startTimer();
    }
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    statusDisplay.textContent = isWorking ? 'Tiempo de Trabajo' : 'Tiempo de Descanso';
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);