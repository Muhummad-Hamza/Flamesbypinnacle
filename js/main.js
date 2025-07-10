// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Exact menu item names from image
const menuItems = [
  // Golden & Crispy Selections (exact order and names)
  { name: 'Regular Fries', price: 300, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: '', category: 'Golden & Crispy Selections' },
  { name: 'Masala Fries', price: 350, img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', desc: '', category: 'Golden & Crispy Selections' },
  { name: 'Dancing Potato', price: 450, img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', desc: '', category: 'Golden & Crispy Selections' },
  { name: 'Hot Tender Strips (3 Pcs)', price: 500, img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80', desc: '', category: 'Golden & Crispy Selections' },
  { name: 'Crispy Hot Bites (8 Pcs)', price: 500, img: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&w=600&q=80', desc: '', category: 'Golden & Crispy Selections' },
  { name: 'Cluck Nuggets (4 Pcs)', price: 500, img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80', desc: '', category: 'Golden & Crispy Selections' },
  // Flavours note (not a food item, just a description)
  { name: 'Flavours', price: '', img: '', desc: 'Chicken, Garlic, Fries Masala, Chat Masala, Chessy Chatpata, Chilli Garlic, Hot BBQ, Fajita, Peri Peri', category: 'Golden & Crispy Selections', isNote: true },
  // Rolls
  { name: 'Turkish Kabab Roll', price: 400, img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&w=600&q=80', desc: 'Turkish Kabab Roll', category: 'Rolls' },
  { name: 'Reshmi Kabab Roll', price: 400, img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&w=600&q=80', desc: 'Reshmi Kabab Roll', category: 'Rolls' },
  { name: 'Chicken Chatni Roll', price: 300, img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', desc: 'Chicken Chatni Roll', category: 'Rolls' },
  { name: 'Chicken Garlic Mayo Roll', price: 350, img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', desc: 'Chicken Garlic Mayo Roll', category: 'Rolls' },
  { name: 'Chicken Malai Boti Roll', price: 350, img: 'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&w=600&q=80', desc: 'Chicken Malai Boti Roll', category: 'Rolls' },
  { name: 'Chicken Chatakh Boti Roll', price: 350, img: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&w=600&q=80', desc: 'Chicken Chatakh Boti Roll', category: 'Rolls' },
  { name: 'Beef Bihari Boti Roll', price: 400, img: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&w=600&q=80', desc: 'Beef Bihari Boti Roll', category: 'Rolls' },
  { name: 'Puri Paratha', price: 100, img: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&w=600&q=80', desc: 'Puri Paratha', category: 'Rolls' },
  { name: 'Chapati', price: 50, img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80', desc: 'Chapati', category: 'Rolls' },
  // Dips & Sauces
  { name: 'Mayonnaise', price: 50, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Mayonnaise', category: 'Dips & Sauces' },
  { name: 'Ketchup', price: 50, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Ketchup', category: 'Dips & Sauces' },
  { name: 'Chilli Garlic', price: 50, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Chilli Garlic', category: 'Dips & Sauces' },
  { name: 'Thai Sriracha', price: 50, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Thai Sriracha', category: 'Dips & Sauces' },
  { name: 'Peri Peri Chipotle', price: 50, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Peri Peri Chipotle', category: 'Dips & Sauces' },
  { name: 'Tahina', price: 50, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Tahina', category: 'Dips & Sauces' },
  { name: 'Thousand Island', price: 50, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Thousand Island', category: 'Dips & Sauces' },
  { name: 'Green Chilli', price: 50, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Green Chilli', category: 'Dips & Sauces' },
  { name: 'Mustard', price: 50, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Mustard', category: 'Dips & Sauces' },
  // Bar B Que
  { name: 'Chicken Tikka (Leg)', price: 500, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Chicken Tikka (Leg)', category: 'Bar B Que' },
  { name: 'Chicken Tikka (Chest)', price: 550, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Chicken Tikka (Chest)', category: 'Bar B Que' },
  { name: 'Chicken Boti (Red Masala)', price: 600, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Chicken Boti (Red Masala)', category: 'Bar B Que' },
  { name: 'Chicken Malai Boti', price: 650, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Chicken Malai Boti', category: 'Bar B Que' },
  { name: 'Chicken Chatakh Boti', price: 650, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Chicken Chatakh Boti', category: 'Bar B Que' },
  { name: 'Turkish Kabab', price: 700, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Turkish Kabab', category: 'Bar B Que' },
  { name: 'Reshmi Kabab', price: 700, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Reshmi Kabab', category: 'Bar B Que' },
  { name: 'Beef Bihari Boti', price: 700, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Beef Bihari Boti', category: 'Bar B Que' },
  // Beverages
  { name: 'Mint Margarita', price: 500, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Mint Margarita', category: 'Beverages' },
  { name: 'Soft Drink (350 ML)', price: 150, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Soft Drink (350 ML)', category: 'Beverages' },
  { name: 'Soft Drink (1 Ltr)', price: 250, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Soft Drink (1 Ltr)', category: 'Beverages' },
  { name: 'Mineral Water (500 ML)', price: 100, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Mineral Water (500 ML)', category: 'Beverages' },
  { name: 'Mineral Water (1.5 Ltr)', price: 200, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Mineral Water (1.5 Ltr)', category: 'Beverages' },
  { name: 'Nescafe Cardamom Tea', price: 250, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Nescafe Cardamom Tea', category: 'Beverages' },
  { name: 'Nescafe Karak Tea', price: 250, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Nescafe Karak Tea', category: 'Beverages' },
  { name: 'Nescafe Coffee', price: 300, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Nescafe Coffee', category: 'Beverages' },
  // Chef Special
  { name: 'Iraqi Falafel (5 Pcs)', price: 250, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Iraqi Falafel (5 Pcs)', category: 'Chef Special' },
  { name: 'Iraqi Falafel Sandwich', price: 400, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Iraqi Falafel Sandwich', category: 'Chef Special' },
  { name: 'Falafel in Pita Bread', price: 400, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', desc: 'Falafel in Pita Bread', category: 'Chef Special' },
];

// Add filter buttons for categories
const menuCategories = [
  { key: 'Golden & Crispy Selections', label: 'Golden & Crispy Selections' },
  { key: 'Rolls', label: 'Deep Flame Roll' },
  { key: 'Dips & Sauces', label: 'Dips & Sauces' },
  { key: 'Bar B Que', label: 'Bar B Que' },
  { key: 'Beverages', label: 'Beverages' },
  { key: 'Chef Special', label: 'Chef Special' },
];

function renderMenuCategories(selectedCat = 'all') {
  const menuCategoriesDiv = document.getElementById('menu-categories');
  if (!menuCategoriesDiv) return;
  menuCategoriesDiv.innerHTML = '';
  menuCategories.forEach(cat => {
    const catDiv = document.createElement('div');
    catDiv.className = 'menu-category';
    catDiv.style.display = (selectedCat === 'all' || selectedCat === cat.key) ? '' : 'none';
    catDiv.innerHTML = `<h3 class="menu-category-title big-heading">${cat.label}</h3><div class="menu-grid"></div>`;
    const grid = catDiv.querySelector('.menu-grid');
    menuItems.filter(item => item.category === cat.key && !item.isNote).forEach(item => {
      const div = document.createElement('div');
      div.className = 'menu-item';
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="menu-item-content">
          <h4>${item.name}</h4>
          <span class="price">Rs. ${item.price}</span>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
      `;
      div.querySelector('.add-to-cart-btn').addEventListener('click', () => addToCart(item));
      grid.appendChild(div);
    });
    // Flavours note for Golden & Crispy Selections
    if (cat.key === 'Golden & Crispy Selections') {
      const note = menuItems.find(i => i.category === cat.key && i.isNote);
      if (note) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'menu-flavours-note';
        noteDiv.innerHTML = `<strong>Flavours:</strong> <span>${note.desc}</span>`;
        grid.appendChild(noteDiv);
      }
    }
    menuCategoriesDiv.appendChild(catDiv);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Only render menu and filter bar if menu-categories exists
  if (document.getElementById('menu-categories')) {
    // Render filter buttons
    const menuSection = document.querySelector('.menu-section');
    if (menuSection && !document.getElementById('menu-filter-bar')) {
      const filterBar = document.createElement('div');
      filterBar.id = 'menu-filter-bar';
      filterBar.className = 'menu-filter-bar';
      filterBar.innerHTML = `<button class="menu-filter-btn active" data-cat="all">All</button>` +
        menuCategories.map(cat => `<button class="menu-filter-btn" data-cat="${cat.key}">${cat.label}</button>`).join('');
      menuSection.insertBefore(filterBar, menuSection.children[1]);
      filterBar.addEventListener('click', e => {
        if (e.target.classList.contains('menu-filter-btn')) {
          filterBar.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
          e.target.classList.add('active');
          renderMenuCategories(e.target.dataset.cat);
        }
      });
    }
    renderMenuCategories('all');
    setTimeout(animateOnLoad, 100);
  }
  // Cart/FAB logic (should always run)
  updateFabCartCount();
  setupFabCartBtn();
});

// Cart logic
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function addToCart(item) {
  const found = cart.find(i => i.name === item.name);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
  showNotification('Item added to cart!', 'add');
  // FAB pulse and badge
  const fabBtn = document.getElementById('fab-cart-btn');
  if (fabBtn) {
    fabBtn.classList.add('pulse', 'has-new');
    setTimeout(() => fabBtn.classList.remove('pulse'), 800);
    if (!fabBtn.querySelector('.fab-badge')) {
      const badge = document.createElement('span');
      badge.className = 'fab-badge';
      badge.textContent = 'New';
      fabBtn.appendChild(badge);
    }
  }
}

// FAB cart button logic
function updateFabCartCount() {
  const fabCartCount = document.getElementById('fab-cart-count');
  if (fabCartCount) {
    const total = cart.reduce((sum, i) => sum + i.quantity, 0);
    fabCartCount.textContent = total;
  }
  // Hide badge if cart is empty
  const fabBtn = document.getElementById('fab-cart-btn');
  if (fabBtn) {
    if (fabBtn.classList.contains('has-new') && cart.length === 0) {
      fabBtn.classList.remove('has-new');
    }
  }
}
function setupFabCartBtn() {
  const fabCartBtn = document.getElementById('fab-cart-btn');
  if (fabCartBtn) {
    fabCartBtn.onclick = () => {
      const cartModal = document.getElementById('cart-modal');
      if (cartModal) {
        cartModal.style.display = 'block';
        renderCart(true); // true = animate
        fabCartBtn.classList.remove('has-new'); // Hide badge after open
      }
    };
  }
}

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    const total = cart.reduce((sum, i) => sum + i.quantity, 0);
    cartCount.textContent = total;
  }
  updateFabCartCount();
}

// Notification (visually clear)
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = 'notification scale-in notification-' + type;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.classList.remove('scale-in');
    notification.classList.add('fade-in');
  }, 100);
  setTimeout(() => {
    notification.remove();
  }, 2500);
}

// Cart: only animate on initial open
let cartFirstOpen = true;
function renderCart(animate = false) {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  if (!cartItems || !cartTotal) return;
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
    cartTotal.textContent = 'Rs. 0';
    return;
  }
  cartItems.innerHTML = cart.map((item, idx) =>
    `<div class="cart-item${(animate && cartFirstOpen) ? ' fade-in' : ''}">
      <span>${item.name}</span>
      <div style="display:flex;align-items:center;gap:0.5em;">
        <button class="cart-qty-btn" data-idx="${idx}" data-action="dec">-</button>
        <span>${item.quantity}</span>
        <button class="cart-qty-btn" data-idx="${idx}" data-action="inc">+</button>
        <button class="cart-remove-btn" data-idx="${idx}" aria-label="Remove">&times;</button>
      </div>
      <span>Rs. ${item.price * item.quantity}</span>
    </div>`
  ).join('');
  cartFirstOpen = false;
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  cartTotal.textContent = `Rs. ${total}`;
  // Add event listeners for qty and remove
  cartItems.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.onclick = e => {
      const idx = +btn.dataset.idx;
      if (btn.dataset.action === 'inc') cart[idx].quantity++;
      if (btn.dataset.action === 'dec' && cart[idx].quantity > 1) cart[idx].quantity--;
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      renderCart(false); // no animation
    };
  });
  cartItems.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.onclick = e => {
      const idx = +btn.dataset.idx;
      cart.splice(idx, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      renderCart(false); // no animation
      showNotification('Item removed from cart.', 'remove');
    };
  });
  // Place order button
  if (!document.getElementById('place-order-btn')) {
    const placeOrderBtn = document.createElement('button');
    placeOrderBtn.id = 'place-order-btn';
    placeOrderBtn.className = 'cta-button';
    placeOrderBtn.textContent = 'Place Order';
    placeOrderBtn.onclick = () => {
      document.getElementById('cart-modal').style.display = 'none';
      setTimeout(() => {
        window.location.href = 'checkout.html';
      }, 800); // Give time for modal to close
    };
    cartItems.parentElement.appendChild(placeOrderBtn);
  }
}

// Cart modal logic
document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.getElementById('cart-btn');
  const cartModal = document.getElementById('cart-modal');
  const closeCart = document.getElementById('close-cart');
  if (cartBtn && cartModal && closeCart) {
    cartBtn.addEventListener('click', () => {
      cartModal.style.display = 'block';
      cartFirstOpen = true;
      renderCart(true);
    });
    closeCart.addEventListener('click', () => {
      cartModal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === cartModal) {
        cartModal.style.display = 'none';
      }
    });
  }
});

// Animate on load (only once)
let menuAnimated = false;
function animateOnLoad() {
  if (menuAnimated) return;
  document.querySelectorAll('.hero, .feature-card, .menu-category, .footer').forEach(el => {
    el.classList.add('fade-in');
  });
  document.querySelectorAll('.menu-item').forEach((el, i) => {
    setTimeout(() => el.classList.add('slide-up'), 80 * i);
  });
  menuAnimated = true;
}

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        // Here you would typically send the form data to a server
        showNotification('Message sent successfully!');
        contactForm.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Theme switcher logic
document.addEventListener('DOMContentLoaded', function() {
  function setTheme(theme) {
    const html = document.documentElement;
    const body = document.body;
    body.classList.add('scale-in');
    setTimeout(() => body.classList.remove('scale-in'), 400);
    if (theme === 'dark') {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.getElementById('theme-switcher').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.getElementById('theme-switcher').innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  const themeSwitcher = document.getElementById('theme-switcher');
  if (themeSwitcher) {
    // Set initial theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    themeSwitcher.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }
});

// Device-specific info notification (example: tablet orientation)
window.addEventListener('orientationchange', () => {
  if (window.innerWidth > 700 && window.innerWidth < 1100) {
    showNotification('Tip: Try landscape for a better menu view!', 'info');
  }
}); 