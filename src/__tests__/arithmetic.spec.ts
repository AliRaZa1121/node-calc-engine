import { ArithmeticOperations } from './../arithmetic';

describe('ArithmeticOperations', () => {
    test('add should correctly add two numbers', () => {
        expect(ArithmeticOperations.add(1, 2)).toBe(3);
    });

    test('subtract should correctly subtract two numbers', () => {
        expect(ArithmeticOperations.subtract(5, 2)).toBe(3);
    });

    test('arithmeticProgressionSum should calculate the sum of an arithmetic progression', () => {
        expect(ArithmeticOperations.arithmeticProgressionSum(1, 10, 1)).toBe(55);
    });

    test('geometricProgressionSum should calculate the sum of a geometric progression', () => {
        expect(ArithmeticOperations.geometricProgressionSum(1, 2, 10)).toBe(1023);
    });

    test('factorial should calculate the factorial of a number', () => {
        expect(ArithmeticOperations.factorial(5)).toBe(120);
    });

    test('fibonacci should calculate the nth fibonacci number', () => {
        expect(ArithmeticOperations.fibonacci(10)).toBe(55);
    });

    test('gcd should calculate the greatest common divisor of two numbers', () => {
        expect(ArithmeticOperations.gcd(10, 15)).toBe(5);
    });

    test('lcm should calculate the least common multiple of two numbers', () => {
        expect(ArithmeticOperations.lcm(10, 15)).toBe(30);
    });

    test('isPrime should correctly identify prime numbers', () => {
        expect(ArithmeticOperations.isPrime(7)).toBe(true);
        expect(ArithmeticOperations.isPrime(8)).toBe(false);
    });

    test('primeFactors should correctly calculate the prime factors of a number', () => {
        expect(ArithmeticOperations.primeFactors(12)).toEqual([2, 2, 3]);
    });



});

