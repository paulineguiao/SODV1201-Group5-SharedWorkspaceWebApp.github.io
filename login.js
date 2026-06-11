// Get the form
const form = document.getElementById("loginForm");

form.onsubmit = function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.innerHTML = "";

    // Empty input check
    if (email === "" || password === "") {
        errorMsg.innerHTML = "Please fill in all fields";
        return;
    }

    // Find user in data.js
    let foundUser = users.find(u => 
        u.email === email && u.password === password
    );

    if (!foundUser) {
        errorMsg.innerHTML = "Invalid email or password";
        return;
    }

    // SUCCESSFUL LOGIN
    alert("Login successful!");

    // Save BOTH role and full user object
    localStorage.setItem("role", foundUser.role);
    localStorage.setItem("user", JSON.stringify(foundUser));

    // Redirect based on role
    if (foundUser.role === "owner") {
        window.location.href = "owner-dashboard.html";
    } 
    else if (foundUser.role === "coworker") {
        window.location.href = "searchworkspace.html";
    }
};

// Navigation
function goToSignup() {
    window.location.href = "registrationpage.html";
}


let storedUsers = JSON.parse(localStorage.getItem("users")) || users;

let foundUser = storedUsers.find(u => 
    u.email === email && u.password === password
);
