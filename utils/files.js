let uploadedFiles = [];

export const addFile = (fileName) => {
  uploadedFiles.push(fileName);
};

export const getFiles = () => uploadedFiles;
