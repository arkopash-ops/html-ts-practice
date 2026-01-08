const ageInput = document.getElementById("ageInput") as HTMLInputElement | null;

const checkAgeBtn = document.getElementById(
  "checkAgeBtn"
) as HTMLButtonElement | null;

const result = document.getElementById("result") as HTMLHeadingElement | null;

if (ageInput && checkAgeBtn && result) {
  checkAgeBtn.addEventListener("click", () => {
    const birthDateStr = ageInput.value;

    if (!birthDateStr) {
      alert("Please enter your birth date.");
      return;
    }

    const birthDate = new Date(birthDateStr);
    const today = new Date();

    let age: number = today.getFullYear() - birthDate.getFullYear();
    const monthDiff: number = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age < 13) {
      result.textContent = "Child";
    } else if (age >= 13 && age < 20) {
      result.textContent = "Teen";
    } else {
      result.textContent = "Adult";
    }
  });
}
