const addChar = document.querySelector("#addChar") as HTMLInputElement;
const content = document.querySelector("#content") as HTMLParagraphElement;

if (addChar && content) {
  addChar.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      content.textContent = addChar.value;
    }
  });
} else {
  alert("HTML Element not found...");
}
