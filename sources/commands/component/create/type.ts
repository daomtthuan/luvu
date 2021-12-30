const createTypeFileData = (name: string) => `import { FunctionComponent, PropsWithoutRef } from 'react';

type ${name}Props = PropsWithoutRef<{}>;

type ${name}Component = FunctionComponent<${name}Props>;

export { ${name}Props, ${name}Component };
`;

const createMemoTypeFileData = (name: string) => `import { ExoticComponent, PropsWithoutRef } from 'react';

type ${name}Props = PropsWithoutRef<{}>;

type ${name}Component = ExoticComponent<${name}Props>;

export { ${name}Props, ${name}Component };
`;

export { createMemoTypeFileData, createTypeFileData };
