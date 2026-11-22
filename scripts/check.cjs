const fs = require('node:fs');
const vm = require('node:vm');
const cp = require('node:child_process');
const paths = cp.execFileSync('git', ['ls-files'], {encoding:'utf8'}).trim().split('\n').filter(Boolean);
let count = 0;
for (const path of paths) {
  const text = fs.readFileSync(path, 'utf8');
  if (/\/(?:Users|home)\/[^\s/]+\//.test(text)) throw new Error(`Local path in ${path}`);
  if (/\b(?:AKIA[0-9A-Z]{16}|gh[pousr]_[A-Za-z0-9]{20,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY)/.test(text)) throw new Error(`Potential secret in ${path}`);
  if (path.endsWith('.html')) {
    for (const match of text.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
      new vm.Script(match[1].replace('/*CONCEPT_DATA*/', '[]'), {filename:path}); count++;
    }
  }
  if (path.endsWith('.json')) JSON.parse(text);
}
console.log(`Checked ${paths.length} tracked files and ${count} inline scripts.`);
