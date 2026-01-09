const watch = document.getElementById("watch") as HTMLDivElement;
const startBtn = document.getElementById("startWatch") as HTMLButtonElement;
const stopBtn = document.getElementById("stopwatch") as HTMLButtonElement;
const resetBtn = document.getElementById("resetWatch") as HTMLButtonElement;

let minutes: number = 0;
let seconds: number = 0;
let milliseconds: number = 0;
let interval: any = null;
let isRunning: boolean = false;

function updateDisplay() {
  const m: string = String(minutes).padStart(2, "0");
  const s: string = String(seconds).padStart(2, "0");
  const ms: string = String(milliseconds).padStart(2, "0");
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
