document.addEventListener('DOMContentLoaded', () => {
    // Add click event to the main order button
    const orderBtn = document.querySelector('.order-btn');
    if (orderBtn) {
        orderBtn.addEventListener('click', () => {
            alert("Our online ordering system is temporarily down for maintenance. Please visit us in store!");
        });
    }

    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Interactive menu details
function showDetails(itemName) {
    const messages = {
        'Espresso': 'Our signature espresso features notes of dark chocolate and roasted nuts.',
        'Latte': 'A perfect balance of smooth espresso and creamy milk, topped with vanilla.',
        'Pour Over': 'A bright, floral Ethiopian single-origin brewed to perfection.'
    };
    
    alert(`${itemName}\n\n${messages[itemName]}`);
}
