const emailClick = document.querySelector('#email_click');
const errorImg = document.querySelector('#error-icon');
const errorText = document.querySelector('#error__p');
const emailInput = document.querySelector('#email-input');

emailClick.addEventListener('click' , ()=> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value)) {
    // If email is invalid
    emailInput.classList.add('border-red-500'); // Add a red border
    errorImg.classList.remove('hidden'); // Show error message
    errorText.classList.remove('hidden'); 
  } else {
    // If email is valid
    emailInput.classList.remove('border-red-500'); // Remove the red border
    errorImg.classList.add('hidden'); // Hide the error message
    errorText.classList.add('hidden');
  }
});