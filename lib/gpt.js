const fs = require('fs');
const glob = require('glob');
const os = require('os');
const utils = require('./utils');
const config = require('./config');
const { rimraf } = require('rimraf');
const path = require('path');

const engineFiles = glob.sync('engine/**/*.d.ts');

// Find all JSInterface_*.cpp files or *.cpp files for each engine method
const regex_file = /engine\/(?<namespace>\w+)\/(?<method>\w+)\.d\.ts/;
const regex_func = /function (\w+)\(/gm;

const modulesMap = new Map();

for (const file of engineFiles)
{
	const match = regex_file.exec(file);
	if (!match) continue;
	const { namespace, method } = match.groups;

	const body = fs.readFileSync(file, 'utf8');

	let m;
	const methods = [];
	// eslint-disable-next-line no-cond-assign
	while (m = regex_func.exec(body))
	{
		const func = m[1];
		methods.push(func);
	}
	const f1 = glob.sync(`${config.source}/source/${namespace}/**/JSInterface_${method}.cpp`);
	const f2 = glob.sync(`${config.source}/source//${namespace}/**/${method}.cpp`);

	if (f1.length !== 1 && f2.length !== 1) continue;

	const cpp = f1[0] || f2[0];

	modulesMap.set(file, { method, namespace, cpp, methods });

}

// load public methods
const files = glob.sync(`${config.source}/**/*.js`);
const regex_engine = /Engine\.(\w+)\(/;

const methodsMap = new Map();
for (const file of files)
{
	if (file.includes('test')) continue;
	const body = fs.readFileSync(file, 'utf8');
	const lines = body.split('\n');
	const matches = utils.matchLines(body, regex_engine);

	for (const { line, match } of matches)
	{
		const method = match[1];
		methodsMap.set(method, methodsMap.get(method) || []);

		const begin = Math.max(0, line - 2);
		const end = Math.min(lines.length, line + 2);
		const result = lines.slice(begin, end).join('\n');

		methodsMap.get(method).push({
			file,
			result,
		});
	}
}

const modulesDir = 'gpt';
rimraf.sync(modulesDir);
fs.mkdirSync(modulesDir);

for (const [file, def] of modulesMap)
{
	const markdown = path.join(modulesDir, `${def.namespace}-${def.method}.md`);

	let body = '';
	body += `# Instructions for GPT:\n\n`;
	body += `Please fix and annotate the declaration file for the module (${def.namespace}.${def.method})\n`;
	body += `Based on the implementation file and the usage examples\n\n`;
	body += `## Declaration file: ${file}\n\n`;
	body += "```ts\n";
	body += fs.readFileSync(file, 'utf8');
	body += "```\n\n";

	body += `## Implementation file: ${def.cpp}\n\n`;
	body += "```cpp\n";
	body += fs.readFileSync(def.cpp, 'utf8');
	body += "```\n\n";

	body += `## Usage Examples in javascript\n\n`;
	for(const method of def.methods)
	{
		let res = methodsMap.get(method);
		if (!res) continue;
		res = res.slice(0, 5);
		body += `### ${method}\n\n`;
		for(const { result } of res)
		{
			body += "```js\n";
			body += `${result}\n`;
			body += "```\n\n";
		}

	}
	body += "\n\n";

	fs.writeFileSync(markdown, body, 'utf8');
}