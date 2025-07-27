let walletBalance = 100;
let appleQty = 0;
let breadQty = 0;
const applePrice = 50;
const breadPrice = 50;
const vatRate = 0.1;

function updateDisplay() {
    document.getElementById('walletBalance').textContent = walletBalance.toFixed(2);
    document.getElementById('appleQty').textContent = appleQty;
    document.getElementById('breadQty').textContent = breadQty;

    const total = (appleQty * applePrice) + (breadQty * breadPrice);
    const vat = total * vatRate;
    const subtotal = total + vat;

    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('vat').textContent = vat.toFixed(2);
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid deposit amount');
        return;
    }
    walletBalance += depositAmount;
    document.getElementById('depositAmount').value = '';
    updateDisplay();
}

function updateQuantity(item, change) {
    if (item === 'apple') {
        appleQty = Math.max(0, appleQty + change);
    } else if (item === 'bread') {
        breadQty = Math.max(0, breadQty + change);
    }
    updateDisplay();
}

function purchase() {
    const total = (appleQty * applePrice) + (breadQty * breadPrice);
    const vat = total * vatRate;
    const subtotal = total + vat;

    if (subtotal > walletBalance) {
        alert('Insufficient funds! Please deposit more money or reduce items.');
        return;
    }

    if (appleQty === 0 && breadQty === 0) {
        alert('Your cart is empty!');
        return;
    }

    walletBalance -= subtotal;
    alert('Purchase successful! Thank you for shopping.');
    appleQty = 0;
    breadQty = 0;
    updateDisplay();
}

updateDisplay();