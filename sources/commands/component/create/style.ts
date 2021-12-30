const createStyleFileData = (name: string) => `import { StyleSheet } from 'react-native';

const ${name}Styles = StyleSheet.create({});

export { ${name}Styles };
`;

export { createStyleFileData };
