import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

export const createDefaultTypeFile = (componentDir: string, fileName: string, componentName: string) => {
  const templateFilePath = resolve(__dirname, './templates/default.txt');
  const template = readFileSync(templateFilePath)
    .toString()
    .replace(/__NAME__/g, componentName);

  const typeFilePath = resolve(componentDir, `${fileName}.type.ts`);
  writeFileSync(typeFilePath, template);
};
