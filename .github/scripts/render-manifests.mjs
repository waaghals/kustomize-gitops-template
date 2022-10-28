import path from 'path'
import fs from 'fs/promises'
import kustomizeDirectories from './lib/directories.mjs';
import command from './lib/command.mjs';

const cwd = process.cwd();
const searchDirectory = path.resolve(cwd, process.argv[2] ?? '.');
const outputDirectory = path.resolve(cwd, process.argv[3] ?? '.');
const overlays = await kustomizeDirectories(searchDirectory);

const createOutputDir = async outputFile => {
    const directory = outputFile.substring(0, outputFile.lastIndexOf("/"));

    await fs.mkdir(directory, { recursive: true });
};
const writeManifest = async (overlayDirectory, outputFile) => {
    const manifest = await command('kustomize', 'build', overlayDirectory);

    await createOutputDir(outputFile);
    await fs.writeFile(outputFile, manifest);
};

const writes = overlays.map(overlay => {

    const relativePath = path.relative(searchDirectory, overlay);
    writeManifest(overlay, `${outputDirectory}/${relativePath}.yaml`);
});
await Promise.all(writes);
