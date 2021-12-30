import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import Inquirer from 'inquirer';
import { resolve } from 'path';

import { createComponentFileData, createMemoComponentFileData } from './component';
import { createExportFileData } from './export';
import { createStyleFileData } from './style';
import { createMemoTypeFileData, createTypeFileData } from './type';

const createComponent = async () => {
  const { dir, fileName, name, isMemo } = await Inquirer.prompt([
    {
      type: 'input',
      name: 'dir',
      message: 'Directory:',
    },
    {
      type: 'input',
      name: 'fileName',
      message: 'File name:',
    },
    {
      type: 'input',
      name: 'name',
      message: 'Component name:',
    },
    {
      type: 'confirm',
      name: 'isMemo',
      message: 'Is memo component?',
      default: true,
    },
  ]);

  if (!existsSync(dir)) {
    console.error('Directory not exists');
    return;
  }

  const componentDir = resolve(dir, fileName);
  if (existsSync(componentDir)) {
    const { override } = await Inquirer.prompt({
      type: 'confirm',
      name: 'override',
      message: 'Component already exists. Override?',
      default: false,
    });

    if (!override) {
      return;
    }
    rmSync(componentDir, { recursive: true });
  }

  mkdirSync(componentDir);

  writeFileSync(
    resolve(componentDir, `${fileName}.component.tsx`),
    isMemo ? createMemoComponentFileData(name, fileName) : createComponentFileData(name, fileName),
  );
  writeFileSync(
    resolve(componentDir, `${fileName}.type.ts`),
    isMemo ? createMemoTypeFileData(name) : createTypeFileData(name),
  );
  writeFileSync(resolve(componentDir, `${fileName}.style.ts`), createStyleFileData(name));
  writeFileSync(resolve(componentDir, 'index.ts'), createExportFileData(fileName));
};

export { createComponent };
