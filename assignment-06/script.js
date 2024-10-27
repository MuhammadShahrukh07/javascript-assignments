let start, timePass = 0;
let interval;
let isActive = false;

const display = document.querySelector('.display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

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
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
