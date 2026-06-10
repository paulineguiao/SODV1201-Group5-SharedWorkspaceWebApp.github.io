function goHome() {

    const role = localStorage.getItem("role");
    alert("Returning to Home Page");

     if (role === "coworker") {
        window.location.href = "searchworkspace.html";
    } 
    else if (role === "owner") {
        window.location.href = "owner-dashboard.html";
    } 
    else {
        // fallback if role is missing or corrupted
        window.location.href = "index.html";
    }
}

function logout() {
    alert("Logging out...");
    window.location.href = "index.html";
}

function submitReview() {

    const reviewText = document.getElementById("reviewText").value;

    if (reviewText.trim() === "") {
        alert("Please write a review first.");
        return;
    }

    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    reviewCard.innerHTML = `
        <span>"${reviewText}" - Coworker Name</span>
        <span class="stars">★★★★★</span>
    `;

    document.getElementById("reviewsList").prepend(reviewCard);

    document.getElementById("reviewText").value = "";

    alert("Review submitted!");
}

document.addEventListener("DOMContentLoaded", function () {

    // Get the saved role from login (example: "coworker" or "owner")
    const role = localStorage.getItem("role");

    // Get the review section
    const reviewSection = document.getElementById("reviewSection");

    // If NOT a coworker → hide the review box
    if (role !== "coworker") {
        reviewSection.style.display = "none";
    }
});
