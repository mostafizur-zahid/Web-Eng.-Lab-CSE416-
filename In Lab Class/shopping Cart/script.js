// Sample cart data
let cart = [
    { id: 1, name: "Laptop", price: 999.99, quantity: 1 },
    { id: 2, name: "Headphones", price: 99.99, quantity: 2 },
    { id: 3, name: "Mouse", price: 29.99, quantity: 1 }
];

const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Render cart items
function renderCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}"></td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-btn" data-id="${item.id}">Remove</button></td>
        `;
        cartItems.appendChild(row);
    });
    updateTotal();
}

// Update cart total
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
}

// Handle quantity change
cartItems.addEventListener('change', (event) => {
    if (event.target.classList.contains('quantity-input')) {
        const id = parseInt(event.target.dataset.id);
        const quantity = parseInt(event.target.value);
        if (quantity >= 1) {
            const item = cart.find(item => item.id === id);
            item.quantity = quantity;
            renderCart();
        }
    }
});

// Handle remove item
cartItems.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        const id = parseInt(event.target.dataset.id);
        cart = cart.filter(item => item.id !== id);
        renderCart();
    }
});

// Handle checkout (placeholder)
document.querySelector('.checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout...');
});

// Initial render
renderCart();