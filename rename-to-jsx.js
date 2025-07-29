const fs = require('fs');
const path = require('path');

// Files to rename
const filesToRename = [
  'src/App.js',
  'src/components/DroneCard.js',
  'src/components/Footer.js',
  'src/components/HappyCustomers.js',
  'src/components/Header.js',
  'src/components/PrivacyPolicy.js',
  'src/components/ServiceCard.js',
  'src/components/ServiceCategoryPage.js',
  'src/components/ServicesSection.js',
  'src/pages/PrivacyPolicy.js',
  'src/pages/ServiceCategoryPage.js'
];

// Rename files
filesToRename.forEach(oldPath => {
  const newPath = oldPath.replace(/\.js$/, '.jsx');
  try {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${oldPath} -> ${newPath}`);
  } catch (err) {
    console.error(`Error renaming ${oldPath}:`, err.message);
  }
});

// Function to update imports in all files
function updateImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Update import/require statements
    filesToRename.forEach(oldPath => {
      const oldImport = oldPath.replace('src/', './').replace(/\.js$/, '');
      const newImport = oldPath.replace('src/', './').replace(/\.js$/, '.jsx');
      
      // Handle both import and require statements
      const importRegex = new RegExp(`(['"])${oldImport.replace(/\//g, '\\/')}(['"])`, 'g');
      if (importRegex.test(content)) {
        content = content.replace(importRegex, `$1${newImport}$2`);
        updated = true;
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated imports in: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

// Find all JS/JSX files to update imports in
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      updateImportsInFile(fullPath);
    }
  });
}

// Start processing from the src directory
processDirectory('src');
console.log('File renaming and import updates completed!');
