import { expect, it } from 'vitest';
import { add } from './math.js'

it('should summarize all number values in an array', () => {
    const result = add([1,4])
    expect(result).toBe(5)
});

it('result should be: -2', () => {
    const result = add([1,-3])
    expect(result).toBe(-2)
})