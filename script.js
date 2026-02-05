// Wait until page loads
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================== Hamburger Menu for Mobile =====================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Toggle hamburger animation
            hamburger.classList.toggle('active');
        });
    }
    
    // ===================== Close menu when clicking on any link =====================
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    console.log('Home page is ready! 🎉');
});
    
