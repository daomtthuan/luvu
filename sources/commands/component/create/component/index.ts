import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

export const createDefaultComponentFile = (componentDir: string, fileName: string, componentName: string) => {
  const templateFilePath = resolve(__dirname, './templates/default.txt');
  const template = readFileSync(templateFilePath)
    .toString()
    .replace(/__NAME__/g, componentName)
    .replace(/__FILE_NAME__/g, fileName);

  const componentFilePath = resolve(componentDir, `${fileName}.component.tsx`);
  writeFileSync(componentFilePath, template);
};
