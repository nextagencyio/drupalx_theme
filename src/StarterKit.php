<?php

namespace Drupal\drupalx_theme;

use Drupal\Core\Theme\StarterKitInterface;
use Symfony\Component\Filesystem\Filesystem;

final class StarterKit implements StarterKitInterface {

  /**
   * {@inheritdoc}
   */
  public static function postProcess(string $working_dir, string $machine_name, string $theme_name): void {
    $filesystem = new Filesystem();

    // Path to the environment.js file
    $environment_file = $working_dir . '/.storybook/environment.js';

    // Check if the file exists
    if ($filesystem->exists($environment_file)) {
      // Read the current content
      $content = file_get_contents($environment_file);

      // Replace all occurrences of 'drupalx_theme' with the new machine name
      $updated_content = str_replace('drupalx_theme', $machine_name, $content);

      // Write the updated content back to the file
      file_put_contents($environment_file, $updated_content);
    }
  }
}
