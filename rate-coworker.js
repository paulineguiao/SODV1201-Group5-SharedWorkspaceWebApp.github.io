function goHome() {
    alert("Returning to Home Page");
    window.location.href = "owner-dashboard.html";
}

function logout() {
    alert("Logging out...");
    window.location.href = "index.html";
}

function submitCoworkerReview() {

    const reviewText = document.getElementById("coworkerReview").value;

    if (reviewText.trim() === "") {
        alert("Please write a review.");
        return;
    }

    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    reviewCard.innerHTML = `
        <span>"${reviewText}" - Owner Name</span>
        <span class="stars">★★★★★</span>
    `;

    document.getElementById("coworkerReviews").prepend(reviewCard);

    document.getElementById("coworkerReview").value = "";

    alert("Review submitted!");
}
