const baseEnvironments = process.argv[2] ?? '';
const headEnvironments = process.argv[3] ?? '';
const bases = baseEnvironments.split(',');
const heads = headEnvironments.split(',');

const pairs = [];
let environments = [...bases, ...heads];

// remove duplicates
environments = environments.filter((item, index) => environments.indexOf(item) === index);

for(const environment of environments){
    pairs.push({
        'environment': environment,
        'hasBase': bases.includes(environment),
        'hasHead': heads.includes(environment),
    });
}

console.log(JSON.stringify(pairs));