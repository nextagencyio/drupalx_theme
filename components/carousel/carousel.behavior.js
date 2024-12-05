(function (Drupal) {
  Drupal.behaviors.carouselBehavior = {
    attach: function (context) {
      const carousels = context.querySelectorAll('.carousel');

      carousels.forEach(function (carousel) {
        if (carousel.hasAttribute('data-processed')) {
          return;
        }
        carousel.setAttribute('data-processed', 'true');

        const prevButton = carousel.querySelector('.carousel-prev');
        const nextButton = carousel.querySelector('.carousel-next');
        const carouselContent = carousel.querySelector('.carousel-content');
        const items = carouselContent.querySelectorAll('.carousel-item');
        let itemWidth = items[0].offsetWidth;

        if (!carouselContent || items.length === 0) {
          return;
        }

        /**
         * Scrolls the carousel content to the next item.
         * @returns {void} This function does not return a value.
         */
        function showNextItem() {
          carouselContent.scrollBy({
            left: itemWidth,
            behavior: 'smooth'
          });
        }

        /**
         * Scrolls the carousel content to the previous item.
         * @returns {void} This function does not return a value.
         */
        function showPreviousItem() {
          carouselContent.scrollBy({
            left: -itemWidth,
            behavior: 'smooth'
          });
        }

        nextButton.addEventListener('click', (e) => {
          e.preventDefault();
          showNextItem();
        });

        prevButton.addEventListener('click', (e) => {
          e.preventDefault();
          showPreviousItem();
        });

        // Optional: Adjust itemWidth on window resize
        window.addEventListener('resize', () => {
          itemWidth = items[0].offsetWidth;
        });
      });
    }
  };
})(Drupal);
