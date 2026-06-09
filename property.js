// NAVIGATION
function goHome(){
  window.location.href = "ownerHome.html";
}

function goWorkspace(){
  window.location.href = "workspace-detail.html";
}

function logout(){
  window.location.href = "index.html";
}

// VALID ADDRESS CHECK (simple rule)
function isValidAddress(address){
  let pattern = /\d+.*[a-zA-Z]/;
  return pattern.test(address);
}

// SAVE PROPERTY
function saveProperty(){

  let address = document.getElementById("address").value;
  let neighborhood = document.getElementById("neighborhood").value;
  let sqft = document.getElementById("sqft").value;
  let image = document.getElementById("imageUpload").files[0];

  let error = document.getElementById("addressError");

  // RESET ERROR
  error.textContent = "";

  // VALIDATION
  if(!isValidAddress(address)){
    error.textContent = "Please enter a valid address (must include number + street name)";
    return;
  }

  if(address === "" || neighborhood === "" || sqft === ""){
    error.textContent = "Please fill all required fields";
    return;
  }

  // IMAGE PREVIEW
  let imgURL = "";
  if(image){
    imgURL = URL.createObjectURL(image);
  }

  // DISPLAY RESULT
  document.getElementById("preview").innerHTML = `
    <h3>Saved Property</h3>
    <p><b>Address:</b> ${address}</p>
    <p><b>Neighborhood:</b> ${neighborhood}</p>
    <p><b>Square Feet:</b> ${sqft}</p>
    ${imgURL ? `<img src="${imgURL}" width="200">` : ""}
  `;
}
