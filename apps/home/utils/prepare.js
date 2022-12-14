#!/usr/bin/node

let { readFile, writeFile } = require('fs');

const files = ['apps/home/src/humans.txt', 'apps/home/src/sitemap.xml'].sort();

console.log(`Preparing ${files.length} files`);
files.forEach((file) => {
  console.log(`Preparing ${file}`);

  const split = file.split('.');
  const template = [split[0], 'tmpl', split.slice(1)].join('.');

  readFile(template, 'utf8', function (err, data) {
    if (err) return console.error(err);

    const result = data.replace(/%NOW%/g, new Date().toISOString());

    writeFile(file, result, 'utf8', function (err) {
      if (err) return console.error(err);
    });
  });
});
console.log('Finished preparing files');
