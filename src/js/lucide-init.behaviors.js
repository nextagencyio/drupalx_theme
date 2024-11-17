(function (Drupal) {
  'use strict';

  Drupal.behaviors.lucideIcons = {
    attach: function (context, settings) {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  };
})(Drupal);
