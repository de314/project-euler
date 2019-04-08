const problem = `${process.argv[2]}`.padStart(4, '0');

const runner = require(`./${problem}.js`);

console.log(runner.info.title);
console.log('---');
console.log(runner.info.description);
console.log('---');
console.log(runner.run());
