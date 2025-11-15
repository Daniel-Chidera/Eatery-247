// ========================================
// MENU DATA
// ========================================
const menuData = [
    // Starters
    { id: 1, name: "Pepper Soup", price: 2500, category: "starters", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
    { id: 2, name: "Akara Bites", price: 1500, category: "starters", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
    { id: 3, name: "Suya Skewers", price: 3000, category: "starters", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop" },
    
    // Main Dishes
    { id: 4, name: "Jollof Rice", price: 3500, category: "main", image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop" },
    { id: 5, name: "Fried Rice", price: 3500, category: "main", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop" },
    { id: 6, name: "Ofada Rice & Ayamase", price: 4500, category: "main", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop" },
    { id: 7, name: "Eba & Egusi", price: 3000, category: "main", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop" },
    { id: 8, name: "Amala & Gbegiri", price: 3200, category: "main", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" },
    { id: 9, name: "Fufu & Oha Soup", price: 3800, category: "main", image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&h=300&fit=crop" },
    
    // Proteins
    { id: 10, name: "Grilled Chicken", price: 4000, category: "proteins", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop" },
    { id: 11, name: "Goat Meat", price: 5500, category: "proteins", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
    { id: 12, name: "Peppered Turkey", price: 6000, category: "proteins", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop" },
    { id: 13, name: "Snail", price: 7000, category: "proteins", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop" },
    
    // Soups
    { id: 14, name: "Egusi Soup", price: 2500, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
    { id: 15, name: "Ogbono Soup", price: 2500, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
    { id: 16, name: "Okra Soup", price: 2200, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
    { id: 17, name: "Edikang Ikong", price: 3000, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
    { id: 18, name: "Afang Soup", price: 3000, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
    { id: 19, name: "Bitterleaf Soup", price: 2800, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
    { id: 20, name: "Oha Soup", price: 3200, category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
    
    // Specials
    { id: 21, name: "Nkwobi", price: 5000, category: "specials", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop" },
    { id: 22, name: "Isi Ewu", price: 6000, category: "specials", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
    { id: 23, name: "Catfish BBQ", price: 7500, category: "specials", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" },
    { id: 24, name: "Abacha & Fish", price: 4500, category: "specials", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" },
    
    // Drinks
    { id: 25, name: "Zobo", price: 800, category: "drinks", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop" },
    { id: 26, name: "Chapman", price: 1200, category: "drinks", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop" },
    { id: 27, name: "Smoothies", price: 1500, category: "drinks", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop" },
    { id: 28, name: "Water", price: 300, category: "drinks", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop" }
];

// ========================================
// CART STATE
// ========================================
let cart = [];
const DELIVERY_FEE = 500;

// Load cart from localStorage on page load
function loadCart() {
    const savedCart = localStorage.getItem('eatery247_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('eatery247_cart', JSON.stringify(cart));
}

// ========================================
// RENDER MENU ITEMS
// ========================================
function renderMenuItems(category = 'all') {
    const orderItems = document.getElementById('orderItems');
    const filteredItems = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);
    
    orderItems.innerHTML = filteredItems.map(item => `
        <div class="order-item" data-category="${item.category}">
            <div class="order-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="order-item-info">
                <h3>${item.name}</h3>
                <div class="order-item-footer">
                    <span class="order-item-price">₦${item.price.toLocaleString()}</span>
                    <button class="btn-add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// FILTER FUNCTIONALITY
// ========================================
const filterButtons = document.querySelectorAll('.order-filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        renderMenuItems(category);
    });
});

// ========================================
// CART FUNCTIONS
// ========================================
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    saveCart();
    renderCart();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    renderCart();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        renderCart();
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // If cart is empty
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <p class="empty-cart-subtitle">Add items to get started</p>
            </div>
        `;
        subtotalEl.textContent = '₦0.00';
        totalEl.textContent = '₦0.00';
        checkoutBtn.disabled = true;
        return;
    }
    
    // Render cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-header">
                <span class="cart-item-name">${item.name}</span>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
            </div>
            <div class="cart-item-footer">
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <span class="cart-item-price">₦${(item.price * item.quantity).toLocaleString()}</span>
            </div>
        </div>
    `).join('');
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + DELIVERY_FEE;
    
    subtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
    totalEl.textContent = `₦${total.toLocaleString()}`;
    checkoutBtn.disabled = false;
}

// ========================================
// CHECKOUT
// ========================================
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + DELIVERY_FEE;
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    alert(`Order Summary:\n\n${itemCount} item(s)\nTotal: ₦${total.toLocaleString()}\n\nThank you for your order!\nWe'll contact you shortly for delivery details.`);
    
    // Clear cart after checkout
    cart = [];
    saveCart();
    renderCart();
});

// Clear cart button
document.getElementById('clearCartBtn').addEventListener('click', clearCart);

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderMenuItems('all');
    renderCart();
}); 