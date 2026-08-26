function loadProducts() {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts === null) {
        return [...defaultProducts];
    }

    try {
        return JSON.parse(storedProducts);
    } catch (error) {
        console.error("Ürün verileri okunamadı:", error);
        return [...defaultProducts];
    }
}

function saveProducts() {
    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );
}

let products = loadProducts();


const productList = document.getElementById("productList");
const productCount = document.getElementById("productCount");

const productForm = document.getElementById("productForm");
const productName = document.getElementById("productName");
const productCategory = document.getElementById("productCategory");
const productPrice = document.getElementById("productPrice");
const productStock = document.getElementById("productStock");

const nameCount = document.getElementById("nameCount");
const formMessage = document.getElementById("formMessage");

const clearFormButton = document.getElementById("clearFormButton");
const clearProductsButton = document.getElementById("clearProductsButton");


function renderProducts(productsToRender) {
    while (productList.firstChild) {
        productList.firstChild.remove();
    }

    productCount.textContent =
        `Toplam ürün: ${productsToRender.length}`;

    if (productsToRender.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent =
            "Gösterilecek ürün bulunamadı";

        productList.append(emptyMessage);
        return;
    }

    productsToRender.forEach((product) => {
        const card = document.createElement("div");

        card.classList.add("product-card");
        card.setAttribute("data-code", product.code);

        if (product.stock === 0) {
            card.classList.add("out-of-stock");
        }

        const name = document.createElement("h2");
        name.textContent = product.name;

        const category = document.createElement("p");
        category.textContent =
            `Kategori: ${product.category}`;

        const price = document.createElement("p");
        price.textContent =
            `Fiyat: ${product.price} TL`;

        const stock = document.createElement("p");

        if (product.stock === 0) {
            stock.textContent = "Stokta Yok";
        } else {
            stock.textContent =
                `Stokta (${product.stock} adet)`;
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function () {
            deleteProduct(product.id);
        });

        card.append(
            name,
            category,
            price,
            stock,
            deleteButton
        );

        productList.append(card);
    });
}


function deleteProduct(productId) {
    const confirmed = confirm(
        "Bu ürünü silmek istediğinize emin misiniz?"
    );

    if (!confirmed) {
        return;
    }

    products = products.filter(
        (product) => product.id !== productId
    );

    saveProducts();
    renderProducts(products);

    showMessage("Ürün silindi.", "success");
}


function showMessage(message, type) {
    formMessage.textContent = message;

    formMessage.classList.remove(
        "success-message",
        "error-message"
    );

    if (type === "success") {
        formMessage.classList.add("success-message");
    }

    if (type === "error") {
        formMessage.classList.add("error-message");
    }
}


productName.addEventListener("input", function () {
    nameCount.textContent =
        `${productName.value.length} karakter`;
});


productForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = productName.value.trim();
    const category = productCategory.value.trim();
    const price = Number(productPrice.value);
    const stock = Number(productStock.value);

    if (name === "") {
        showMessage(
            "Ürün adı boş bırakılamaz.",
            "error"
        );
        return;
    }

    if (price <= 0) {
        showMessage(
            "Fiyat 0'dan büyük olmalıdır.",
            "error"
        );
        return;
    }

    if (stock < 0) {
        showMessage(
            "Stok negatif olamaz.",
            "error"
        );
        return;
    }

    const newId =
        products.length === 0
            ? 1
            : Math.max(
                ...products.map((product) => product.id)
            ) + 1;

    const newProduct = {
        id: newId,
        code: `PRD${String(newId).padStart(3, "0")}`,
        name: name,
        category: category,
        price: price,
        stock: stock,
        isActive: true
    };

    products.push(newProduct);

    saveProducts();
    renderProducts(products);

    showMessage(
        "Ürün başarıyla eklendi.",
        "success"
    );

    productForm.reset();
    nameCount.textContent = "0 karakter";
});


clearFormButton.addEventListener("click", function () {
    productForm.reset();
    nameCount.textContent = "0 karakter";
    formMessage.textContent = "";

    formMessage.classList.remove(
        "success-message",
        "error-message"
    );
});


clearProductsButton.addEventListener("click", function () {
    const confirmed = confirm(
        "Tüm ürünleri silmek istediğinize emin misiniz?"
    );

    if (!confirmed) {
        return;
    }

    products = [];

    saveProducts();
    renderProducts(products);

    showMessage(
        "Tüm ürünler temizlendi.",
        "success"
    );
});


renderProducts(products);