// @ts-check
const { execSync } = require('child_process');
const config = require('./config');
const utils = require('./utils');

utils.resetDirectory(config.source, false);

for (const dir of config.checkouts)
{
	try {
		const res = execSync(`svn info ${dir}`, { "cwd": config.source });
		execSync(`svn up ${dir}`, {
			"stdio": 'inherit',
			"cwd": config.source,
		});
	} catch (e) {
		execSync(`svn co --depth infinity ${config.uri}/${dir} ${dir}`, {
			"stdio": 'inherit',
			"cwd": config.source,
		});
	}

}
