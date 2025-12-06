import { describe, test, expect } from "bun:test";
import fc from "fast-check";

import { parseSign, parseScale, solvePassword, moveDial } from "./A";

describe("parseSign", () => {
  test('returns -1 when first character is "L"', () => {
    const sign = parseSign("L23");
    expect(sign).toBe(-1);
  });

  test('returns 1 when first character is "R"', () => {
    const sign = parseSign("R23");
    expect(sign).toBe(1);
  });
});

describe("parseScale", () => {
  test("returns parsed number", () => {
    const scale = parseScale("L23");
    expect(scale).toBe(23);
  });
});

describe("moveDial", () => {
  test("moves left", () => {
    const newIndex = moveDial(50, "L23");
    expect(newIndex).toBe(27);
  });

  test("moves right", () => {
    const newIndex = moveDial(50, "R42");
    expect(newIndex).toBe(92);
  });

  test("loops when moving left past 0", () => {
    const newIndex = moveDial(10, "L20");
    expect(newIndex).toBe(90);
  });

  test("loops when moving right past 99", () => {
    const newIndex = moveDial(90, "R20");
    expect(newIndex).toBe(10);
  });

  test("loops for large left move", () => {
    const newIndex = moveDial(10, "L2000");
    expect(newIndex).toBe(10);
  });

  test("loops for large right move", () => {
    const newIndex = moveDial(90, "R2000");
    expect(newIndex).toBe(90);
  });

  test("maintains value in [0, 100)", () => {
    fc.assert(
      fc.property(fc.stringMatching(/^(L|R)[0-9]+$/), (input) => {
        const newIndex = moveDial(0, input);
        return newIndex >= 0 && newIndex < 100;
      }),
    );
  });
});

describe("solvePassword", () => {
  test("returns 0 when input array is empty", () => {
    const password = solvePassword([]);
    expect(password).toBe(0);
  });

  test('returns 1 when input array is ["L50"]', () => {
    const password = solvePassword(["L50"]);
    expect(password).toBe(1);
  });

  test('returns 1 when input array is ["R50"]', () => {
    const password = solvePassword(["R50"]);
    expect(password).toBe(1);
  });

  test("can score multiple times", () => {
    const password = solvePassword(["R50", "L100", "R100"]);
    expect(password).toBe(3);
  });

  test("solves example", () => {
    const password = solvePassword([
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
    ]);
    expect(password).toBe(3);
  });
});
