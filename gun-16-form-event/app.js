const productList = document.getElementById("productList");
const productCount = document.getElementById("productCount");

function renderProducts(productsToRender) {

    // Eski elemanları temizle
    while (productList.firstChild) {
        productList.firstChild.remove();
    }

    // Ürün sayısını göster
    productCount.textContent = `Toplam ürün: ${productsToRender.length}`;

    // Dizi boşsa mesaj göster
    if (productsToRender.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Gösterilecek ürün bulunamadı";

        productList.append(emptyMessage);
        return;
    }

    // Ürün kartlarını oluştur
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
        category.textContent = `Kategori: ${product.category}`;

        const price = document.createElement("p");
        price.textContent = `Fiyat: ${product.price} TL`;

        const stock = document.createElement("p");

        if (product.stock === 0) {
            stock.textContent = "Stokta Yok";
        } else {
            stock.textContent = `Stokta (${product.stock} adet)`;
        }

        card.append(
            name,
            category,
            price,
            stock
        );

        productList.append(card);
    });
}

renderProducts(products);

const productForm = document.getElementById("productForm");
const productName = document.getElementById("productName");
const productCategory = document.getElementById("productCategory");
const productPrice = document.getElementById("productPrice");
const productStock = document.getElementById("productStock");
const nameCount = document.getElementById("nameCount");
const formMessage = document.getElementById("formMessage");
const clearFormButton = document.getElementById("clearFormButton");


// Ürün adı yazılırken karakter sayısını göster
productName.addEventListener("input", function () {
    nameCount.textContent = `${productName.value.length} karakter`;
});


// Form gönderildiğinde
productForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = productName.value.trim();
    const category = productCategory.value.trim();
    const price = Number(productPrice.value);
    const stock = Number(productStock.value);

    if (name === "") {
        showMessage("Ürün adı boş bırakılamaz.", "error");
        return;
    }

    if (price <= 0) {
        showMessage("Fiyat 0'dan büyük olmalıdır.", "error");
        return;
    }

    if (stock < 0) {
        showMessage("Stok negatif olamaz.", "error");
        return;
    }

    const newProduct = {
        id: products.length + 1,
        code: `PRD${String(products.length + 1).padStart(3, "0")}`,
        name: name,
        category: category,
        price: price,
        stock: stock,
        isActive: true
    };

    products.push(newProduct);

    renderProducts(products);

    showMessage("Ürün başarıyla eklendi.", "success");

    productForm.reset();
    nameCount.textContent = "0 karakter";
});


// Başarı ve hata mesajlarını göster
function showMessage(message, type) {
    formMessage.textContent = message;

    formMessage.classList.remove("success-message", "error-message");

    if (type === "success") {
        formMessage.classList.add("success-message");
    }

    if (type === "error") {
        formMessage.classList.add("error-message");
    }
}


// Click event örneği
clearFormButton.addEventListener("click", function () {
    productForm.reset();
    nameCount.textContent = "0 karakter";
    formMessage.textContent = "";
    formMessage.classList.remove("success-message", "error-message");
});