const count = document.getElementById("count");
const incre = document.getElementById("increment");
const decre = document.getElementById("decrement");
const generate = document.getElementById("generate");
const reset = document.getElementById("reset");
const guess = document.getElementById("guess");
let counter = 0;
let randomNum = Math.floor(Math.random() * 10) + 1;
function updateCount() {
    count.textContent = counter;
}
incre.addEventListener("click", () => {
    if (counter < 10)
        counter++;
    updateCount();
});
decre.addEventListener("click", () => {
    if (counter > 1)
        counter--;
    updateCount();
});
generate.addEventListener("click", () => {
    if (counter < randomNum) {
        guess.textContent = `Too Low! the correct No. is ${randomNum}`;
        guess.style.color = "orange";
    }
    else if (counter > randomNum) {
        guess.textContent = `Too High! The correct No. is ${randomNum}`;
        guess.style.color = "red";
    }
    else {
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
export {};
