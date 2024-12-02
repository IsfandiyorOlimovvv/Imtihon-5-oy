const editButton = document.querySelector('.btn');
const cardBody = document.querySelector('.card-body');


let userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    phone: "123-456-7890",
};


function renderProfile() {
    cardBody.innerHTML = `
        <h2 class="card-title">User Profile</h2>
        <p><strong>Name:</strong> ${userProfile.name}</p>
        <p><strong>Email:</strong> ${userProfile.email}</p>
        <p><strong>Address:</strong> ${userProfile.address}</p>
        <p><strong>Phone:</strong> ${userProfile.phone}</p>
        <button class="btn edit-btn">Edit Profile</button>
        <button class="btn delete-btn" style="background-color: #e3342f; margin-left: 10px;">Delete Profile</button>
    `;

    document.querySelector('.edit-btn').addEventListener('click', editProfile);
    document.querySelector('.delete-btn').addEventListener('click', deleteProfile);
}


function editProfile() {
    cardBody.innerHTML = `
        <h2 class="card-title">Edit Profile</h2>
        <form id="edit-form">
            <label>
                Name: <input type="text" id="name" value="${userProfile.name}">
            </label><br><br>
            <label>
                Email: <input type="email" id="email" value="${userProfile.email}">
            </label><br><br>
            <label>
                Address: <input type="text" id="address" value="${userProfile.address}">
            </label><br><br>
            <label>
                Phone: <input type="text" id="phone" value="${userProfile.phone}">
            </label><br><br>
            <button type="button" class="btn save-btn">Save</button>
            <button type="button" class="btn cancel-btn" style="background-color: #6c757d; margin-left: 10px;">Cancel</button>
        </form>
    `;

    document.querySelector('.save-btn').addEventListener('click', saveProfile);
    document.querySelector('.cancel-btn').addEventListener('click', renderProfile);
}


function saveProfile() {
    userProfile.name = document.getElementById('name').value;
    userProfile.email = document.getElementById('email').value;
    userProfile.address = document.getElementById('address').value;
    userProfile.phone = document.getElementById('phone').value;
    renderProfile();
}


function deleteProfile() {
    const confirmation = confirm("Are you sure you want to delete this profile?");
    if (confirmation) {
        cardBody.innerHTML = "<h2>Profile Deleted</h2>";
    }
}


renderProfile();
