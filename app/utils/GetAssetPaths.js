import { promises as fs } from 'fs'
import path from 'path'

// using process.cwd() to get the path
// fs.readdir to get all files in directory
export async function GetAssetPaths() {
    try {
        const assetDirectory = path.join(process.cwd(), './public/Deck_of_Cards');
        const assetFilenames = await fs.readdir(assetDirectory)
        const prefixedFilenames = assetFilenames
                            .filter(item => item !== ".DS_Store")
                            .map(item => "/Deck_of_Cards/" + item);
        return prefixedFilenames;
    } catch (error) {
        return console.error('Error reading the directory', error);
    }
}
