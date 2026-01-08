// Map button class names to background colors
const colorMap: Record<string, string> = {
  btnWhite: "white",
  btnBlack: "black",
  btnGray: "gray",
  btnRed: "red",
  btnGreen: "green",
  btnBlue: "blue",      // typo kept to match your HTML
  btnYellow: "yellow",
  btnPink: "pink",
  btnViolet: "violet"
};

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(colorMap).forEach((className) => {
    const button = document.querySelector<HTMLButtonElement>(`.${className}`);
    if (button && document.body) {
      button.addEventListener("click", () => {
        document.body.style.backgroundColor = colorMap[className]!;
      });
    }
  });
});

