const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");
const correctPassword = "123456";
let attempts = 0;
const maxAttempts = 3;
loginBtn.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        message.style.color = "green";
        message.textContent = "Login successful!";
        attempts = 0;
        passwordInput.value = "";
    }
    else {
        attempts++;
        message.style.color = "red";
        message.textContent = `Wrong password. Attempt ${attempts} of ${maxAttempts}.`;
        if (attempts >= maxAttempts) {
            loginBtn.disabled = true;
            message.textContent = `Too many attempts! Try again in 10 seconds.`;
            setTimeout(() => {
                loginBtn.disabled = false;
                attempts = 0;
                message.textContent = "";
            }, 10000);
        }
        passwordInput.textContent = "";
    }
});
export {};
