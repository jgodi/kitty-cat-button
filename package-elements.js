const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/kitty-cat-button/runtime.js',
    './dist/kitty-cat-button/polyfills.js',
    './dist/kitty-cat-button/main.js',
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/kitty-cat-button.js');
})();
