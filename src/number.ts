const count = document.getElementById("count") as HTMLHeadingElement;
const incre = document.getElementById("increment") as HTMLButtonElement;
const decre = document.getElementById("decrement") as HTMLButtonElement;
const generate = document.getElementById("generate") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;
const guess = document.getElementById("guess") as HTMLHeadingElement;

let counter: any = 0;
let randomNum: number = Math.floor(Math.random() * 10) + 1;

function updateCount() {
  count.textContent = counter;
}

incre.addEventListener("click", () => {
  if (counter < 10) counter++;
  updateCount();
});

decre.addEventListener("click", () => {
  if (counter > 1) counter--;
  updateCount();
});

generate.addEventListener("click", () => {
  if (counter < randomNum) {
    guess.textContent = `Too Low! the correct No. is ${randomNum}`;
    guess.style.color = "orange";
  } else if (counter > randomNum) {
    guess.textContent = `Too High! The correct No. is ${randomNum}`;
    guess.style.color = "red";
  } else {
    guess.textContent = `Correct! the No. is ${randomNum}`;
    guess.style.color = "green";
  }
});

reset.addEventListener("click", () => {
  counter = 0;
  randomNum = Math.floor(Math.random() * 10) + 1;
  updateCount();
  guess.textContent = "";
});

updateCount();
