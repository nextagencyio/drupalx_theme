/**
 * @file
 * Behaviors for the Filter Accordion.
 */
/* eslint-disable max-len */

(function (Drupal) {
  'use strict';

  Drupal.behaviors.popover = {
    attach: function (context) {
      context = context || document;

      const popovers = context.querySelectorAll('[data-popover]');

      popovers.forEach(popover => {
        const trigger = popover.querySelector('[data-popover-trigger]');
        const content = popover.querySelector('[data-popover-content]');
        const triggerType = trigger.getAttribute('data-trigger');
        const placement = trigger.getAttribute('data-placement');

        // Move the content to the body to avoid clipping
        document.body.appendChild(content);
        content.style.position = 'fixed';
        content.style.zIndex = '9999';

        let isOpen = false;

        const getPosition = () => {
          const triggerRect = trigger.getBoundingClientRect();
          const contentRect = content.getBoundingClientRect();

          let top; let left;

          switch (placement) {
            case 'top':
              top = triggerRect.top - contentRect.height - 8;
              left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
              break;
            case 'bottom':
              top = triggerRect.bottom + 8;
              left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
              break;
            case 'left':
              top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
              left = triggerRect.left - contentRect.width - 8;
              break;
            case 'right':
              top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
              left = triggerRect.right + 8;
              break;
            default:
              top = triggerRect.bottom + 8;
              left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
          }

          // Ensure the popover stays within viewport bounds
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;

          // Prevent horizontal overflow
          if (left < 0) {
            left = 8;
          }
          if (left + contentRect.width > viewportWidth) {
            left = viewportWidth - contentRect.width - 8;
          }

          // Prevent vertical overflow
          if (top < 0) {
            top = 8;
          }
          if (top + contentRect.height > viewportHeight) {
            top = viewportHeight - contentRect.height - 8;
          }

          content.style.top = `${top}px`;
          content.style.left = `${left}px`;
        };

        const show = () => {
          content.classList.remove('hidden');
          getPosition();
          isOpen = true;

          // Reposition on scroll and resize
          window.addEventListener('scroll', getPosition);
          window.addEventListener('resize', getPosition);
        };

        const hide = () => {
          content.classList.add('hidden');
          isOpen = false;

          // Remove event listeners when hidden
          window.removeEventListener('scroll', getPosition);
          window.removeEventListener('resize', getPosition);
        };

        if (triggerType === 'click') {
          trigger.addEventListener('click', () => {
            isOpen ? hide() : show();
          });

          // Close on outside click
          document.addEventListener('click', (event) => {
            if (!popover.contains(event.target) && !content.contains(event.target) && isOpen) {
              hide();
            }
          });
        }
        else if (triggerType === 'hover') {
          trigger.addEventListener('mouseenter', show);
          trigger.addEventListener('mouseleave', hide);
        }

        // Clean up on Drupal behavior detach
        popover.addEventListener('DOMNodeRemoved', () => {
          if (content.parentNode === document.body) {
            document.body.removeChild(content);
          }
        });
      });
    }
  };
})(Drupal);
