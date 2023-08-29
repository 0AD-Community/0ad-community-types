// @ts-check

const os = require('os');
const fs = require('fs');
const glob = require('glob');
const rimraf = require('rimraf');
const path = require('path');
const { execSync, exec } = require('child_process');

const rootDir = path.join(__dirname, '../0ad/binaries/data/mods');
const outDir = path.join(__dirname, '../generated');
const includes = {
	"l10n": `${rootDir}/mod/globalscripts/l10n.js`,
	"globalscripts": `${rootDir}/public/globalscripts/*.js`,
	"gui": `${rootDir}/public/gui/**/*.js`,
	"simulation": `${rootDir}/public/simulation/**/*.js`
};

rimraf.sync(outDir);

const config =
{
	"compilerOptions": {
		"target": "es2020",
		"lib": ["es2020"],
		"declaration": true,
		"allowJs": true,
		"checkJs": false,
		"emitDeclarationOnly": true,
		"outDir": outDir,
		"rootDir": rootDir
	},
	"include": Object.values(includes),
	"exclude": [
		`${rootDir}/**/test_*.js`,
		`${rootDir}/public/simulation/ai/common-api/baseAI.js`,
		`${rootDir}/public/simulation/components/UnitAI.js`
	]
};

// Clean output directory
console.log(`Cleaning target directory...`);
rimraf.sync(outDir);

// Generate declarations
console.log(`Generating declarations...`);
const tmpFile = path.join(os.tmpdir(), `tsconfig.${Date.now()}.json`);
fs.writeFileSync(tmpFile, JSON.stringify(config, null, 2));
execSync(`tsc -p ${tmpFile}`, { "stdio": 'inherit' });
fs.unlinkSync(tmpFile);

// Generate index files
console.log(`Generating index files...`);
for (const [key, pattern] of Object.entries(includes))
{
	const index = path.join(outDir, `${key}.d.ts`);
	const target = path.join(outDir, path.relative(rootDir, pattern)).replace(/\.js$/, '.d.ts');
	const files = glob.globSync(target)
		.map(f => path.relative(outDir, f));
	fs.writeFileSync(index, files.map(f => `/// <reference path="./${f}" />`).join('\n'));
}

console.log(`Done.`);
