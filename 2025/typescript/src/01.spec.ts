import { describe, test, expect } from "bun:test";

import { parseSign, parseScale, solvePassword, parseMove } from "./01";

describe("parseSign", () => {
  test('returns -1 when first character is "L"', () => {
    const sign= parseSign("L23");
    expect(sign).toBe(-1)
  });

  test('returns 1 when first character is "R"', () => {
    const sign= parseSign("R23");
    expect(sign).toBe(1)
  });
});

describe("parseScale", () => {
  test('returns parsed number', () => {
    const scale = parseScale("L23");
    expect(scale).toBe(23)
  });
});

describe("moveDial", () => {
  test('moves left', () => {
    const move = parseMove("L73");
    expect(move).toBe(-73);
  });

  test('moves right', () => {
    const move = parseMove("R42");
    expect(move).toBe(42);
  });
});

describe("solvePassword", () => {
  test("returns 0 when input array is empty", () => {
    const password = solvePassword([]);
    expect(password).toBe(0);
  })

  test('returns 1 when input array is ["L50"]', () => {
    const password = solvePassword(["L50"]);
    expect(password).toBe(1);
  })

  test('returns 1 when input array is ["R50"]', () => {
    const password = solvePassword(["R50"]);
    expect(password).toBe(1);
  })
});
