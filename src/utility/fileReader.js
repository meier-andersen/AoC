import { promises as fs } from 'fs';

export async function readFileAndReturnArray(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const linesArray = data.split(/\r?\n/);
        return linesArray;
    } catch (error) {
        console.error("Error reading file:", error);
        throw error;
    }
}