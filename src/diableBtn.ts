const addText = document.querySelector("#addText") as HTMLInputElement;
const btnDisable = document.querySelector("#btnDisable") as HTMLButtonElement;
const content = document.querySelector("#content") as HTMLParagraphElement;

if (addText && btnDisable && content) {
  btnDisable.disabled = true;

  addText.addEventListener("input", () => {
    btnDisable.disabled = addText.value.trim() === "";
  });

  btnDisable.addEventListener("click", (e) => {
    e.preventDefault();
    content.textContent = addText.value;
  });
} else {
  alert("Can not find HTML Element");
}
