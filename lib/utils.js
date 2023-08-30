// @ts-check
const fs = require('fs');
const os = require('os');
const path = require('path');
const rimraf = require('rimraf');
const { execSync } = require('child_process');

/**
 * @param {string} directory
 * @param {boolean} [clean=true]
 */
function resetDirectory(directory, clean = true)
{
	if (clean)
		rimraf.sync(directory);
	fs.mkdirSync(directory, { "recursive": true });
}

/**
 * Create a temporary tsconfig.json file and compiles it.
 * @param {Object} tsConfig
 */
function compileTsc(tsConfig)
{
	const tmpFile = path.join(os.tmpdir(), `tsconfig.${Date.now()}.json`);
	fs.writeFileSync(tmpFile, JSON.stringify(tsConfig, null, 2));
	execSync(`tsc -p ${tmpFile}`, { "stdio": 'inherit' });
	fs.unlinkSync(tmpFile);
}

/**
 * @param {string} text
 * @param {RegExp} regex
 * @returns
 */
function matchLines(text, regex)
{
	const lines = text.split('\n');
	const matches = [];
	let match;
	for (let i = 0; i < lines.length; i++)
	{
		// eslint-disable-next-line no-cond-assign
		if (match = regex.exec(lines[i]))
		{
			matches.push({ "line": i, match });
		}
	}
	return matches;
}


module.exports = {
	compileTsc,
	resetDirectory,
	matchLines,
};