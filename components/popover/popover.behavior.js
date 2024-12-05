(function (Drupal) {
  'use strict';

  // Store cleanup functions for each popover
  const cleanupFunctions = new WeakMap();

  Drupal.behaviors.popover = {
    attach: function (context) {
      context = context || document;

      const popovers = context.querySelectorAll('[data-popover]');

      popovers.forEach(popover => {
        // Skip already initialized popovers
        if (popover.dataset.popoverInitialized) {
          return;
        }
        popover.dataset.popoverInitialized = 'true';

        const trigger = popover.querySelector('[data-popover-trigger]');
        const content = popover.querySelector('[data-popover-content]');
        const triggerType = trigger.getAttribute('data-trigger');
        const placement = trigger.getAttribute('data-placement');

        // Move the content to the body to avoid clipping
        document.body.appendChild(content);
        content.style.position = 'fixed';
        content.style.zIndex = '9999';

        let isOpen = false;

        // Define getPosition function for positioning logic
        const getPosition = () => {
          const triggerRect = trigger.getBoundingClientRect();
          const contentRect = content.getBoundingClientRect();

          let top;
          let left;

          switch (placement) {
            case 'top':
              top = triggerRect.top - contentRect.height - 8;
              left = triggerRect.left +
                (triggerRect.width - contentRect.width) / 2;
              break;
            case 'bottom':
              top = triggerRect.bottom + 8;
              left = triggerRect.left +
                (triggerRect.width - contentRect.width) / 2;
              break;
            case 'left':
              top = triggerRect.top +
                (triggerRect.height - contentRect.height) / 2;
              left = triggerRect.left - contentRect.width - 8;
              break;
            case 'right':
              top = triggerRect.top +
                (triggerRect.height - contentRect.height) / 2;
              left = triggerRect.right + 8;
              break;
            default:
              top = triggerRect.bottom + 8;
              left = triggerRect.left +
                (triggerRect.width - contentRect.width) / 2;
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

        // Initialize hide function before it's used
        const hide = () => {
          content.classList.add('hidden');
          isOpen = false;

          // Remove event listeners when hidden
          window.removeEventListener('scroll', getPosition);
          window.removeEventListener('resize', getPosition);
        };

        // Define show function after hide is available
        const show = () => {
          content.classList.remove('hidden');
          getPosition();
          isOpen = true;

          // Reposition on scroll and resize
          window.addEventListener('scroll', getPosition);
          window.addEventListener('resize', getPosition);
        };

        // Define clickOutsideHandler after hide is available
        const clickOutsideHandler = (event) => {
          if (!popover.contains(event.target) &&
            !content.contains(event.target) &&
            isOpen) {
            hide();
          }
        };

        // Create cleanup function with a local observer reference
        let observerRef;
        const cleanup = () => {
          if (content.parentNode === document.body) {
            document.body.removeChild(content);
          }
          if (triggerType === 'click') {
            document.removeEventListener('click', clickOutsideHandler);
          }
          window.removeEventListener('scroll', getPosition);
          window.removeEventListener('resize', getPosition);
          if (observerRef) {
            observerRef.disconnect();
          }
        };

        // Initialize observer with cleanup function
        observerRef = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList' &&
              Array.from(mutation.removedNodes).includes(popover)) {
              cleanup();
            }
          });
        });

        // Set up event listeners based on trigger type
        if (triggerType === 'click') {
          trigger.addEventListener('click', () => {
            isOpen ? hide() : show();
          });
          document.addEventListener('click', clickOutsideHandler);
        }
        else if (triggerType === 'hover') {
          trigger.addEventListener('mouseenter', show);
          trigger.addEventListener('mouseleave', hide);
        }

        observerRef.observe(popover.parentNode, {
          childList: true,
        });

        // Store cleanup function for detach
        cleanupFunctions.set(popover, cleanup);
      });
    },

    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        const popovers = context.querySelectorAll('[data-popover]');
        popovers.forEach(popover => {
          const cleanup = cleanupFunctions.get(popover);
          if (cleanup) {
            cleanup();
            cleanupFunctions.delete(popover);
          }
        });
      }
    }
  };
})(Drupal);
