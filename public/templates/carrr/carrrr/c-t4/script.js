document.addEventListener('DOMContentLoaded', () => {
    console.log("IronForge Fitness Loaded");

    const startBtn = document.getElementById('startBtn');
    
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            alert("Welcome to IronForge! Your 7-day free trial has been activated.");
            startBtn.textContent = "Trial Activated ✓";
            startBtn.style.background = "#28a745";
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
