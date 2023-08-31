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
	const cpp = glob.sync(`${config.source}/source/${namespace}/**/{JSInterface_${method},${method}}.cpp`);
	if (cpp.length === 0) continue;
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

	body += `## Current Declaration file (which should be fixed): ${file}\n\n`;
	body += "```ts\n";
	body += fs.readFileSync(file, 'utf8');
	body += "```\n\n";

	for (const cpp of def.cpp)
	{
		body += `## Implementation file: ${path.relative(config.source, cpp)}\n\n`;
		body += "```cpp\n";
		body += fs.readFileSync(cpp, 'utf8');
		body += "```\n\n";
	}

	let methodsBody = '';
	for(const method of def.methods)
	{
		let res = methodsMap.get(method);
		if (!res) continue;
		res = res.slice(0, 5);
		methodsBody += `### ${method}\n\n`;
		for(const { result } of res)
		{
			methodsBody += "```js\n";
			methodsBody += `${result}\n`;
			methodsBody += "```\n\n";
		}
	}
	if (methodsBody.length > 0)
	{
		body += `## Usage Examples in javascript\n\n`;
		body += methodsBody;
	}

	body += "\n\n";

	fs.writeFileSync(markdown, body, 'utf8');
}