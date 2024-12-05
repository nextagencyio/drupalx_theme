# DrupalX Theme Starter Kit

[![Cypress](https://github.com/drupalninja/drupalx_theme/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/drupalninja/drupalx_theme/actions/workflows/cypress-tests.yml)
[![Percy](https://github.com/drupalninja/drupalx_theme/actions/workflows/percy.yml/badge.svg)](https://github.com/drupalninja/drupalx_theme/actions/workflows/percy.yml)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/62f323f4/DrupalX-Theme)

The DrupalX theme starter kit is intended to be used with the [DrupalX distribution](https://github.com/drupalninja/drupalx-project).

This starter kit includes [Tailwind CSS](https://tailwindcss.com/), [Storybook](https://storybook.js.org/) and full template integration with the DrupalX install profile.

Public Storybook: https://drupalx.netlify.app/

## Generating the theme

The following commands will generate the new custom theme using the DrupalX starter as the template:

```bash
chmod +x core/scripts/drupal &&
ddev exec --dir /var/www/html/web core/scripts/drupal generate-theme --starterkit=drupalx_theme nameoftheme
```

Enable the new theme:
```bash
ddev . drush theme:en nameoftheme
ddev . drush config-set system.theme default -y nameoftheme
ddev . drush cr
```

## Compiling Theme Assets

If you haven't yet, install nvm:
https://github.com/creationix/nvm

Use the right version of node with the following:
```bash
nvm use
```

_This command will look at your `.nvmrc` file and use the
version node.js specified in it. This ensures all developers
use the same version of node for consistency._

If that version of node isn't installed, install it with the following command:
```bash
nvm install
```

Install npm dependencies:
```bash
npm install
```

## Available Scripts

The theme includes several npm scripts for development and building:

### Development
- `npm run watch`: Run all watch tasks in parallel (Tailwind, components, and stories)
  - `watch:tailwind`: Watch and compile Tailwind CSS changes
  - `watch:components`: Watch and compile component SCSS changes
  - `watch:stories`: Watch and compile Storybook story changes
- `npm run storybook`: Start Storybook development server on port 6006
- `npm run build-storybook`: Build static Storybook site

### Building
- `npm run build`: Run all build tasks (stories, Tailwind CSS, and component compilation)
  - `build:stories`: Build Storybook stories
  - `compile`: Compile theme components

### Linting and Cleaning
- `npm run scss-fix`: Fix SCSS/CSS styling issues
- `npm run lint:js`: Lint and fix JavaScript files
- `npm run lint:sass`: Lint SCSS files
- `npm run clean`: Remove all compiled CSS and JS files
  - `clean:css`: Remove compiled CSS files
  - `clean:js`: Remove compiled JS files

### Testing
- `npm run cypress`: Run Cypress tests
- `npm run percy-storybook`: Run Percy visual regression tests on Storybook components

### Git Hooks
- `npm run postinstall`: Install Husky git hooks
- `npm run prepare`: Install Husky git hooks (alternative command)

### Managing the 'dist' Folder

By default, the .gitignore file does not ignore the dist folder for demonstration purposes. However, in most projects, you will want to ignore this folder.

To do this, you can uncomment the relevant lines in the .gitignore file to ignore the dist folder and its contents. Here are the steps:

#### Update .gitignore:
* Open the .gitignore file.
* Find the lines related to the dist folder, which are commented out.
* Uncomment these lines to ensure the dist folder is ignored by Git.

#### Deploying Your Application:
* If you choose to ignore the dist folder, you will need to incorporate an npm build process when you deploy your application. This ensures that the necessary assets are generated and included in your deployment package.
