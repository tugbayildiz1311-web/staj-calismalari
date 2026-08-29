const getUsersButton = document.getElementById("getUsersButton");
const retryButton = document.getElementById("retryButton");
const statusMessage = document.getElementById("statusMessage");
const userList = document.getElementById("userList");

const API_URL = "https://jsonplaceholder.typicode.com/users";


function setStatus(message, type) {
    statusMessage.textContent = message;

    statusMessage.classList.remove(
        "status-loading",
        "status-success",
        "status-empty",
        "status-error"
    );

    statusMessage.classList.add(`status-${type}`);
}


function renderUsers(users) {
    userList.textContent = "";

    users.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("user-card");

        const name = document.createElement("h2");
        name.textContent = user.name || "İsim bilgisi yok";

        const email = document.createElement("p");
        email.textContent =
            `E-posta: ${user.email || "E-posta bilgisi yok"}`;

        const city = document.createElement("p");
        city.textContent =
            `Şehir: ${user.address?.city || "Şehir bilgisi yok"}`;

        card.append(
            name,
            email,
            city
        );

        userList.append(card);
    });
}


async function getUsers() {
    setStatus(
        "Kullanıcılar yükleniyor...",
        "loading"
    );

    userList.textContent = "";

    getUsersButton.disabled = true;
    retryButton.disabled = true;
    retryButton.hidden = true;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(
                `HTTP hatası: ${response.status}`
            );
        }

        const users = await response.json();

        if (!Array.isArray(users)) {
            throw new Error(
                "API'den beklenen veri formatı gelmedi."
            );
        }

        if (users.length === 0) {
            setStatus(
                "Kullanıcı bulunamadı",
                "empty"
            );
            return;
        }

        renderUsers(users);

        setStatus(
            `${users.length} kullanıcı başarıyla yüklendi.`,
            "success"
        );

    } catch (error) {
        console.error(
            "Kullanıcı verileri alınırken hata oluştu:",
            error
        );

        setStatus(
            "Kullanıcılar yüklenirken bir hata oluştu.",
            "error"
        );

        retryButton.hidden = false;

    } finally {
        getUsersButton.disabled = false;
        retryButton.disabled = false;
    }
}


getUsersButton.addEventListener(
    "click",
    getUsers
);


retryButton.addEventListener(
    "click",
    getUsers
);