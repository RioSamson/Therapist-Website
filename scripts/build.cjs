const fs = require('node:fs');
const ids = ['12','11','13','14','15','16','17','01','02','04','05','06','08','09','10'];
const concepts = ids.map((id, index) => ({
  id, display: index + 1,
  ...JSON.parse(fs.readFileSync(`concepts/${id}.json`, 'utf8')),
  html: fs.readFileSync(`concepts/${id}.html`, 'utf8')
}));
const template = fs.readFileSync('scripts/gallery-template.html', 'utf8');
const report = fs.readFileSync('research/report.html', 'utf8');
fs.writeFileSync('index.html', template
  .replace('/*CONCEPT_DATA*/', () => JSON.stringify(concepts).replace(/</g, '\\u003c'))
  .replace('<!--RESEARCH-->', () => report));
console.log(`Built gallery with ${concepts.length} concepts.`);
