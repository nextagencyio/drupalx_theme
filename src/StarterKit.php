<?php

namespace Drupal\drupalx_theme;

use Drupal\Core\Theme\StarterKitInterface;
use Symfony\Component\Filesystem\Filesystem;

final class StarterKit implements StarterKitInterface {

  /**
   * {@inheritdoc}
   */
  public static function postProcess(string $working_dir, string $machine_name, string $theme_name): void {
    $readme_file = "$working_dir/README.md";
    try {
      file_put_contents($readme_file, "$theme_name theme, generated from drupalx_theme. Additional information on generating themes can be found in the [Starterkit documentation](https://www.drupal.org/docs/core-modules-and-themes/core-themes/starterkit-theme).");
    }
    catch (\Throwable $th) {
    }

    $hidden_files = [
      '_husky',
      '_storybook',
      '_editorconfig',
      '_eslintignore',
      '_eslintrc.json',
      '_gitignore',
      '_nvmrc',
      '_prettierrc.json',
      '_stylelintrc.yml',
    ];

    $fs = new Filesystem();
    foreach ($hidden_files as $file) {
      $fs->rename("$working_dir/src/hidden/$file", "$working_dir/." . ltrim($file, '_'));
    }
  }

}
