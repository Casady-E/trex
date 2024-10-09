const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');  

const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessage = document.createElement('p');  


contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Reset error message
  errorMessage.textContent = '';

  // Validate fields
  let isValid = true;
  if (!nameInput.value) {
    isValid = false;
    errorMessage.textContent += 'Please enter your name.\n';
  }
  if (!phoneInput.value || !isValidPhoneNumber(phoneInput.value)) {
    isValid = false;
    errorMessage.textContent += 'Please enter a valid phone number.\n';
  }
  if (!emailInput.value || !isValidEmail(emailInput.value)) {
    isValid = false;
    errorMessage.textContent += 'Please enter a valid email address.\n';
  }
  if (!messageInput.value) {
    isValid = false;
    errorMessage.textContent += 'Please enter a message.\n';
  }

  // Display error message if any errors
  if (!isValid) {
    contactForm.insertBefore(errorMessage, contactForm.firstChild);
    return;
  }

  // Here you can implement your form submission logic
  // ...

  // A simple alert to confirm submission
  alert('Form submitted successfully!');
});

// Helper functions for validation
function isValidPhoneNumber(phoneNumber) {
  // You can add more complex phone number validation here
  return /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
}

function isValidEmail(email) {
  // You can add more complex email validation here
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}