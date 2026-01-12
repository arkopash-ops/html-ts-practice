const addChar = document.querySelector("#addChar") as HTMLInputElement;
const countChar = document.querySelector("#countChar") as HTMLParagraphElement;

addChar.addEventListener("input", () => {
  countChar.textContent = addChar.value.length.toString();
});
