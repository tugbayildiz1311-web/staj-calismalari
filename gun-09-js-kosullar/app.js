console.log("Sipariş kontrol programı çalıştı.");

let isPaid = false;
let stockCount = 2;
let orderStatus = "pending";
let userRole = "admin";
let orderTotal = 500;
// Beklenen sonuç: Ödeme bekleniyor.

console.log("----- Senaryo 1 -----");
if (isPaid === false) {
    console.log("Ödeme bekleniyor.");
} else if (stockCount === 0){
    console.log("Ürün stokta yok.");
} else {
    console.log("Sipariş hazırlanabilir.");
}

if (orderTotal >= 1000) {
    console.log("Ücretsiz kargo.");
}

if (userRole === "admin") {
    console.log("Admin sipariş durumunu değiştirebilir.");
} else if (userRole === "customer") {
    console.log("Müşteri siparişi yalnızca görüntüleyebilir.");
} else {
    console.log("Bilinmeyen kullanıcı rolü.");
}

switch (orderStatus) {
    case "preparing":
        console.log("Sipariş hazırlanıyor.");
        break;

    case "pending":
        console.log("Sipariş beklemede.");
        break;

    case "shipped":
        console.log("Sipariş kargoya verildi.");
        break;

    case "delivered":
        console.log("Sipariş teslim edildi.");
        break;

    default:
        console.log("Bilinmeyen sipariş durumu.");
}

// Senaryo 2 beklenen sonuç:
// Ürün stokta yok.
// Müşteri siparişi yalnızca görüntüleyebilir.
// Sipariş hazırlanıyor.
isPaid = true;
stockCount = 0;
orderStatus = "preparing";
userRole = "customer";
orderTotal = 750;

console.log("----- Senaryo 2 -----");
if (isPaid === false) {
    console.log("Ödeme bekleniyor.");
} else if (stockCount === 0){
    console.log("Ürün stokta yok.");
} else {
    console.log("Sipariş hazırlanabilir.");
}

if (orderTotal >= 1000) {
    console.log("Ücretsiz kargo.");
}

if (userRole === "admin") {
    console.log("Admin sipariş durumunu değiştirebilir.");
} else if (userRole === "customer") {
    console.log("Müşteri siparişi yalnızca görüntüleyebilir.");
} else {
    console.log("Bilinmeyen kullanıcı rolü.");
}

switch (orderStatus) {
    case "preparing":
        console.log("Sipariş hazırlanıyor.");
        break;

    case "pending":
        console.log("Sipariş beklemede.");
        break;

    case "shipped":
        console.log("Sipariş kargoya verildi.");
        break;

    case "delivered":
        console.log("Sipariş teslim edildi.");
        break;

    default:
        console.log("Bilinmeyen sipariş durumu.");
}


// Senaryo 3 beklenen sonuç:
// Sipariş hazırlanabilir.
// Ücretsiz kargo.
// Admin sipariş durumunu değiştirebilir.
// Sipariş kargoya verildi.
isPaid = true;
stockCount = 5;
orderStatus = "shipped";
userRole = "admin";
orderTotal = 1500;

console.log("----- Senaryo 3 -----");
if (!isPaid) {
    console.log("Ödeme bekleniyor.");
} else if (isPaid && stockCount === 0) {
    console.log("Ürün stokta yok.");
} else {
    console.log("Sipariş hazırlanabilir.");
}

if (orderTotal >= 1000) {
    console.log("Ücretsiz kargo.");
}

if (userRole === "admin") {
    console.log("Admin sipariş durumunu değiştirebilir.");
} else if (userRole === "customer") {
    console.log("Müşteri siparişi yalnızca görüntüleyebilir.");
} else {
    console.log("Bilinmeyen kullanıcı rolü.");
}

switch (orderStatus) {
    case "preparing":
        console.log("Sipariş hazırlanıyor.");
        break;

    case "pending":
        console.log("Sipariş beklemede.");
        break;

    case "shipped":
        console.log("Sipariş kargoya verildi.");
        break;

    case "delivered":
        console.log("Sipariş teslim edildi.");
        break;

    default:
        console.log("Bilinmeyen sipariş durumu.");
}


