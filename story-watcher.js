const path = require('path');
const { execSync } = require('child_process');

// Get the story file path from the command line argument
const storyPath = process.argv[2];

if (!storyPath) {
  console.error('No story path provided');
  process.exit(1);
}

// Construct the output path
const parsedPath = path.parse(storyPath);
const outputPath = path.join(
  parsedPath.dir,
  `${parsedPath.name.replace('.stories', '')}.component.yml`
);

try {
  // Run the story-to-yml script with the correct paths
  execSync(`node story-to-yml.js "${storyPath}" "${outputPath}"`, {
    stdio: 'inherit'
  });
} catch (error) {
  console.error('Error running story-to-yml:', error);
  process.exit(1);
}
