import { readdir } from 'fs/promises'

const directories = async source => {
    let files = await readdir(source, { withFileTypes: true });
    return files.filter(entry => entry.isDirectory())
        .map(entry => entry.name);
}

export default directories;
