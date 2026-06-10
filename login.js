// fake database (users array)
let users = [
    { email: "admin@gmail.com", password: "1234", role: "owner" },
    { email: "user@gmail.com", password: "abcd", role: "coworker" }
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
     let foundUser = null;

    // check users array
    for (let i = 0; i < users.length; i++) {
        if (email == users[i].email && password == users[i].password) {
            loginSuccess = true;
            foundUser = users[i];
        }
    }

    if (loginSuccess == true) {
        alert("Login successful!");

        localStorage.setItem("role", foundUser.role);

        if (foundUser.role === "owner") {
            window.location.href = "owner-dashboard.html";
        } else if (foundUser.role === "coworker") {
            window.location.href = "searchworkspace.html";
        }

    } else {
        errorMsg.innerHTML = "Invalid email or password";
    }

};

function goToSignup(){
    window.location.href="registrationpage.html";
}
