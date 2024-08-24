type FileToBase64 = (file: File) => Promise<string>;

/**
 * !!!!!! Worning: This is a dummy implementation. !!!!!!
 * Converts a file to a base64 string.
 */
export const fileToBase64: FileToBase64 = async (file: File) => {
  return Promise.resolve("base64");
};
