import { existsSync, mkdirSync, writeFileSync } from 'fs';
import Inquirer from 'inquirer';
import { resolve } from 'path';

const createComponent = async function () {
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
      type: 'input',
      name: 'isMemo',
      message: 'Is memo component?',
    },
  ]);

  if (!existsSync(dir)) {
    console.error('Directory not found');
    return;
  }

  const componentDir = resolve(dir, fileName);
  mkdirSync(componentDir);

  writeFileSync(
    resolve(componentDir, `${fileName}.component.tsx`),
    isMemo ? createMemoComponentFileData(name) : createComponentFileData(name),
  );
};

export { createComponent };
