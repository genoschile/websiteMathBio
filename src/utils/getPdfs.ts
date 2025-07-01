import fs from 'node:fs';
import path from 'node:path';

const dirnamePdfs = path.resolve('./public/publications');

export function getPDFsFromPublicFolder(folder = 'publications') {
  const dirPath = path.resolve('./public', folder);

  if (!fs.existsSync(dirPath)) {
    console.error(`[getPDFsFromPublicFolder] Carpeta no encontrada: ${dirPath}`);
    return [];
  }

  const files = fs.readdirSync(dirPath);

  return files
    .filter((file) => file.endsWith('.pdf'))
    .map((file) => ({
      filename: file,
      url: `/${folder}/${file}`,
    }));
}
