// fake database (users array)
let users = [
    { email: "admin@gmail.com", password: "1234" },
    { email: "user@gmail.com", password: "abcd" }
];

let form = document.getElementById("loginForm");

form.onsubmit = function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("errorMsg");

    // reset message
    errorMsg.innerHTML = "";

    // check empty input
    if (email == "" || password == "") {
        errorMsg.innerHTML = "Please fill in all fields";
        return;
    }

    let loginSuccess = false;

    // check users array
    for (let i = 0; i < users.length; i++) {
        if (email == users[i].email && password == users[i].password) {
            loginSuccess = true;
        }
    }

    if (loginSuccess == true) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        errorMsg.innerHTML = "Invalid email or password";
    }
};