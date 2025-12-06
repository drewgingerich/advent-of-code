import { solvePassword } from "./A";
import input from "./input.txt";

async function main() {
  const solution = solvePassword(input);
  console.log(`Solution to 01 A is: ${solution}`)
}

main();
