#!/usr/bin/node

let { readFile, writeFile } = require('fs');

const file = 'apps/home/src/humans.txt';

readFile(file + '.tmpl', 'utf8', function (err, data) {
  if (err) return console.error(err);

  const result = data.replace(/%NOW%/g, new Date().toISOString());

  writeFile(file, result, 'utf8', function (err) {
    if (err) return console.error(err);
  });
});