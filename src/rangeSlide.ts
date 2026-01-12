const range = document.querySelector("#range") as HTMLInputElement;
const value = document.querySelector("#value") as HTMLSpanElement;
const body = document.body as HTMLBodyElement;

if (range && value) {
  range.addEventListener("input", () => {
    const opacity = parseFloat(range.value).toFixed(2);
    body.style.backgroundColor = `rgba(0,0,0,${opacity})`;
    value.textContent = opacity;
  });
} else {
  alert("HTML Element not Found...");
}
