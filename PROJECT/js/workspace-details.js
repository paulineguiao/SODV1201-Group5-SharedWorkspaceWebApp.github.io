const user = JSON.parse(localStorage.getItem("user"));

if(!user)
{
    window.location.href = "index.html";
}

const workspaceId =
    Number(localStorage.getItem("selectedWorkspace"));

const workspace =
    workspaces.find(w => w.id === workspaceId);

const property =
    properties.find(p => p.id === workspace.propertyId);

const owner =
    users.find(u => u.id === property.ownerId);

const details = document.getElementById("details");

details.innerHTML = `
    <div class="card">

        <h2>${workspace.type}</h2>

        <p><strong>Seats:</strong> ${workspace.seats}</p>
        <p><strong>Price:</strong> $${workspace.price}</p>
        <p><strong>Availability:</strong> ${workspace.availability}</p>
        <p><strong>Lease Term:</strong> ${workspace.term}</p>
        <p><strong>Smoking:</strong> ${workspace.smoking}</p>

        <hr>

        <h3>Location</h3>
        <p>${property.address}</p>

        <h3>Owner Contact</h3>
        <p>${owner.name}</p>
        <p>${owner.email}</p>
        <p>${owner.phone}</p>

    </div>
`;

function goBack()
{
    window.location.href = "coworker-dashboard.html";
}