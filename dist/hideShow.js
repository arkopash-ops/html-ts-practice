const btn = document.getElementById("btn");
const text = document.getElementById("text");
if (btn && text) {
    btn.addEventListener("click", () => {
        if (text.style.display === "none") {
            text.style.display = "block";
            btn.textContent = "Hide";
        }
        else {
            text.style.display = "none";
            btn.textContent = "Show";
        }
    });
}
export {};
