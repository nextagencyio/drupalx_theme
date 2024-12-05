(function () {

  /**
   * Opens the modal dialog corresponding to the given ID.
   *
   * @param {string} id - The unique identifier of the modal to open.
   * @returns {void} - This function does not return a value.
   */
  function openModal(id) {
    var modal = document.getElementById('modal-' + id);
    if (modal) {
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');

      // Optionally, set focus to the first focusable element inside the modal
      var focusableElements = modal.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select'
      );
      if (focusableElements.length) {
        focusableElements[0].focus();
      }
    }
  }

  /**
   * Closes the modal dialog corresponding to the given ID.
   *
   * @param {string} id - The unique identifier of the modal to close.
   * @returns {void} - This function does not return a value.
   */
  function closeModal(id) {
    var modal = document.getElementById('modal-' + id);
    if (modal) {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');

      // Return focus to the button that opened the modal
      var triggerButton = document.querySelector('button[data-id="' + id + '"]');
      if (triggerButton) {
        triggerButton.focus();
      }
    }
  }

  // Add event listeners for close buttons
  document.addEventListener('click', function (event) {
    if (event.target.matches('.gallery-close')) {
      var id = event.target.getAttribute('data-id');
      closeModal(id);
    }
  });

  // Close modal when clicking outside the modal content
  document.addEventListener('click', function (event) {
    var openModalElement = document.querySelector('.fixed.inset-0:not(.hidden)');
    if (openModalElement && event.target === openModalElement) {
      var id = openModalElement.getAttribute('data-id');
      closeModal(id);
    }
  });

  // Close modal on Escape key press
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      var openModalElement = document.querySelector('.fixed.inset-0:not(.hidden)');
      if (openModalElement) {
        var id = openModalElement.getAttribute('data-id');
        closeModal(id);
      }
    }
  });

  // Expose functions to the global scope
  window.openModal = openModal;
  window.closeModal = closeModal;
})();
