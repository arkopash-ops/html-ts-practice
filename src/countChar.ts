const addChar = document.querySelector("#addChar") as HTMLInputElement;
const countChar = document.querySelector("#countChar") as HTMLParagraphElement;

if (addChar && countChar) {
  addChar.addEventListener("input", () => {
    countChar.textContent = addChar.value.length.toString();
  });
} else {
  alert("HTML Element not found...");
}
