// Sample cart data
let cart = [
    { id: 1, name: "iPhone 11 128GB Black", price: 1219.00, quantity: 1 },
    { id: 2, name: "iPhone 11 Silicone Case - Black", price: 59.00, quantity: 1 }
];

const subtotalElement = document.getElementById('subtotal');
const taxElement = document.getElementById('tax');
const totalElement = document.getElementById('total');

// Update cart display and totals
function updateCart() {
    let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let tax = subtotal * 0.05; // 5% tax
    let total = subtotal + tax;

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Update quantity
function updateQuantity(button, change) {
    const id = parseInt(button.parentElement.parentElement.parentElement.dataset.id);
    const input = button.parentElement.querySelector('.quantity-input');
    let quantity = parseInt(input.value) + change;

    if (quantity >= 1) {
        const item = cart.find(item => item.id === id);
        item.quantity = quantity;
        input.value = quantity;
        updateCart();
    }
}

// Handle remove item
document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', () => {
        const id = parseInt(button.dataset.id);
        cart = cart.filter(item => item.id !== id);
        button.parentElement.parentElement.remove();
        updateCart();
    });
});

// Handle checkout (placeholder)
document.querySelector('.checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout...');
});

// Initial update
updateCart();