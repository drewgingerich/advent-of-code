export function sortDescending(items: number[]): number[] {
  return items.slice().sort((a, b) => b - a);
}

export function sum(items: number[]): number {
  return items.reduce((total, item) => total + item, 0);
}
