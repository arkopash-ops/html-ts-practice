const addChar = document.querySelector("#addChar");
const countChar = document.querySelector("#countChar");
addChar.addEventListener("input", () => {
    countChar.textContent = addChar.value.length.toString();
});
export {};
