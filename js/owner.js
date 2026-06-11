let editMode = false;
let editId = null;

const user = JSON.parse(localStorage.getItem("user"));

/*if(!user || user.role !== "owner")
{
    window.location.href = "owner-dashboard.html";
}*/

// IMPORTANT: make REAL copies (prevents weird mutation bugs)
let propertiesData = [...properties];
let workspacesData = [...workspaces];

const propertyList = document.getElementById("propertyList");
const workspaceList = document.getElementById("workspaceList");

document.getElementById("addWorkspaceBtn").onclick = () => {
    window.location.href = "workspace.html";
};

document.getElementById("logoutBtn").onclick = () => {
    localStorage.removeItem("user");
    window.location.href = "index.html";
};

document.getElementById("sortPriceBtn").onclick = () => {
    workspacesData.sort((a,b) => a.price - b.price);
    render();
};

document.getElementById("sortSeatsBtn").onclick = () => {
    workspacesData.sort((a,b) => a.seats - b.seats);
    render();
};

render();

function render()
{
    propertyList.innerHTML = "";
    workspaceList.innerHTML = "";

    const ownerProperties =
        propertiesData.filter(p => p.ownerId === user.id);

    // PROPERTIES
    ownerProperties.forEach(p => {
        propertyList.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>${p.address}</p>
            </div>
        `;
    });

    // WORKSPACES (IMPORTANT FIX: stable grouping)
    ownerProperties.forEach(p => {

        const filteredWorkspaces =
            workspacesData.filter(w => w.propertyId === p.id);

        filteredWorkspaces.forEach(w => {

            workspaceList.innerHTML += `
                <div class="card">
                    <h3>${w.type}</h3>
                    <p>Seats: ${w.seats}</p>
                    <p>Price: $${w.price}</p>

                    <button onclick="startEdit(${w.id})">
                     Edit
                    </button>

                    <button onclick="deleteWorkspace(${w.id})">
                        Delete
                    </button>
                </div>
            `;
        });
    });
}

function deleteWorkspace(id)
{
    workspacesData = workspacesData.filter(w => w.id !== id);
    render();
}

function startEdit(id)
{
    const workspace = workspacesData.find(w => w.id === id);

    editMode = true;
    editId = id;

    localStorage.setItem("editWorkspace", JSON.stringify(workspace));

    window.location.href = "workspace.html";
}