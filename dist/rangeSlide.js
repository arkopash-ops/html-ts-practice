const range = document.querySelector("#range");
const value = document.querySelector("#value");
const body = document.body;
if (range && value) {
    range.addEventListener("input", () => {
        const opacity = parseFloat(range.value).toFixed(2);
        body.style.backgroundColor = `rgba(0,0,0,${opacity})`;
        value.textContent = opacity;
    });
}
else {
    alert("HTML Element not Found...");
}
export {};
