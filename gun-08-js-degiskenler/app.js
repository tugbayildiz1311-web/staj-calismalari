console.log("JavaScript dosyası başarıyla çalıştı.");

//ürün bilgileri
let productName = "Klavye";
let unitPrice = 800;
let quantity = "7";
const taxRate = 0.20;
let isInStock = true;

console.log(typeof productName);
console.log(typeof unitPrice);
console.log(typeof quantity);
console.log(typeof taxRate);
console.log(typeof isInStock);

let numericQuantity = Number(quantity);

console.log(numericQuantity);
console.log(typeof numericQuantity);

//ara toplam ve KDV hesaplamaları
let subtotal = unitPrice * numericQuantity;
console.log(subtotal);

let taxAmount = subtotal * taxRate;
console.log(taxAmount);

let totalAmount = subtotal + taxAmount;
console.log(totalAmount);

console.log(`${productName} ürününden ${quantity} adet alındı. Ara toplam ${subtotal} TL, KDV tutarı ${taxAmount} TL ve genel toplam ${totalAmount} TL'dir. Stok durumu: ${isInStock}.`);

productName = "Mouse";
unitPrice = 500;
quantity = "3";
isInStock = false;

numericQuantity = Number(quantity);

subtotal = unitPrice * numericQuantity;
console.log(subtotal);

taxAmount = subtotal * taxRate;
console.log(taxAmount);

totalAmount = subtotal + taxAmount;
console.log(totalAmount);

console.log(`${productName} ürününden ${numericQuantity} adet alındı. Ara toplam ${subtotal} TL, KDV tutarı ${taxAmount} TL ve genel toplam ${totalAmount} TL'dir. Stok durumu: ${isInStock}.`);

productName = "Monitör";
unitPrice = 5000;
quantity = "4";
isInStock = false;

numericQuantity = Number(quantity);

subtotal = unitPrice * numericQuantity;
console.log(subtotal);

taxAmount = subtotal * taxRate;
console.log(taxAmount);

totalAmount = subtotal + taxAmount;
console.log(totalAmount);

console.log(`${productName} ürününden ${numericQuantity} adet alındı. Ara toplam ${subtotal} TL, KDV tutarı ${taxAmount} TL ve genel toplam ${totalAmount} TL'dir. Stok durumu: ${isInStock}.`);

console.log(quantity +1);
console.log(numericQuantity + 1);

//string number ve NaN testleri
quantity = "4 adet";
numericQuantity = Number(quantity);
console.log(numericQuantity);
console.log(typeof numericQuantity);
console.log(Number.isNaN(numericQuantity));