import { describe, expect, it } from "vitest";
import { calculate } from "../calculator";

describe("calculate", () => {
  it("adds numbers correctly", () => {
    expect(calculate(10, 5, "add")).toBe(15);
  });

  it("subtracts numbers correctly", () => {
    expect(calculate(8, 5, "subtract")).toBe(3);
  });

  it("multiplies numbers correctly", () => {
    expect(calculate(2, 3, "multiply")).toBe(6);
  });

  it("divides numbers correctly", () => {
    expect(calculate(6, 3, "divide")).toBe(2);
  });

  it("returns an error for division by zero", () => {
    expect(calculate(10, 0, "divide")).toBe("Erreur : division par zéro");
  });
});
