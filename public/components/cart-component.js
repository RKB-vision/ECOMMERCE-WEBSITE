// Function to update floating cart count
function updateFloatingCart() {
    const floatingCartCount = document.getElementById('floating-cart-count');
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
if (floatingCartCount) {
    floatingCartCount.innerHTML = basket.length;
}
}

// Use a mutation observer to wait for the element to exist
const observer = new MutationObserver((mutations, obs) => {
    const floatingCartCount = document.getElementById('floating-cart-count');
    if (floatingCartCount) {
        updateFloatingCart();
        obs.disconnect()
        // We don't disconnect because we want to keep it updated if the content is re-injected
    }
});

// Initialize floating cart
document.addEventListener('DOMContentLoaded', () => {
    // Start observing the body for the cart count element
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Initial call in case it's already there
    updateFloatingCart();
    
    // Intercept basket changes in the same window
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
        originalSetItem.apply(this, arguments);
        if (key === 'basket') {
            updateFloatingCart();
        }
    };
});
