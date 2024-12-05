const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function extractArgTypes(content) {
  const properties = {};
  const argTypesMatch = content.match(/argTypes:\s*({[\s\S]*?)\n\s*}\s*;/);

  if (argTypesMatch) {
    const argTypesBlock = argTypesMatch[1];
    const propertyRegex = /(\w+):\s*{([^}]+)}/g;
    let match;

    while ((match = propertyRegex.exec(argTypesBlock)) !== null) {
      const [_, propName, propDef] = match;
      const description = propDef.match(/description:\s*['"]([^'"]+)['"]/)?.[1] || '';
      const control = propDef.match(/control:\s*['"]([^'"]+)['"]/)?.[1] || 'text';

      // Create base property definition
      properties[propName] = {
        type: getTypeFromControl(control),
        title: propName,
        description: description
      };

      // Handle object type controls
      if (control === 'object') {
        properties[propName] = {
          type: 'object',
          title: propName,
          description: description,
          properties: {
            url: { type: 'string' },
            title: { type: 'string' },
            icon: { type: 'string' }
          }
        };
      }

      // Handle select controls
      if (control === 'select') {
        const optionsMatch = propDef.match(/options:\s*\[(.*?)\]/);
        if (optionsMatch) {
          const options = optionsMatch[1].split(',')
            .map(opt => opt.trim().replace(/['"]/g, ''))
            .filter(opt => opt);

          if (options.length > 0) {
            properties[propName].enum = options;
          }
        }
      }
    }
  }

  return properties;
}
function getTypeFromControl(control) {
  switch (control) {
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'object':
      return 'object';
    case 'select':
    case 'text':
    default:
      return 'string';
  }
}

function extractDefaultArgs(content) {
  const defaultArgs = {};
  try {
    // Look for the Default export's args
    const defaultMatch = content.match(/export\s+const\s+Default\s*=\s*{[\s\S]*?args:\s*({[\s\S]*?})\s*}/);

    if (defaultMatch) {
      const argsStr = defaultMatch[1];
      // Create a safe evaluation context
      const args = new Function(`return ${argsStr}`)();
      return args;
    }
  } catch (e) {
    console.warn('Warning: Failed to parse default args');
  }
  return defaultArgs;
}

function convertStoryToYml(storyPath, outputPath) {
  try {
    const storyContent = fs.readFileSync(storyPath, 'utf8');

    // Extract title
    const titleMatch = storyContent.match(/title:\s*['"]([^'"]+)['"]/);
    const title = titleMatch ? titleMatch[1] : 'Component';
    const name = title.split('/').pop();

    // Extract properties and default values
    const properties = extractArgTypes(storyContent);
    const defaultArgs = extractDefaultArgs(storyContent);

    // Merge default values into properties
    Object.entries(defaultArgs).forEach(([key, value]) => {
      if (properties[key]) {
        properties[key].default = value;
      }
    });

    // Build component configuration
    const componentConfig = {
      $schema: 'https://git.drupalcode.org/project/drupal/-/raw/10.1.x/core/modules/sdc/src/metadata.schema.json',
      name,
      description: `${title} component`,
      props: {
        type: 'object',
        properties: properties
      }
    };

    // Check for behavior.js file
    const dirName = path.dirname(storyPath);
    const componentName = path.basename(storyPath).split('.')[0];
    const behaviorPath = path.join(dirName, `${componentName}.behavior.js`);

    if (fs.existsSync(behaviorPath)) {
      componentConfig.libraryOverrides = {
        js: {
          [`${componentName}.behavior.js`]: {
            attributes: {
              async: false,
              defer: true
            }
          }
        },
        dependencies: [
          'core/drupal'
        ]
      };
    }

    // Convert to YAML
    const yamlContent = yaml.dump(componentConfig, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      sortKeys: false
    });

    fs.writeFileSync(outputPath, yamlContent);
    console.log(`Successfully converted ${storyPath} to ${outputPath}`);

  } catch (error) {
    console.error('Error converting story to YML:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  const storyPath = process.argv[2];
  const outputPath = process.argv[3];

  if (!storyPath || !outputPath) {
    console.log('Usage: node story-to-yml.js <story-path> <output-path>');
    process.exit(1);
  }

  convertStoryToYml(storyPath, outputPath);
}

module.exports = { convertStoryToYml };
