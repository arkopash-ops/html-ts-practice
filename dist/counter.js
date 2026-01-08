const count = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
let currentCount = 0;
if (count && incrementButton && decrementButton) {
    const updateCountDisplay = () => {
        count.textContent = `${currentCount}`;
    };
    incrementButton.addEventListener("click", () => {
        currentCount++;
        updateCountDisplay();
    });
    decrementButton.addEventListener("click", () => {
        if (currentCount === 0)
            return;
        currentCount--;
        updateCountDisplay();
    });
}
export {};
