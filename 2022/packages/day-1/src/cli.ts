export interface CLIArgs {
  inputFilePath: string;
}

export function parseCLIArgs(): CLIArgs {
  const inputFilePath = process.argv[2];
  return {
    inputFilePath,
  };
}
