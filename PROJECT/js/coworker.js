const user = JSON.parse(localStorage.getItem("user"));

if(!user || user.role !== "coworker")
{
    window.location.href = "index.html";
}

const results = document.getElementById("workspaceResults");

function render(list)
{
    results.innerHTML = "";

    list.forEach(w => {

        const property = properties.find(p => p.id === w.propertyId);

        results.innerHTML += `
            <div class="card">
                <h3>${w.type}</h3>
                <p>Seats: ${w.seats}</p>
                <p>Price: $${w.price}</p>
                <p>Lease: ${w.term}</p>
                <p>Address: ${property.address}</p>

                <button onclick="viewDetails(${w.id})">
                    View Details
                </button>
            </div>
        `;
    });
}

function applyFilters()
{
    const text = document.getElementById("searchText").value.toLowerCase();
    const maxPrice = document.getElementById("maxPrice").value;
    const minSeats = document.getElementById("minSeats").value;
    const lease = document.getElementById("leaseFilter").value;

    let filtered = workspaces;

    if(text)
    {
        filtered = filtered.filter(w =>
            w.type.toLowerCase().includes(text)
        );
    }

    if(maxPrice)
    {
        filtered = filtered.filter(w =>
            w.price <= Number(maxPrice)
        );
    }

    if(minSeats)
    {
        filtered = filtered.filter(w =>
            w.seats >= Number(minSeats)
        );
    }

    if(lease)
    {
        filtered = filtered.filter(w =>
            w.term === lease
        );
    }

    render(filtered);
}

function viewDetails(id)
{
    localStorage.setItem("selectedWorkspace", id);
    window.location.href = "workspace-details.html";
}

function logout()
{
    localStorage.removeItem("user");
    window.location.href = "index.html";
}

render(workspaces);