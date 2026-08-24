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