const count = document.getElementById("count") as HTMLHeadElement;

const incrementButton = document.getElementById(
  "increment"
) as HTMLButtonElement;

const decrementButton = document.getElementById(
  "decrement"
) as HTMLButtonElement;

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
    if(currentCount === 0) return;
    currentCount--;
    updateCountDisplay();
  });
}
