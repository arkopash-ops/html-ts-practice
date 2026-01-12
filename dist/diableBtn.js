const addText = document.querySelector("#addText");
const btnDisable = document.querySelector("#btnDisable");
const content = document.querySelector("#content");
if (addText && btnDisable && content) {
    btnDisable.disabled = true;
    addText.addEventListener("input", () => {
        btnDisable.disabled = addText.value.trim() === "";
    });
    btnDisable.addEventListener("click", (e) => {
        e.preventDefault();
        content.textContent = addText.value;
    });
}
else {
    alert("Can not find HTML Element");
}
export {};
