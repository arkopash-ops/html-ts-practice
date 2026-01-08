const textInput = document.getElementById("textInput") as HTMLInputElement;
const preview = document.getElementById("preview") as HTMLParagraphElement;

textInput.addEventListener("input", () => {
  preview.textContent = textInput.value;
  preview.style.color = textInput.value.length === 100 ? "red" : "black";
});

export {};
