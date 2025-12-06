import { describe, test, expect } from "bun:test";

import { parseInputLine, solvePassword } from "./B";

describe("parseInputLine", () => {
  test("parses L move", () => {
    const move = parseInputLine("L23");
    expect(move).toBe(-23);
  });

  test("parses R move", () => {
    const move = parseInputLine("R23");
    expect(move).toBe(23);
  });
});

describe("solvePassword", () => {
  test("returns 0 when input string is empty", () => {
    const password = solvePassword("");
    expect(password).toBe(0);
  });

  test('returns 1 when input is "L50"', () => {
    const password = solvePassword("L50");
    expect(password).toBe(1);
  });

  test('returns 1 when input is "R50"', () => {
    const password = solvePassword("R50");
    expect(password).toBe(1);
  });

  test("can score multiple times", () => {
    const password = solvePassword("R50\nL100\nR100");
    expect(password).toBe(3);
  });

  test("solves example", () => {
    const password = solvePassword(
      ["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"].join(
        "\n",
      ),
    );
    expect(password).toBe(6);
  });
});
