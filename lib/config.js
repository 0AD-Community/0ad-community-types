// @ts-check
const path = require('path');

// 0ad source directory
const source = path.join(__dirname, '../0ad');

// generated types directory
const target = path.join(__dirname, '../generated');

const index = (key) => path.join(target, `${key}.d.ts`);

// SVN repository to checkout from
const uri = "https://svn.wildfiregames.com/public/ps/trunk";
const mods = 'binaries/data/mods';
const modsDir = path.join(source, mods);

// Directories to checkout from SVN
const checkouts = [
	'source',
	`${mods}/mod/gui`,
	`${mods}/mod/globalscripts`,
	`${mods}/public/globalscripts`,
	`${mods}/public/gui`,
	`${mods}/public/simulation`,
	`${mods}/public/maps/random`,
];

// Files to include in the generated types
const patterns = new Map([
	["modgui", `mod/gui/**/*.js`],
	["l10n", `mod/globalscripts/*.js`],
	["globalscripts", `public/globalscripts/*.js`],
	["gui", `public/gui/**/*.js`],
	["simulation", `public/simulation/**/*.js`],
	["maps", `public/maps/random/*/**/*.js`],
]);

const includes = [...patterns.values()].map(p => path.join(modsDir, p));

// Files to exclude from the generated types
const excludes = [
	`${modsDir}/**/test_*.js`,
	`${modsDir}/public/simulation/ai/common-api/baseAI.js`,
	`${modsDir}/public/simulation/components/UnitAI.js`
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
		"modsDir": modsDir
	},
	"include": includes,
	"exclude": excludes
};

module.exports = {
	uri,
	source,
	modsDir,
	target,
	index,
	checkouts,
	patterns,
	tsconfig
};