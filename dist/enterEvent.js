const addChar = document.querySelector("#addChar");
const content = document.querySelector("#content");
if (addChar && content) {
    addChar.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            e.preventDefault();
            content.textContent = addChar.value;
        }
    });
}
else {
    alert("HTML Element not found...");
}
export {};
