import { readdir } from 'fs/promises'
import { resolve } from 'path'

const getDirectories = async source => {
    let files = await readdir(source, { withFileTypes: true });
    return files.filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

const argument = process.argv[2] ?? '.';
const directory = resolve(process.cwd(), argument);
let directories = await getDirectories(directory);

console.log(JSON.stringify(directories));
