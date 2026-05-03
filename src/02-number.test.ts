import { expect, it } from "vitest"
import { number } from "zod"

interface AddTwoNumbersArgs{
    first : number,
    second : number
}

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
    return params.first + params.second;
}


it ("should add two numbers", () => {
    expect(addTwoNumbers({first: 1, second: 2})).toBe(3);
    expect(addTwoNumbers({first: -1, second: -1})).toBe(-2);
    expect(addTwoNumbers({first: 5, second: 5})).toBe(10);
}
)   
