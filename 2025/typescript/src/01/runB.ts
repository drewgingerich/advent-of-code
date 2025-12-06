import { solvePassword } from "./B";
import input from "./input.txt";

async function main() {
  const solution = solvePassword(input);
  console.log(`Solution to 01 B is: ${solution}`)
}

main();
