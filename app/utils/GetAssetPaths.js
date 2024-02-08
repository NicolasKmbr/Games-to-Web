import { promises as fs } from 'fs'
import path from 'path'

/**
 * The function `GetAssetPaths` takes a directory path relative to the public folder, reads the files
 * in that directory, filters out any unwanted files, and returns an array of file paths prefixed with
 * the given directory path.
 * @param directoryInPublic - The `directoryInPublic` parameter is a string that represents the
 * directory path within the "public" folder where the assets are located.
 * @returns an array of file paths.
 */
export async function GetAssetPaths(directoryInPublic) {
    try {
        const assetDirectory = path.join(process.cwd(), './public' + directoryInPublic);
        const assetFilenames = await fs.readdir(assetDirectory)
        const prefixedFilenames = assetFilenames
                            .filter(item => item !== ".DS_Store")
                            .map(item => directoryInPublic + "/" + item);
        return prefixedFilenames;
    } catch (error) {
        return console.error('Error reading the directory', error);
    }
}
