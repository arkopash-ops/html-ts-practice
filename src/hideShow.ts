const btn = document.getElementById("btn") as HTMLButtonElement;
const text = document.getElementById("text") as HTMLParagraphElement;

if (btn && text) {
  btn.addEventListener("click", () => {
    if (text.style.display === "none") {
      text.style.display = "block";
      btn.textContent = "Hide";
    } else {
      text.style.display = "none";
      btn.textContent = "Show";
    }
  });
}
