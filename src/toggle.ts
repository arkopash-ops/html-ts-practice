const button = document.getElementById("toggleThemeBtn") as HTMLButtonElement;

const lightTheme = {
  backgroundColor: "white",
  color: "black",
  buttonText: "Switch to Dark Theme",
};

const darkTheme = {
  backgroundColor: "black",
  color: "white",
  buttonText: "Switch to Light Theme",
};

let isLightTheme = true;

function applyTheme(theme: {
  backgroundColor: string;
  color: string;
  buttonText: string;
}) {
  document.body.style.backgroundColor = theme.backgroundColor;
  document.body.style.color = theme.color;
  button.textContent = theme.buttonText;
}

button.addEventListener("click", () => {
  if (isLightTheme) {
    applyTheme(darkTheme);
  } else {
    applyTheme(lightTheme);
  }
  isLightTheme = !isLightTheme;
});

applyTheme(lightTheme);
