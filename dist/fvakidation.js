const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMsg = document.getElementById("successMsg");
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "") {
        nameError.textContent = "Name cannot be empty";
        valid = false;
    }
    if (!emailRegex.test(email)) {
        emailError.textContent = "Enter a valid email address";
        valid = false;
    }
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    }
    if (valid) {
        successMsg.textContent = "Form submitted successfully.";
        form.reset();
        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
    }
});
export {};
