// @ts-check
const fs = require('fs');
const os = require('os');
const path = require('path');
const rimraf = require('rimraf');
const { execSync } = require('child_process');

/**
 * @param {string} directory
 */
function resetDirecotry(directory)
{
	rimraf.sync(directory);
	fs.mkdirSync(directory);
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

module.exports = {
	compileTsc,
	resetDirecotry,
};