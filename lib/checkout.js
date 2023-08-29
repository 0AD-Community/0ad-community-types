// @ts-check
const { execSync } = require('child_process');
const config = require('./config');
const utils = require('./utils');

utils.resetDirecotry(config.source);

for (const dir of config.checkouts)
{
	execSync(`svn co --depth infinity ${config.uri}/${dir} ${dir}`, {
		"stdio": 'inherit',
		"cwd": config.source,
	});
}
