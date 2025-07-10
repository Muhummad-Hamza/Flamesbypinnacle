document.addEventListener('DOMContentLoaded', function() {
  // Show cart summary from localStorage
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const summaryDiv = document.getElementById('checkout-cart-summary');
  if (summaryDiv) {
    if (cart.length === 0) {
      summaryDiv.innerHTML = '';
    } else {
      summaryDiv.innerHTML = cart.map(item =>
        `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.7em;">
          <span>${item.name} x ${item.quantity}</span>
          <span>Rs. ${item.price * item.quantity}</span>
        </div>`
      ).join('') + `<div style="border-top:1px solid var(--color-border);margin-top:1em;padding-top:1em;font-weight:bold;display:flex;justify-content:space-between;"><span>Total</span><span>Rs. ${cart.reduce((sum, i) => sum + i.price * i.quantity, 0)}</span></div>`;
    }
  }

  // Handle form submit
  const form = document.getElementById('checkout-form');
  const thankyouDiv = document.getElementById('checkout-thankyou');
  if (form && thankyouDiv) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Show notification
      showNotification('Order placed! Thank you.', 'order');
      // Clear cart
      // localStorage.setItem('cart', '[]');
      // Hide form, show thank you
      setTimeout(function() {
        form.style.display = 'none';
        thankyouDiv.style.display = 'block';
        syncThankYouTheme();
      }, 900);
    });
  }

  // Theme sync for thank you message (auto, since CSS uses variables)
  // Use MutationObserver to update thank you message theme
  const observer = new MutationObserver(() => {
    if (document.documentElement.classList.contains('dark')) {
      thankyouDiv.classList.add('dark');
    } else {
      thankyouDiv.classList.remove('dark');
    }
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
});

// Notification function (copied from main.js for standalone use)
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

function syncThankYouTheme() {
  const thankyouDiv = document.getElementById('checkout-thankyou');
  if (!thankyouDiv) return;
  if (document.documentElement.classList.contains('dark')) {
    thankyouDiv.classList.add('dark');
  } else {
    thankyouDiv.classList.remove('dark');
  }
} 