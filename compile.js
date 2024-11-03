// compile.js
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

const file = process.argv.slice(2).join(' '); // Get the file path from command line arguments

console.log(`Compiling ${file}`);

if (file) {
  compileSass(file);
}
else {
  // Compile all .scss files in the components and src/scss directories
  const sassFiles = glob.sync('{components/**/*.scss,src/scss/**/*.scss}');
  sassFiles.forEach(compileSass);
}
