const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { convertStoryToYml } = require('./story-to-yml');

async function buildAllStories() {
  try {
    // Find all story files in the components directory
    const storyFiles = glob.sync('components/**/*.stories.js');

    console.log(`Found ${storyFiles.length} story files to process...`);

    // Process each story file
    for (const storyPath of storyFiles) {
      try {
        // Generate output path by replacing .stories.js with .component.yml
        const outputPath = storyPath.replace('.stories.js', '.component.yml');

        // Convert the story
        await convertStoryToYml(storyPath, outputPath);
        console.log(`✓ Converted ${path.basename(storyPath)}`);
      } catch (error) {
        console.error(`✗ Failed to convert ${storyPath}:`, error.message);
      }
    }

    console.log('\nStory conversion complete!');
  } catch (error) {
    console.error('Error building stories:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  buildAllStories();
}

module.exports = { buildAllStories };
