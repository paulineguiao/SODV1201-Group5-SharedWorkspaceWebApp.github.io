document.getElementById("loginForm").addEventListener("submit", login);

function login(e)
{
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u =>
        u.username === username &&
        u.password === password
    );

    if(user)
    {
        localStorage.setItem("user", JSON.stringify(user));

        if(user.role === "owner")
        {
            window.location.href = "owner-dashboard.html";
        }
        else if(user.role === "coworker")
        {
            window.location.href = "coworker-dashboard.html";
        }
    }
    else
    {
        document.getElementById("message").textContent =
            "Invalid login";
    }
}