let users = [];

function registerUser() {

    // get elements
    let fullName = document.getElementById("fullName");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let owner = document.getElementById("owner");
    let coworker = document.getElementById("coworker");

    let isValid = true;

    // reset borders first
    fullName.style.border = "";
    phone.style.border = "";
    email.style.border = "";
    password.style.border = "";
    owner.style.outline = "";
    coworker.style.outline = "";

    // validation
    if (fullName.value === "") {
        fullName.style.border = "1px solid red";
        isValid = false;
    }

    if (phone.value === "") {
        phone.style.border = "1px solid red";
        isValid = false;
    }

    if (email.value === "") {
        email.style.border = "1px solid red";
        isValid = false;
    }

    if (password.value === "") {
        password.style.border = "1px solid red";
        isValid = false;
    }

    // role validation
    let role = "";
    if (owner.checked) {
        role = "Owner";
    } else if (coworker.checked) {
        role = "Coworker";
    } else {
        // highlight radio buttons
        owner.style.outline = "2px solid red";
        coworker.style.outline = "2px solid red";
        isValid = false;
    }

    // stop if invalid
    if (!isValid) {
        return;
    }

    // create user object
    let newUser = {
        fullName: fullName.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
        role: role
    };

    users.push(newUser);

    console.log("User registered:", newUser);
    console.log("All users:", users);

    alert("Account created successfully!");

   
    if (role === "Owner") {
        window.location.href = "owner-dashboard.html";
    } else {
        window.location.href = "searchworkspace.html";
    }
}
