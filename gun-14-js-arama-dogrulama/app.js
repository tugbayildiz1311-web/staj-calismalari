// Ürün koduna göre ürün bulma
function findProductByCode(code) {
    const normalizedCode = code.trim().toLowerCase();

    const foundProduct = products.find(
        (product) => product.code.toLowerCase() === normalizedCode
    );

    if (foundProduct === undefined) {
        return "Ürün bulunamadı";
    }

    return foundProduct;
}


// Electronics kategorisinde en az bir ürün var mı?
const hasElectronicsProduct = products.some(
    (product) => product.category === "Electronics"
);


// Stokta olmayan en az bir ürün var mı?
const hasOutOfStockProduct = products.some(
    (product) => product.stock === 0
);


// Tüm ürünlerin fiyatı 0'dan büyük mü?
const allPricesValid = products.every(
    (product) => product.price > 0
);


// Tüm ürün kodları dolu mu?
const allCodesFilled = products.every(
    (product) => product.code.trim() !== ""
);


// İzin verilen kategoriler
const allowedCategories = [
    "Aksesuar",
    "Görüntü",
    "Ses",
    "Depolama",
    "Electronics"
];

function isAllowedCategory(category) {
    const normalizedCategory = category.trim().toLowerCase();

    const normalizedAllowedCategories = allowedCategories.map(
        (allowedCategory) => allowedCategory.toLowerCase()
    );

    return normalizedAllowedCategories.includes(normalizedCategory);
}


// Ürün adına göre büyük-küçük harf duyarsız arama
function searchProductsByName(searchText) {
    const normalizedSearchText = searchText.trim().toLowerCase();

    return products.filter(
        (product) =>
            product.name.toLowerCase().includes(normalizedSearchText)
    );
}


// findIndex örneği
const monitorIndex = products.findIndex(
    (product) => product.code === "MNR003"
);


// Geçersiz fiyat senaryosu için orijinal diziyi değiştirmeden yeni dizi
const productsWithInvalidPrice = [
    ...products,
    {
        id: 11,
        code: "TEST011",
        name: "Test Ürün",
        category: "Aksesuar",
        price: 0,
        stock: 1,
        isActive: true
    }
];

const invalidPriceCheck = productsWithInvalidPrice.every(
    (product) => product.price > 0
);


// TESTLER

console.log("=== 1. BULUNAN ÜRÜN KODU ===");
console.log(findProductByCode("MOU001"));


console.log("=== 2. BULUNMAYAN ÜRÜN KODU ===");
console.log(findProductByCode("ABC999"));


console.log("=== 3. ELECTRONICS KATEGORİSİ VAR MI? ===");
console.log(hasElectronicsProduct);


console.log("=== 4. STOKTA OLMAYAN ÜRÜN VAR MI? ===");
console.log(hasOutOfStockProduct);


console.log("=== 5. TÜM FİYATLAR GEÇERLİ Mİ? ===");
console.log(allPricesValid);


console.log("=== 6. TÜM ÜRÜN KODLARI DOLU MU? ===");
console.log(allCodesFilled);


console.log("=== 7. VAR OLAN KATEGORİ ===");
console.log(isAllowedCategory("Aksesuar"));


console.log("=== 8. OLMAYAN KATEGORİ ===");
console.log(isAllowedCategory("Mobilya"));


console.log("=== 9. BÜYÜK-KÜÇÜK HARF DUYARSIZ ARAMA ===");
console.log(searchProductsByName("mouse"));


console.log("=== 10. TRIM VE BÜYÜK-KÜÇÜK HARF TESTİ ===");
console.log(searchProductsByName("   MOUSE   "));


console.log("=== 11. FINDINDEX SONUCU ===");
console.log("Monitör index:", monitorIndex);


console.log("=== 12. GEÇERSİZ FİYATLI ÜRÜN TESTİ ===");
console.log(invalidPriceCheck);