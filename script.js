document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    // You can add code here to send the form data to your email or server
    this.reset();
});
