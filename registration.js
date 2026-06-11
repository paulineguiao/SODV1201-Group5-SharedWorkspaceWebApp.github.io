// Load existing users from localStorage OR fallback to data.js
let storedUsers = JSON.parse(localStorage.getItem("users")) || users;

// Save back to localStorage (initial sync)
localStorage.setItem("users", JSON.stringify(storedUsers));

function registerUser() {

    let fullName = document.getElementById("fullName").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let owner = document.getElementById("owner");
    let coworker = document.getElementById("coworker");

    let role = owner.checked ? "owner" : coworker.checked ? "coworker" : "";

    // Validation
    if (!fullName || !phone || !email || !password || !role) {
        alert("Please fill in all fields.");
        return;
    }

    // Create new user in SAME format as data.js
    let newUser = {
        id: Date.now(),
        username: email.split("@")[0], // simple username
        password: password,
        role: role,
        name: fullName,
        email: email,
        phone: phone
    };

    // Add to database
    storedUsers.push(newUser);

    // Save updated list
    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("Account created successfully!");

    // Auto-login
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("role", newUser.role);

    // Redirect
    if (role === "owner") {
        window.location.href = "owner-dashboard.html";
    } else {
        window.location.href = "searchworkspace.html";
    }
}
