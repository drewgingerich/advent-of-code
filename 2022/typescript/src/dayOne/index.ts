import { readFileSync } from "fs";
import { sortDescending, sum } from "../utils/array";

type ElfInventory = number[];
type GroupInventory = ElfInventory[];

function main() {
  const solutionOne = solvePartOne();
  console.log(`Part one: ${solutionOne}`);

  const solutionTwo = solvePartTwo();
  console.log(`Part two: ${solutionTwo}`);
}

function solvePartOne() {
  const elfInventories = readInventoryFile("./input.txt");
  const elfInventoryCalories = elfInventories.map(sum);
  const sortedCalories = sortDescending(elfInventoryCalories);

  return sortedCalories[0];
}

function solvePartTwo() {
  const elfInventories = readInventoryFile("./input.txt");
  const elfInventoryCalories = elfInventories.map(sum);
  const sortedCalories = sortDescending(elfInventoryCalories);

  const largestThree = sortedCalories.slice(0, 4);
  return sum(largestThree);
}

function readInventoryFile(filePath: string): GroupInventory {
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

main();
