document.getElementById("searchBtn").addEventListener("click", function () {
    const address = document.getElementById("address").value.toLowerCase();
    const neighborhood = document.getElementById("neighborhood").value.toLowerCase();
    const sqft = document.getElementById("sqft").value;
    const parking = document.getElementById("parking").value;
    const transport = document.getElementById("transport").value;
    const seats = document.getElementById("seats").value;
    const smoking = document.getElementById("smoking").value;
    const date = document.getElementById("date").value;
    const term = document.getElementById("term").value;
    const price = document.getElementById("price").value;

    // SAMPLE DATA (replace with real backend later)
    const sampleData = [
        {
            name: "Downtown Shared Office",
            address: "123 7 Ave SW",
            neighborhood: "Downtown",
            sqft: 500,
            parking: "yes",
            transport: "yes",
            seats: 4,
            smoking: "no",
            date: "2026-06-15",
            term: "month",
            price: 800
        },
        {
            name: "Kensington Workspace",
            address: "88 Kensington Rd NW",
            neighborhood: "Kensington",
            sqft: 300,
            parking: "no",
            transport: "yes",
            seats: 2,
            smoking: "no",
            date: "2026-06-20",
            term: "week",
            price: 200
        }
    ];

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // clear old results

    const filtered = sampleData.filter(ws => {
        return (
            (!address || ws.address.toLowerCase().includes(address)) &&
            (!neighborhood || ws.neighborhood.toLowerCase().includes(neighborhood)) &&
            (!sqft || ws.sqft >= sqft) &&
            (!parking || ws.parking === parking) &&
            (!transport || ws.transport === transport) &&
            (!seats || ws.seats >= seats) &&
            (!smoking || ws.smoking === smoking) &&
            (!date || ws.date >= date) &&
            (!term || ws.term === term) &&
            (!price || ws.price <= price)
        );
    });

    if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p>No workspaces found.</p>";
        return;
    }

    filtered.forEach(ws => {
        const card = document.createElement("div");
        card.style.border = "1px solid #aaa";
        card.style.padding = "15px";
        card.style.margin = "15px 0";
        card.style.background = "#fff";

        card.innerHTML = `
            <h3>${ws.name}</h3>
            <p><strong>Address:</strong> ${ws.address}</p>
            <p><strong>Available:</strong> ${ws.date}</p>
            <p><strong>Seats:</strong> ${ws.seats}</p>
            <p><strong>Price:</strong> $${ws.price}</p>
            <button onclick="window.location.href='workspacedetails.html'">View Details</button>
        `;

        resultsDiv.appendChild(card);
    });
});
