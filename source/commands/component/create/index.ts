import { existsSync, mkdirSync, rmSync } from 'fs';
import Inquirer from 'inquirer';
import { resolve } from 'path';

import { createDefaultComponentFile } from './component';
import { createDefaultExportFile } from './export';
import { createDefaultStyleFile } from './style';
import { createDefaultTypeFile } from './type';

enum ComponentType {
  default = 'Default',
}

export const createComponent = async () => {
  const { dir, fileName, componentName, type } = await Inquirer.prompt([
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
      name: 'componentName',
      message: 'Component name:',
    },
    {
      type: 'list',
      name: 'type',
      message: 'Type component?',
      choices: Object.values(ComponentType),
      default: ComponentType.default,
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

  switch (type) {
    case ComponentType.default:
      createDefaultComponentFile(componentDir, fileName, componentName);
      createDefaultStyleFile(componentDir, fileName, componentName);
      createDefaultTypeFile(componentDir, fileName, componentName);
      createDefaultExportFile(componentDir, fileName);
      break;
  }
};