// Senaryo 4 beklenen sonuç:
// Sipariş hazırlanabilir.
// Ücretsiz kargo.
// Müşteri siparişi yalnızca görüntüleyebilir.
// Sipariş teslim edildi.
isPaid = true;
stockCount = 1;
orderStatus = "delivered";
userRole = "customer";
orderTotal = 1000;

console.log("----- Senaryo 4 -----");
if (!isPaid) {
    console.log("Ödeme bekleniyor.");
} else if (isPaid && stockCount === 0) {
    console.log("Ürün stokta yok.");
} else {
    console.log("Sipariş hazırlanabilir.");
}

if (orderTotal >= 1000) {
    console.log("Ücretsiz kargo.");
}

if (userRole === "admin") {
    console.log("Admin sipariş durumunu değiştirebilir.");
} else if (userRole === "customer") {
    console.log("Müşteri siparişi yalnızca görüntüleyebilir.");
} else {
    console.log("Bilinmeyen kullanıcı rolü.");
}

switch (orderStatus) {
    case "preparing":
        console.log("Sipariş hazırlanıyor.");
        break;

    case "pending":
        console.log("Sipariş beklemede.");
        break;

    case "shipped":
        console.log("Sipariş kargoya verildi.");
        break;

    case "delivered":
        console.log("Sipariş teslim edildi.");
        break;

    default:
        console.log("Bilinmeyen sipariş durumu.");
}

// Senaryo 5 beklenen sonuç:
// Sipariş hazırlanabilir.
// Bilinmeyen kullanıcı rolü.
// Bilinmeyen sipariş durumu.
isPaid = true;
stockCount = 2;
orderStatus = "cancelled";
userRole = "guest";
orderTotal = 999;

console.log("----- Senaryo 5 -----");
if (!isPaid) {
    console.log("Ödeme bekleniyor.");
} else if (isPaid && stockCount === 0) {
    console.log("Ürün stokta yok.");
} else {
    console.log("Sipariş hazırlanabilir.");
}

if (orderTotal >= 1000) {
    console.log("Ücretsiz kargo.");
}

if (userRole === "admin") {
    console.log("Admin sipariş durumunu değiştirebilir.");
} else if (userRole === "customer") {
    console.log("Müşteri siparişi yalnızca görüntüleyebilir.");
} else {
    console.log("Bilinmeyen kullanıcı rolü.");
}

switch (orderStatus) {
    case "preparing":
        console.log("Sipariş hazırlanıyor.");
        break;

    case "pending":
        console.log("Sipariş beklemede.");
        break;

    case "shipped":
        console.log("Sipariş kargoya verildi.");
        break;

    case "delivered":
        console.log("Sipariş teslim edildi.");
        break;

    default:
        console.log("Bilinmeyen sipariş durumu.");
}

// Senaryo 6 beklenen sonuç:
// Sipariş hazırlanabilir.
// Müşteri siparişi yalnızca görüntüleyebilir.
// Sipariş beklemede.
isPaid = true;
stockCount = 4;
orderStatus = "pending";
userRole = "customer";
orderTotal = 900;

console.log("----- Senaryo 6 -----");
if (!isPaid) {
    console.log("Ödeme bekleniyor.");
} else if (isPaid && stockCount === 0) {
    console.log("Ürün stokta yok.");
} else {
    console.log("Sipariş hazırlanabilir.");
}

if (orderTotal >= 1000) {
    console.log("Ücretsiz kargo.");
}

if (userRole === "admin") {
    console.log("Admin sipariş durumunu değiştirebilir.");
} else if (userRole === "customer") {
    console.log("Müşteri siparişi yalnızca görüntüleyebilir.");
} else {
    console.log("Bilinmeyen kullanıcı rolü.");
}

switch (orderStatus) {
    case "preparing":
        console.log("Sipariş hazırlanıyor.");
        break;

    case "pending":
        console.log("Sipariş beklemede.");
        break;

    case "shipped":
        console.log("Sipariş kargoya verildi.");
        break;

    case "delivered":
        console.log("Sipariş teslim edildi.");
        break;

    default:
        console.log("Bilinmeyen sipariş durumu.");
}