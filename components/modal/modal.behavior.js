/**
 * @file
 * Modal component behaviors.
 */

(function (Drupal) {
  'use strict';

  /**
   * Modal component behavior.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.modal = {
    attach: function (context) {
      context = context || document;

      // Find all modals in the current context
      const modals = context.querySelectorAll('[data-cy="modal"]');

      modals.forEach(modal => {
        // Set initial state
        modal.style.display = 'none';
        modal.classList.add('opacity-0');
        modal.setAttribute('aria-hidden', 'true');

        let isOpen = false;

        const showModal = () => {
          modal.style.display = 'block';
          // Trigger animation in next frame for smooth transition
          requestAnimationFrame(() => {
            modal.classList.add('opacity-100');
            modal.classList.remove('opacity-0');
          });
          document.body.style.overflow = 'hidden';
          isOpen = true;
          modal.setAttribute('aria-hidden', 'false');
          // Focus first focusable element
          const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (focusable.length) {
            focusable[0].focus();
          }
        };

        const hideModal = () => {
          modal.classList.add('opacity-0');
          modal.classList.remove('opacity-100');
          setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
          }, 200); // Match transition duration
          isOpen = false;
          modal.setAttribute('aria-hidden', 'true');
        };

        // Handle trigger buttons using data-bs-target
        const modalId = modal.getAttribute('id');
        const triggers = document.querySelectorAll(`[data-bs-target="#${modalId}"]`);
        triggers.forEach(trigger => {
          trigger.addEventListener('click', showModal);
        });

        // Rest of the event handlers remain the same
        const saveBtn = modal.querySelector('[data-cy="modal-save-btn"]');
        if (saveBtn) {
          const redirectUrl = saveBtn.getAttribute('href');
          if (redirectUrl && redirectUrl !== '#') {
            saveBtn.addEventListener('click', (e) => {
              e.preventDefault();
              window.location.href = redirectUrl;
            });
          }
        }

        const closeBtn = modal.querySelector('[data-cy="modal-close-btn"]');
        if (closeBtn) {
          closeBtn.addEventListener('click', hideModal);
        }

        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            hideModal();
          }
        });

        modal.addEventListener('keydown', (e) => {
          if (!isOpen) {
            return;
          }

          if (e.key === 'Escape') {
            hideModal();
            return;
          }

          if (e.key === 'Tab') {
            const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstFocusable = focusable[0];
            const lastFocusable = focusable[focusable.length - 1];

            if (e.shiftKey) {
              if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
              }
            }
            else {
              if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
              }
            }
          }
        });

        // Add methods for programmatic control
        modal.showModal = showModal;
        modal.hideModal = hideModal;
      });
    }
  };
}(Drupal));
