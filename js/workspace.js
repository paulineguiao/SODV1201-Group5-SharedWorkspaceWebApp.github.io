// Load logged-in user
const user = JSON.parse(localStorage.getItem("user"));

// SAFETY CHECK — prevent crashes
if (!user || !user.id) {
    alert("Session expired. Please log in again.");
    window.location.href = "login.html";
}

// SAFETY CHECK — ensure properties exist
if (typeof properties === "undefined") {
    alert("Error: properties data not loaded.");
    throw new Error("properties is undefined");
}

// SAFETY CHECK — ensure workspaces exist
if (typeof workspaces === "undefined") {
    alert("Error: workspaces data not loaded.");
    throw new Error("workspaces is undefined");
}

const form = document.getElementById("workspaceForm");
const propertySelect = document.getElementById("property");

// Populate dropdown safely
const ownerProperties = properties.filter(p => p.ownerId === user.id);

if (ownerProperties.length === 0) {
    alert("You have no properties yet. Please add a property first.");
}

ownerProperties.forEach(p => {
    propertySelect.innerHTML += `
        <option value="${p.id}">${p.name}</option>
    `;
});

// EDIT MODE
const editData = JSON.parse(localStorage.getItem("editWorkspace"));

if (editData) {
    document.getElementById("property").value = editData.propertyId;
    document.querySelector(`input[name='type'][value='${editData.type}']`).checked = true;
    document.getElementById("seats").value = editData.seats;
    document.querySelector(`input[name='term'][value='${editData.term}']`).checked = true;
    document.getElementById("price").value = editData.price;
}

// SAVE WORKSPACE
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (editData) {
        // UPDATE EXISTING
        const index = workspaces.findIndex(w => w.id === editData.id);

        if (index === -1) {
            alert("Error: Workspace not found.");
            return;
        }

        workspaces[index] = {
            id: editData.id,
            propertyId: Number(propertySelect.value),
            type: document.querySelector("input[name='type']:checked").value,
            seats: Number(document.getElementById("seats").value),
            term: document.querySelector("input[name='term']:checked").value,
            price: Number(document.getElementById("price").value),
            smoking: "No"
        };

        localStorage.removeItem("editWorkspace");
    } else {
        // CREATE NEW
        const newWorkspace = {
            id: Date.now(),
            propertyId: Number(propertySelect.value),
            type: document.querySelector("input[name='type']:checked").value,
            seats: Number(document.getElementById("seats").value),
            term: document.querySelector("input[name='term']:checked").value,
            price: Number(document.getElementById("price").value),
            smoking: "No"
        };

        workspaces.push(newWorkspace);
    }

    alert("Saved!");
    window.location.href = "owner-dashboard.html";
});

// Navigation
function goHome() {
    window.location.href = "owner-dashboard.html";
}

function goProperty() {
    window.location.href = "property.html";
}

function logout() {
    window.location.href = "login.html";
}
