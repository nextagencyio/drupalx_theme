// accordion.behavior.js

(function (Drupal, window, document) {
  'use strict';

  Drupal.behaviors.accordionBehavior = {
    attach: function (context) {
      // Select all accordion trigger buttons within the context
      const accordionTriggers = context.querySelectorAll('[data-accordion-trigger]');

      accordionTriggers.forEach(trigger => {
        // Ensure the event is only attached once
        if (trigger.dataset.accordionInitialized) {
          return;
        }
        trigger.dataset.accordionInitialized = true;

        // Function to update button styles based on state
        const updateButtonStyles = (isExpanded) => {
          // Toggle hover background classes
          if (isExpanded) {
            trigger.classList.remove('hover:bg-blue-50');
            trigger.classList.add('hover:bg-blue-100');
          }
          else {
            trigger.classList.remove('hover:bg-blue-100');
            trigger.classList.add('hover:bg-blue-50');
          }

          // Find the SVG within the button
          const svg = trigger.querySelector('svg');
          if (svg) {
            if (isExpanded) {
              svg.classList.add('rotate-180');
            }
            else {
              svg.classList.remove('rotate-180');
            }
          }
        };

        // Click event listener for the trigger
        trigger.addEventListener('click', () => {
          const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
          const contentId = trigger.getAttribute('aria-controls');
          const content = document.getElementById(contentId);

          if (!content) {
            return;
          }

          // Toggle ARIA attribute
          trigger.setAttribute('aria-expanded', String(!isExpanded));

          if (isExpanded) {
            // Collapse the content
            content.classList.remove('max-h-screen');
            content.classList.add('max-h-0');
          }
          else {
            // Expand the content
            content.classList.remove('max-h-0');
            content.classList.add('max-h-screen');
          }

          // Update button styles based on new state
          updateButtonStyles(!isExpanded);
        });

        // Initialize the state based on the 'aria-expanded' attribute
        const initialExpanded = trigger.getAttribute('aria-expanded') === 'true';
        const contentId = trigger.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (initialExpanded && content) {
          content.classList.remove('max-h-0');
          content.classList.add('max-h-screen');
        }
        else if (content) {
          content.classList.remove('max-h-screen');
          content.classList.add('max-h-0');
        }

        // Apply initial button styles based on initial state
        updateButtonStyles(initialExpanded);
      });
    }
  };

})(Drupal, window, document);
