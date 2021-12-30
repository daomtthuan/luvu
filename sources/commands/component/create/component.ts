const createComponentFileData = (name: string, fileName: string) => `import { memo } from 'react';

import { ${name}Styles } from './${fileName}.style';
import { ${name}Component } from './${fileName}.type';

const styles = ${name}Styles;

const ${name}: ${name}Component = () => {
  return <></>;
};

export { ${name} };
`;

const createMemoComponentFileData = (name: string, fileName: string) => `import { memo } from 'react';

import { ${name}Styles } from './${fileName}.style';
import { ${name}Component } from './${fileName}.type';

const styles = ${name}Styles;

const ${name}: ${name}Component = memo(() => {
  return <></>;
});

export { ${name} };
`;

export { createComponentFileData, createMemoComponentFileData };
