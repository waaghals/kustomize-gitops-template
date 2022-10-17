import { spawn } from 'child_process';

const command = async (...command) => {
    let child = spawn(command[0], command.slice(1));

    let data = "";
    for await (const chunk of child.stdout) {
        data += chunk;
    }

    let error = "";
    for await (const chunk of child.stderr) {
        error += chunk;
    }

    const exitCode = await new Promise((resolve) => {
        child.on('close', resolve);
    });
    if (exitCode) {
        throw new Error(`subprocess returned error ${exitCode} with error: ${error}`);
    }
    return data;
}

export default command;
