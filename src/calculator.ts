const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const operation = document.getElementById("operation") as HTMLSelectElement;
const calculateForm = document.getElementById(
  "calculator-form"
) as HTMLFormElement;
const resultDisplay = document.getElementById("result") as HTMLHeadingElement;

if (calculateForm && num1 && num2 && operation && resultDisplay) {
  calculateForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    const operator = operation.value;
    let result: number;

    if (isNaN(number1) || isNaN(number2)) {
      resultDisplay.textContent = "Please enter valid numbers.";
      alert("Invalid input: Please enter valid numbers.");
      return;
    } else {
      switch (operator) {
        case "add":
          result = number1 + number2;
          break;
        case "subtract":
          result = number1 - number2;
          break;
        case "multiply":
          result = number1 * number2;
          break;
        case "divide":
          if (number2 === 0) {
            resultDisplay.textContent = "Cannot divide by zero.";
            alert("Error: Cannot divide by zero.");
            return;
          }
          result = number1 / number2;
          break;
        default:
          resultDisplay.textContent = "Invalid operator.";
          return;
      }
    }
    resultDisplay.textContent = `Result: ${result}`;
  });
}
