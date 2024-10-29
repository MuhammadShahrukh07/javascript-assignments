let start, timePass = 0;
let interval;
let isActive = false;
let lapCount = 0;

const display = document.querySelector('.display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapContainer = document.querySelector('.lap-container');

function stopWatchDisplay() {
  const time = new Date(timePass);
  const hours = String(time.getUTCHours()).padStart(2, '0');
  const minutes = String(time.getUTCMinutes()).padStart(2, '0');
  const seconds = String(time.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
  
  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function startTimer() {
  if (!isActive) {
    isActive = true;
    start = Date.now() - timePass;
    interval = setInterval(function() {
      timePass = Date.now() - start;
      stopWatchDisplay();
    }, 10);
  }
}

function stopTimer() {
  clearInterval(interval);
  isActive = false;
}

function resetTimer() {
  clearInterval(interval);
  isActive = false;
  timePass = 0;
  stopWatchDisplay();
  lapContainer.innerHTML = ''; // Clear lap times
  lapCount = 0;
}

function recordLap() {
  if (isActive) {
    lapCount++;
    const lapTime = display.textContent;
    const lapElement = document.createElement('div');
    lapElement.classList.add('lap');
    lapElement.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapContainer.appendChild(lapElement);
  }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);
