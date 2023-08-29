// @ts-check
const fs = require('fs');
const glob = require('glob');
const config = require('./config');
const utils = require('./utils');
const constants = require('./constants');

// Clean output directory
console.log(`Cleaning target directory...`);
utils.resetDirecotry(config.target);

// Generate declarations
console.log(`Generating declarations...`);
utils.compileTsc(config.tsconfig);

// Generate index files
console.log(`Generating index files...`);
for (const [key, pattern] of config.patterns)
{
	const index = config.index(key);
	const files = glob.sync(pattern.replace(/\.js$/, '.d.ts'), { "cwd": config.target });
	fs.writeFileSync(index, files.map(f => `/// <reference path="./${f}" />`).join('\n'));
}

// Generate IID and MT index files
console.log(`Generating IID / MT index files...`);
constants.createConstants();



console.log(`Done.`);
