const createExportFileData = (fileName: string) => `export * from './${fileName}.component';
export * from './${fileName}.style';
export * from './${fileName}.type';
`;

export { createExportFileData };
