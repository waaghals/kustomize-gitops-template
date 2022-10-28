import { R_OK } from 'fs';
import { readdir, access } from 'fs/promises'


const kustomizeDirectories = async source => {
    const entries = await readdir(source, { withFileTypes: true });
    const found = [];
    for (const entry of entries) {
        if (!entry.isDirectory) {
            break;
        }

        const path = `${source}/${entry.name}`;
        if (await isKustomizationDir(path)) {
            found.push(path);

        } else {
            for (const directory of await kustomizeDirectories(path)) {
                found.push(directory);
            }
        }
    }

    return found;
}

const isKustomizationDir = async directory => {
    const fileName = `${directory}/kustomization.yaml`;
    try {
        await access(fileName, R_OK);
        return true;
    } catch {
        return false;
    }
}

export default kustomizeDirectories;
