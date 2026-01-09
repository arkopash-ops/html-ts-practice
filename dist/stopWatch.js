const watch = document.getElementById("watch");
const startBtn = document.getElementById("startWatch");
const stopBtn = document.getElementById("stopwatch");
const resetBtn = document.getElementById("resetWatch");
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;
function updateDisplay() {
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");
    const ms = String(milliseconds).padStart(2, "0");
    watch.textContent = `${m}:${s}:${ms}`;
}
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }
}
function stopTimer() {
    clearInterval(interval);
    isRunning = false;
}
function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
export {};
