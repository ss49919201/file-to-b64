import { readFileSync } from "fs";

type FileToBase64 = (filePath: string) => string;

/**
 * Converts a file to a base64 string.
 * @param {string} filePath - The path to the file.
 * @returns {string} The base64 string.
 */
export const fileToBase64: FileToBase64 = (filePath: string) => {
  return readFileSync(filePath).toString("base64");
};
