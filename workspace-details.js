function goHome() {
    alert("Returning to Home Page");
}

function logout() {
    alert("Logging out...");
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