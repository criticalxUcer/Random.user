document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.getElementById("user-avatar");
    const name = document.getElementById("user-name");
    const email = document.getElementById("user-email");
    const location = document.getElementById("user-location");
    const newUserButton = document.getElementById("new-user");


    async function random() {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        avatar.src = user.picture.large;
        name.textContent = `${user.name.first} ${user.name.last}`;
        email.textContent = user.email;
        location.textContent = `${user.location.city}, ${user.location.country}`;

        console.log("Uzur chiqmadi");

    }

    newUserButton.addEventListener("click", random);

    random();

});
