document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        
        alert("Form submitted! (This is just a demo)");
    });
});
