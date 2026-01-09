const username = document.getElementById("username");
const password = document.getElementById("password");
const loginform = document.querySelector("form");
if (username && password && loginform) {
    loginform.addEventListener("submit", function (e) {
        if (username.value.trim() === "" && password.value.trim() === "") {
            e.preventDefault();
            alert("Please fill in both username and password.");
        }
        else if (username.value.trim() === "") {
            e.preventDefault();
            alert("Username cannot be empty.");
        }
        else if (password.value.trim() === "") {
            e.preventDefault();
            alert("Password cannot be empty.");
        }
        else if (password.value.length < 6) {
            e.preventDefault();
            alert("Password must be at least 6 characters long.");
        }
        else {
            e.preventDefault();
            alert("Login successful!");
        }
    });
}
export {};
