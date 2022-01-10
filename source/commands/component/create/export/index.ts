import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

export const createDefaultExportFile = (componentDir: string, fileName: string) => {
  const templateFilePath = resolve(__dirname, './templates/default.txt');
  const template = readFileSync(templateFilePath)
    .toString()
    .replace(/__FILE_NAME__/g, fileName);

  const componentFilePath = resolve(componentDir, 'index.ts');
  writeFileSync(componentFilePath, template);
};
