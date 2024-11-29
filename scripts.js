// Molecule: Alert Functionality
function showAlert(message, type = 'info') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} fixed-top mt-3 mx-3`;
    alert.textContent = message;

    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 3000);
}

// Molecule: Smooth Scroll
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
    });
}

// Organism: Navbar Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        smoothScroll(event.target.getAttribute('href'));
        showAlert(`Navigated to ${event.target.textContent}`, 'success');
    });
});
