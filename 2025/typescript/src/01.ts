export let index = 50;

export function solvePassword(inputs: string[]): number {
  let count = 0;
  for (const input of inputs) {
    const sign = parseSign(input);
    const scale = parseScale(input);
    index += (sign * scale) % 100;
    if (index === 0) {
      count++;
    }
  }
  return count;
}

export function parseSign(input: string): -1 | 1 {
  const signStr = input[0];
  if (signStr === "L") {
    return -1;
  }
  if (signStr === "R") {
    return 1;
  }
  throw Error("Could not parse sign");
}

export function parseScale(input: string): number {
    const scaleStr = input.slice(1);
    return Number(scaleStr);
}

export function moveDial(index: number, input: string): number {
  const sign = parseSign(input);
  const scale = parseScale(input);
  const newIndex = index + (sign * scale) % 100;
};
