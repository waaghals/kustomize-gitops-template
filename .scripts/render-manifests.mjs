import { resolve } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import directories from './lib/directories.mjs';
import command from './lib/command.mjs';

const cwd = process.cwd();
const searchDirectory = resolve(cwd, process.argv[2] ?? '.');
const outputDirectory = resolve(cwd, process.argv[3] ?? '.');

await mkdir(outputDirectory, { recursive: true })

const overlays = await directories(searchDirectory);
const writeManifest = async (overlayDirectory, outputFile) => {
    const manifest = await command('kustomize', 'build', overlayDirectory);

    await writeFile(outputFile, manifest);
}

const writes = overlays.map(overlay => writeManifest(`${searchDirectory}/${overlay}`, `${outputDirectory}/${overlay}.yaml`));
await Promise.all(writes);
