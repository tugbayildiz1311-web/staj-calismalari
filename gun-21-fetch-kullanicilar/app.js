const getUsersButton = document.getElementById("getUsersButton");
const statusMessage = document.getElementById("statusMessage");
const userList = document.getElementById("userList");

const API_URL = "https://jsonplaceholder.typicode.com/users";


async function getUsers() {
    statusMessage.textContent = "Kullanıcılar yükleniyor...";
    userList.textContent = "";

    getUsersButton.disabled = true;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(
                `HTTP hatası: ${response.status}`
            );
        }

        const users = await response.json();

        if (!Array.isArray(users) || users.length === 0) {
            statusMessage.textContent = "Kullanıcı bulunamadı";
            return;
        }

        users.forEach((user) => {
            const card = document.createElement("div");
            card.classList.add("user-card");

            const name = document.createElement("h2");
            name.textContent =
                user.name || "İsim bilgisi yok";

            const email = document.createElement("p");
            email.textContent =
                `E-posta: ${user.email || "Bilgi yok"}`;

            const city = document.createElement("p");
            city.textContent =
                `Şehir: ${user.address?.city || "Bilgi yok"}`;

            card.append(
                name,
                email,
                city
            );

            userList.append(card);
        });

        statusMessage.textContent =
            `${users.length} kullanıcı başarıyla yüklendi.`;

    } catch (error) {
        statusMessage.textContent =
            "Kullanıcılar yüklenirken bir hata oluştu.";

    } finally {
        getUsersButton.disabled = false;
    }
}


getUsersButton.addEventListener(
    "click",
    getUsers
);