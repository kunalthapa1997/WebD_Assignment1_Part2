const popupButton = document.getElementById('contact-btn');
const popupContainer = document.getElementById('message-box');
const closePopupButton = document.getElementById('close-btn');

popupButton.addEventListener('click', function() {
  popupContainer.style.display = 'block';
  document.body.classList.add('modal-open'); // Add modal-open class to body
});

closePopupButton.addEventListener('click', function() {
  popupContainer.style.display = 'none';
  document.body.classList.remove('modal-open'); // Remove modal-open class from body
});

popupContainer.addEventListener('click', function(e) {
  if (e.target === popupContainer) {
    popupContainer.style.display = 'none';
    document.body.classList.remove('modal-open'); // Remove modal-open class from body
  }
});
