// @ts-check
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const config = require('./config');

const createConstants = () => {

	const files = glob.sync(`**/*.js`, { "cwd": config.modsDir });
	const REGEX_IID = /(IID_\w+)/g;
	const REGEX_MT = /(MT_\w+)/g;

	const iidSet = new Set();
	const mtSet = new Set();

	for (const file of files)
	{
		if (file.includes('test')) continue;
		const filename = path.join(config.modsDir, file);
		const body = fs.readFileSync(filename, 'utf8');

		let match;
		// eslint-disable-next-line no-cond-assign
		while (match = REGEX_IID.exec(body))
			iidSet.add(match[1]);

		// eslint-disable-next-line no-cond-assign
		while (match = REGEX_MT.exec(body))
			mtSet.add(match[1]);
	}

	/**
 * @param {string} name
 * @param {Set<string>} set
 */
	const buildIndex = (name, set) => {
		const values = [...set].sort();
		const index = config.index(name);
		let body =	'';
		body += values.map(d => `declare const ${d}: number;`).join('\n');
		body += '\n\n';
		body += `type ${name}Type =`;
		body += '\n';
		body += `${values.map(d => `\ttypeof ${d}`).join(' |\n')};`;
		body += '\n';
		fs.writeFileSync(index, body, 'utf8');
	};

	buildIndex('IID', iidSet);
	buildIndex('MT', mtSet);
};

module.exports = {
	createConstants,
};

