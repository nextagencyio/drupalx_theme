const sass = require('sass');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const compileSass = (file) => {
  const result = sass.renderSync({ file });

  let outputDir;

  // Determine output directory based on file path
  if (file.includes('components')) {
    // For components, output in the same directory
    outputDir = path.dirname(file);
  }
  else if (file.includes('src/scss')) {
    // For src/scss, output in the dist/css directory
    outputDir = path.join('dist', 'css');
  }
  else {
    // Default to the same directory if not matching above conditions
    outputDir = path.dirname(file);
  }

  // Ensure the output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  // Get the file name without directory path
  const fileName = path.basename(file, '.scss');

  // Change the extension from .scss to .css
  const outputFile = path.join(outputDir, `${fileName}.css`);

  // Write the compiled CSS to the output file
  fs.writeFileSync(outputFile, result.css);
  console.log(`Compiled ${file} to ${outputFile}`);
};

const copyJsFiles = () => {
  // Create dist/js directory if it doesn't exist
  const jsOutputDir = path.join('dist', 'js');
  fs.mkdirSync(jsOutputDir, { recursive: true });

  // Get all JS files from src/js
  const jsFiles = glob.sync('src/js/**/*.js');

  jsFiles.forEach(file => {
    const fileName = path.basename(file);
    const outputFile = path.join(jsOutputDir, fileName);

    // Copy the file to dist/js
    fs.copyFileSync(file, outputFile);
    console.log(`Copied ${file} to ${outputFile}`);
  });
};

const file = process.argv.slice(2).join(' '); // Get the file path from command line arguments

console.log(`Processing files...`);

if (file) {
  // If a specific file is provided, process only that file
  if (file.endsWith('.scss')) {
    compileSass(file);
  } else if (file.endsWith('.js')) {
    const fileName = path.basename(file);
    const outputFile = path.join('dist', 'js', fileName);
    fs.mkdirSync(path.join('dist', 'js'), { recursive: true });
    fs.copyFileSync(file, outputFile);
    console.log(`Copied ${file} to ${outputFile}`);
  }
} else {
  // Process all .scss files in the components and src/scss directories
  const sassFiles = glob.sync('{components/**/*.scss,src/scss/**/*.scss}');
  sassFiles.forEach(compileSass);

  // Process all .js files in src/js
  copyJsFiles();
}
