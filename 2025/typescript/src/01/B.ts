export function solvePassword(input: string): number {
  const moves = parseInput(input);

  let index = 50;
  let count = 0;

  for (const move of moves) {
    let clicks = move;
    while (clicks !== 0) {
      if (clicks > 0) {
        clicks--;
        index++;
      }
      if (clicks < 0) {
        clicks++;
        index--;
      }
      index = (index + 100) % 100;
      if (index === 0) {
        count++;
      }
    }
  }
  return count;
}

export function parseInput(input: string): number[] {
  if (input.length === 0) {
    return [];
  }
  const lines = input.split("\n").filter((line) => line !== "");
  return lines.map((line, i) => parseInputLine(line, i));
}

export function parseInputLine(line: string, i = 0): number {
  const move = Number(line.slice(1));
  switch (line[0]) {
    case "L":
      return move * -1;
    case "R":
      return move;
    default:
      throw Error(`Bad input line ${i}: ${line}`);
  }
}
