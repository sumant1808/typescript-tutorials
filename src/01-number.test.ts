import { expect, it } from "vitest"

export const addTwoNumbers = (a: number, b: number) => {
  return a + b;
}

it ("should add two numbers", () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
    expect(addTwoNumbers(-1, -1)).toBe(-2);
    expect(addTwoNumbers(0, 0)).toBe(0);
    }
)   
