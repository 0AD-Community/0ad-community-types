// @ts-check
const path = require('path');

// 0ad source directory
const source = path.join(__dirname, '../0ad/binaries/data/mods');
// generated types directory
const target = path.join(__dirname, '../generated');

const index = (key) => path.join(target, `${key}.d.ts`);

// SVN repository to checkout from
const uri = "https://svn.wildfiregames.com/public/ps/trunk";
const prefix = 'binaries/data/mods';

// Directories to checkout from SVN
const checkouts = [
	"binaries/data/mods/mod/globalscripts",
	"binaries/data/mods/public/globalscripts",
	"binaries/data/mods/public/gui",
	"binaries/data/mods/public/simulation",
	"binaries/data/mods/public/maps/random",
];

// Files to include in the generated types
const patterns = new Map([
	["l10n", `mod/globalscripts/l10n.js`],
	["globalscripts", `public/globalscripts/*.js`],
	["gui", `public/gui/**/*.js`],
	["simulation", `public/simulation/**/*.js`],
	["maps", `public/maps/random/*/**/*.js`],
]);

const includes = [...patterns.values()].map(p => path.join(source, p));

// Files to exclude from the generated types
const excludes = [
	`${source}/**/test_*.js`,
	`${source}/public/simulation/ai/common-api/baseAI.js`,
	`${source}/public/simulation/components/UnitAI.js`
];

// tsconfig.json
const tsconfig =
{
	"compilerOptions": {
		"target": "es2020",
		"lib": ["es2020"],
		"declaration": true,
		"allowJs": true,
		"checkJs": false,
		"emitDeclarationOnly": true,
		"outDir": target,
		"rootDir": source
	},
	"include": includes,
	"exclude": excludes
};

module.exports = {
	uri,
	prefix,
	source,
	target,
	index,
	checkouts,
	patterns,
	tsconfig
};