const title = document.getElementById("title");
const input = document.getElementById("input");
const button = document.getElementById("button");
if (title && input && button) {
    button.addEventListener("click", () => {
        const name = input.value.trim();
        if (name) {
            title.textContent = `Hello, ${name}!`;
            title.style.color = "green";
            title.style.fontSize = "2em";
            input.value = "";
        }
        else {
            title.textContent = "Please enter your name.";
            title.style.color = "red";
            title.style.fontSize = "1.5em";
        }
    });
}
export {};
