const user = JSON.parse(localStorage.getItem("user"));

if(!user)
{
    window.location.href = "index.html";
}

const form = document.getElementById("workspaceForm");
const propertySelect = document.getElementById("property");

// populate dropdown
properties
.filter(p => p.ownerId === user.id)
.forEach(p => {
    propertySelect.innerHTML += `
        <option value="${p.id}">${p.name}</option>
    `;
});

// 🔥 CHECK IF EDIT MODE
const editData = JSON.parse(localStorage.getItem("editWorkspace"));

if(editData)
{
    document.getElementById("property").value = editData.propertyId;
    document.getElementById("type").value = editData.type;
    document.getElementById("seats").value = editData.seats;
    document.getElementById("term").value = editData.term;
    document.getElementById("price").value = editData.price;
}

form.addEventListener("submit", function(e)
{
    e.preventDefault();

    if(editData)
    {
        // UPDATE EXISTING
        const index = workspaces.findIndex(w => w.id === editData.id);

        workspaces[index] = {
            id: editData.id,
            propertyId: Number(propertySelect.value),
            type: document.getElementById("type").value,
            seats: Number(document.getElementById("seats").value),
            term: document.getElementById("term").value,
            price: Number(document.getElementById("price").value),
            smoking: "No"
        };

        localStorage.removeItem("editWorkspace");
    }
    else
    {
        // CREATE NEW
        const newWorkspace =
        {
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