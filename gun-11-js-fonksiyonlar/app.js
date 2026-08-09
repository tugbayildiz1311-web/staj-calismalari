const calculateSubtotal = (price, quantity) => price * quantity;

const calculateTax = (subtotal, taxRate) => subtotal * taxRate;

const calculateDiscount = (total, discountRate = 0) => total * discountRate;

const isProductAvailable =  (stock) => stock > 0;

const formatCurrency = (amount) => {
    return Intl.NumberFormat("tr-TR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount) + " TL";
};

const isValidNumber = (value) => 
    typeof value === "number" && Number.isFinite(value);

const calculateOrderTotal = (price, quantity, stock, taxRate, discountRate = 0) => {
    if (!isValidNumber(price) || !isValidNumber(quantity)) {
        return "Geçersiz fiyat veya adet"; }

    if (price <= 0 || quantity <= 0) {
        return "Fiyat ve adet sıfırdan büyük olmalıdır";
    }

    if (!isProductAvailable(stock)) {
        return "Ürün stokta yok";
    }

    let subtotal = calculateSubtotal (price, quantity);
    let tax = calculateTax (subtotal, taxRate);
    let total = subtotal + tax;
    let discount = calculateDiscount (total, discountRate);
    let currency = formatCurrency(total - discount);

    return currency;
};

console.log(calculateOrderTotal(1000, 2, 5, 0.20, 0.10));
console.log(calculateOrderTotal(4000, 8, 3, 0.30, 0.20));
console.log(calculateOrderTotal(1700, 4, 1, 0.50, 0.40));

console.log(calculateOrderTotal(1700, 4, 0, 0.50, 0.40));