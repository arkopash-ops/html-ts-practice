const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");
textInput.addEventListener("input", () => {
    preview.textContent = textInput.value;
    preview.style.color = textInput.value.length === 100 ? "red" : "black";
});
export {};
