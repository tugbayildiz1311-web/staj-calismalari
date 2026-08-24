const activeProducts = products.filter (
(product) => product.isActive 
);   

const inStockProducts = products.filter (
    (product) => product.stock > 0
);

const productLabels = products.map (
    (product) => ` ${product.name} - ${product.price} TL`
);

const productsWithTax = products.map ((product) => {
    return {
        ...product,
        priceWithTax: product.price * 1.20
    };
});

const totalStock = products.reduce (
    (total, product) => total + product.stock , 0
);

const totalInventoryValue = products.reduce (
    (total, product) => total + product.price * product.stock, 0
);

// Belirli bir kategorideki ürünleri bulma
const selectedCategory = "Aksesuar";

const categoryProducts = products.filter(
    (product) => product.category === selectedCategory
);

const categoryTotalPrice = categoryProducts.reduce(
    (total, product) => total + product.price,
    0
);


// Klasik for döngüsü ile sonuçları doğrulama
const activeProductsFor = [];
const inStockProductsFor = [];
const productLabelsFor = [];
const productsWithTaxFor = [];

let totalStockFor = 0;
let totalInventoryValueFor = 0;
const categoryProductsFor = [];
let categoryTotalPriceFor = 0;

for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.isActive) {
        activeProductsFor.push(product);
    }

    if (product.stock > 0) {
        inStockProductsFor.push(product);
    }

    productLabelsFor.push(
        `${product.name} - ${product.price} TL`
    );

    productsWithTaxFor.push({
        ...product,
        priceWithTax: product.price * 1.20
    });

    totalStockFor += product.stock;

    totalInventoryValueFor +=
        product.price * product.stock;

    if (product.category === selectedCategory) {
        categoryProductsFor.push(product);
        categoryTotalPriceFor += product.price;
    }
}


// Array metotlarıyla elde edilen sonuçlar
console.log("=== ARRAY METOTLARI SONUÇLARI ===");

console.log("Aktif Ürünler:");
console.log(activeProducts);

console.log("Stokta Olan Ürünler:");
console.log(inStockProducts);

console.log("Ürün Etiketleri:");
console.log(productLabels);

console.log("KDV Dahil Ürünler:");
console.log(productsWithTax);

console.log("Toplam Stok:");
console.log(totalStock);

console.log("Toplam Envanter Değeri:");
console.log(totalInventoryValue);

console.log(`${selectedCategory} Kategorisindeki Ürünler:`);
console.log(categoryProducts);

console.log(`${selectedCategory} Kategorisi Toplam Fiyatı:`);
console.log(categoryTotalPrice);


// Klasik for döngüsü sonuçları
console.log("=== KLASİK FOR DÖNGÜSÜ İLE DOĞRULAMA ===");

console.log("Aktif Ürünler:");
console.log(activeProductsFor);

console.log("Stokta Olan Ürünler:");
console.log(inStockProductsFor);

console.log("Ürün Etiketleri:");
console.log(productLabelsFor);

console.log("KDV Dahil Ürünler:");
console.log(productsWithTaxFor);

console.log("Toplam Stok:");
console.log(totalStockFor);

console.log("Toplam Envanter Değeri:");
console.log(totalInventoryValueFor);

console.log(`${selectedCategory} Kategorisindeki Ürünler:`);
console.log(categoryProductsFor);

console.log(`${selectedCategory} Kategorisi Toplam Fiyatı:`);
console.log(categoryTotalPriceFor);