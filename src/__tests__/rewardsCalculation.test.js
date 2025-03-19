import { calculateRewards } from "../../src/utils/helpers";
import { describe, it, expect } from "vitest";

describe("Reward Points Calculation", () => {
  it("should return 90 points for a $120 purchase", () => {
    expect(calculateRewards(120)).toBe(90);
  });

  it("should return 50 points for a $100 purchase", () => {
    expect(calculateRewards(100)).toBe(50);
  });

  it("should return 0 points for a $49 purchase", () => {
    expect(calculateRewards(49)).toBe(0);
  });

  it("should return 0 points for a $50 purchase", () => {
    expect(calculateRewards(50)).toBe(0);
  });
});

describe("Reward Points Calculation for float amounts", () => {
  it("should return 90 points for a $120 purchase", () => {
    expect(calculateRewards(120.01)).toBe(90);
  });

  it("should return 50 points for a $100 purchase", () => {
    expect(calculateRewards(100.99)).toBe(50);
  });

  it("should return 0 points for a $49.99 purchase", () => {
    expect(calculateRewards(49.99)).toBe(0);
  });

  it("should return 90 points for a $120.00 purchase", () => {
    expect(calculateRewards(120.0)).toBe(90); // Round off and check logic
  });

  it("should return 90 points for a $1120.00 purchase", () => {
    expect(calculateRewards(1120.0)).toBe(2090); // Round off and check logic
  });
});

describe("Handle non-numeric amount", () => {
  it("should return 0 points for `abc` amount", () => {
    expect(calculateRewards("abc")).toBe(0);
  });
  it("should return 0 points for `null` amount", () => {
    expect(calculateRewards(null)).toBe(0);
  });
  it("should return 0 points for `undefined` amount", () => {
    expect(calculateRewards(undefined)).toBe(0);
  });
  it("should return 0 points for `NAN` amount", () => {
    expect(calculateRewards(NaN)).toBe(0);
  });
  it("should return 0 points for -0.99 amount", () => {
    expect(calculateRewards(-0.99)).toBe(0);
  });
  it("should return 0 points for -0.00 amount", () => {
    expect(calculateRewards(-0.99)).toBe(0);
  });
});
