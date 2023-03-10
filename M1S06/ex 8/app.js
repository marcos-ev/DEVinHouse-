fetch("https://randomuser.me/api/?results=8")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const usersContainer = document.querySelector("#users");

        data.results.forEach(function(user) {
            const userCard = document.createElement("div");
            userCard.classList.add("user-card");

            const userImg = document.createElement("img");
            userImg.src = user.picture.large;

            const userName = document.createElement("h2");
            userName.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`;

            const userEmail = document.createElement("p");
            userEmail.innerHTML = `<span>Email:</span> ${user.email}`;

            const userAddress = document.createElement("p");
            userAddress.innerHTML = `<span>Endereço:</span> ${user.location.street}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;

            userCard.appendChild(userImg);
            userCard.appendChild(userName);
            userCard.appendChild(userEmail);
            userCard.appendChild(userAddress);

            usersContainer.appendChild(userCard);
        });
    });
