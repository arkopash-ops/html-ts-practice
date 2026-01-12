const addChar = document.querySelector("#addChar");
const countChar = document.querySelector("#countChar");
if (addChar && countChar) {
    addChar.addEventListener("input", () => {
        countChar.textContent = addChar.value.length.toString();
    });
}
else {
    alert("HTML Element not found...");
}
export {};
