products[2].price = 6000;

products.push ({
    id: 11,
    code: "AKL011",
    name: "Akıllı Priz",
    category: "Aksesuar",
    price: 680,
    stock: 5,
    isActive: true
});

console.log(products[0]);
console.log(products[products.length - 1]);

for (let product of products) {
   console.log (`${product.name} - ${product.price} - ${product.stock}`);
}

console.log(products.length);

console.log(products[4].supplier.name);
console.log(products[4].supplier.city);