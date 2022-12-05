import { parseCLIArgs } from "./cli";
import { readInventoryFile } from "./inventory";
import { sortDescending, sum } from "./array";

function main() {
  const args = parseCLIArgs();
  const elfInventories = readInventoryFile(args.inputFilePath);
  const elfInventoryCalories = elfInventories.map(sum);
  const sortedCalories = sortDescending(elfInventoryCalories);
  console.log(sortedCalories);

  const largest = sortedCalories[0];
  console.log("The largest amount of calories a single elf carries is:");
  console.log(largest);

  const largestThree = sortedCalories.slice(0, 4);
  const largestThreeSum = sum(largestThree);
  console.log(
    "The sum of the three largest amounts of calories an elf carries is:"
  );
  console.log(largestThreeSum);
}

main();
