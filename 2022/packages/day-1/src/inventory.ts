import { readFileSync } from "fs";

export type ElfInventory = number[];

export type GroupInventory = ElfInventory[];

export function readInventoryFile(filePath: string): GroupInventory {
  const groupInventoryString = readFileSync(filePath).toString();
  const elfInventoryStrings = extractElfInventoryStrings(groupInventoryString);
  const elfInventories = elfInventoryStrings.map(parseElfInventoryString);
  return elfInventories;
}

function extractElfInventoryStrings(groupInventoryString: string): string[] {
  return groupInventoryString.split("\n\n");
}

function parseElfInventoryString(elfInventoryString: string): number[] {
  return elfInventoryString.split("\n").map((itemStr) => Number(itemStr));
}
