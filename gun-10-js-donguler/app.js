console.log("Döngüler çalışması başladı.");

let products = [
    "Klavye",
    "Mouse",
    "Monitör",
    "Kasa",
    "Ekran kartı",
    "Mouse pad",
    "İşlemci",
    "RAM"
];

console.log("----- for döngüsü ile ürünler -----");

for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + ". " + products[i]);
}


console.log("----- for...of ile ürünler -----");

for (let product of products) {
    console.log(product);
}

let prices = [
    800,
    450,
    5000,
    4000,
    20000,
    350,
    7000,
    4500
];

console.log("----- for döngüsü ile fiyatlar -----");

for (let i = 0; i < prices.length; i++) {
    console.log((i + 1) + ". " + prices[i]);
}


console.log("----- for...of ile fiyatlar -----");

for (let price of prices) {
    console.log(price);
}

let totalPrice = 0;

for (let price of prices){
    totalPrice += price;
}
console.log("----- Toplam fiyat -----");
console.log("Toplam fiyat: " + totalPrice + " TL");

let stocks = [
    2,
    8,
    1,
    3,
    0,
    5,
    0,
    1
];

console.log("----- Stokta bulunan ürünler -----");
for(let i = 0; i < stocks.length; i++) {
    if(stocks[i] === 0){
        continue;
    }
    console.log("Ürün: " + products[i] + " Stok durumu: " + stocks[i]);
}

let productCodes = [
    "KLV01",
    "MOU02",
    "MON03",
    "KAS04",
    "EKA05",
    "MPD06",
    "ISL07",
    "RAM08"
];

let searchedCode = "EKA05";

console.log("----- Ürün kodu arama işlemi -----") // Ürün kodları

for(let i = 0; i < productCodes.length; i++) {
    if (productCodes[i] === searchedCode) {
    console.log("Bulunan ürün: " + products[i]);
    break;
    }
}


console.log("----- while döngüsü ile sayılar -----");

let number = 1;

while (number <= 5){
   console.log(number);
   number++;
// number değeri döngü içinde artırılmazsa number <= 5 koşulu
// sürekli doğru kalır ve sonsuz döngü oluşur.
// Bu durum tarayıcının veya programın kilitlenmesine neden olabilir.
}


console.log("----- En yüksek fiyat -----");

let highestPrice = prices[0];

for (let price of prices) {
    if (price > highestPrice) {
        highestPrice = price;
    }
}
console.log("En yüksek fiyat: " + highestPrice + " TL");