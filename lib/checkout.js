// @ts-check

const rimraf = require('rimraf');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const uri = 'https://svn.wildfiregames.com/public/ps/trunk';

const rootDir = path.join(__dirname, '../0ad');
rimraf.sync(rootDir);
fs.mkdirSync(rootDir);

const dirs = [
	"binaries/data/mods/mod/globalscripts",
	"binaries/data/mods/public/globalscripts",
	"binaries/data/mods/public/gui",
	"binaries/data/mods/public/simulation",
];

for (const dir of dirs)
{
	execSync(`svn co --depth infinity ${uri}/${dir} ${dir}`, { "stdio": 'inherit', "cwd": rootDir });
}
