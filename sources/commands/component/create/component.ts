const createComponentFileData = (name: string) => `import { memo } from 'react';

import { ${name}Styles } from './.style';
import { ${name}Component } from './.type';

const styles = ${name}Styles;

const ${name}: ${name}Component = function () {
  return <></>;
};

export { ${name} };
`;

const createMemoComponentFileData = (name: string) => `import { memo } from 'react';

import { ${name}Styles } from './.style';
import { ${name}Component } from './.type';

const styles = ${name}Styles;

const ${name}: ${name}Component = memo(function () {
  return <></>;
});

export { ${name} };
`;
