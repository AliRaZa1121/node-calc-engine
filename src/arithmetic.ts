export class ArithmeticOperations {

    /**
     * Adds two numbers together.
     * @param a First number.
     * @param b Second number.
     * @returns The sum of `a` and `b`.
     */
    static add(a: number, b: number): number {
        return a + b;
    }

    /**
     * Subtracts the second number from the first.
     * @param a First number.
     * @param b Second number.
     * @returns The difference of `a` and `b`.
     */
    static subtract(a: number, b: number): number {
        return a - b;
    }

    /**
     * Multiplies two numbers.
     * @param a First number.
     * @param b Second number.
     * @returns The product of `a` and `b`.
     */
    static multiply(a: number, b: number): number {
        return a * b;
    }

    /**
     * Divides the first number by the second.
     * @param a Numerator.
     * @param b Denominator.
     * @returns The quotient of `a` and `b`.
     * @throws Error if `b` is 0 (division by zero).
     */
    static divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero error.");
        }
        return a / b;
    }

    /**
     * Computes the modulus (remainder) of the division of the first number by the second.
     * @param a First number.
     * @param b Second number.
     * @returns The remainder of `a` divided by `b`.
     * @throws Error if `b` is 0 (division by zero).
     */
    static modulus(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero error.");
        }
        return a % b;
    }

    /**
     * Raises a number to a specified power.
     * @param base The base number.
     * @param exponent The exponent.
     * @returns The result of `base` raised to `exponent`.
     */
    static power(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }

    /**
     * Calculates the square root of a number.
     * @param x The number.
     * @returns The square root of `x`.
     * @throws Error if `x` is negative.
     */
    static squareRoot(x: number): number {
        if (x < 0) {
            throw new Error("Square root of negative number is not supported.");
        }
        return Math.sqrt(x);
    }

    /**
     * Calculates the natural logarithm (base e) of a number.
     * @param x The number.
     * @returns The natural logarithm of `x`.
     * @throws Error if `x` is negative or zero.
     */
    static naturalLog(x: number): number {
        if (x <= 0) {
            throw new Error("Natural logarithm of non-positive number is not defined.");
        }
        return Math.log(x);
    }

    /**
     * Calculates the logarithm of a number to a specified base.
     * @param x The number.
     * @param base The base of the logarithm.
     * @returns The logarithm of `x` to the base `base`.
     * @throws Error if `x` or `base` is negative or zero.
     */
    static logarithm(x: number, base: number = 10): number {
        if (x <= 0 || base <= 0) {
            throw new Error("Logarithm of non-positive number or with non-positive base is not defined.");
        }
        return Math.log(x) / Math.log(base);
    }

    /**
     * Calculates the factorial of a number.
     * @param n The number.
     * @returns The factorial of `n`.
     * @throws Error if `n` is negative.
     */
    static factorial(n: number): number {
        if (n < 0) {
            throw new Error("Factorial of negative number is not defined.");
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    /**
     * Calculates the number of ways to choose `k` elements from a set of `n` elements without regard to order.
     * @param n The total number of items.
     * @param k The number of items to choose.
     * @returns The number of combinations.
     * @throws Error if `n` or `k` is negative, or if `k` is greater than `n`.
     */
    static combinations(n: number, k: number): number {
        if (n < 0 || k < 0 || k > n) {
            throw new Error("Invalid values for combinations.");
        }
        return ArithmeticOperations.factorial(n) / (ArithmeticOperations.factorial(k) * ArithmeticOperations.factorial(n - k));
    }

    /**
     * Calculates the number of ways to arrange `k` elements out of a set of `n` elements.
     * @param n The total number of items.
     * @param k The number of items to arrange.
     * @returns The number of permutations.
     * @throws Error if `n` or `k` is negative, or if `k` is greater than `n`.
     */
    static permutations(n: number, k: number): number {
        if (n < 0 || k < 0 || k > n) {
            throw new Error("Invalid values for permutations.");
        }
        return ArithmeticOperations.factorial(n) / ArithmeticOperations.factorial(n - k);
    }

    /**
       * Calculates the greatest common divisor (GCD) of two numbers.
       * @param a First number.
       * @param b Second number.
       * @returns The GCD of `a` and `b`.
       */
    static gcd(a: number, b: number): number {
        if (!b) {
            return a;
        }
        return ArithmeticOperations.gcd(b, a % b);
    }
    /**
     * Calculates the least common multiple (LCM) of two numbers.
     * @param a First number.
     * @param b Second number.
     * @returns The LCM of `a` and `b`.
     */
    static lcm(a: number, b: number): number {
        return (a * b) / ArithmeticOperations.gcd(a, b);
    }

    /**
     * Computes the sum of the first `n` natural numbers.
     * @param n A non-negative integer.
     * @returns The sum of the first `n` natural numbers.
     */
    static sumOfNaturals(n: number): number {
        if (n < 0 || !Number.isInteger(n)) {
            throw new Error("Input must be a non-negative integer.");
        }
        return (n * (n + 1)) / 2;
    }


    /**
     * Calculates the nth Fibonacci number.
     * @param n The position in the Fibonacci sequence.
     * @returns The nth Fibonacci number.
     * @throws Error if `n` is negative.
     */
    static fibonacci(n: number): number {
        if (n < 0) {
            throw new Error("Fibonacci of negative number is not defined.");
        }
        let a = 0, b = 1, sum = 0;
        for (let i = 2; i <= n; i++) {
            sum = a + b;
            a = b;
            b = sum;
        }
        return n === 0 ? 0 : b;
    }

    /**
     * Checks if a number is prime.
     * @param n The number to check.
     * @returns `true` if the number is prime, `false` otherwise.
     */
    static isPrime(n: number): boolean {
        if (n <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * Calculates the prime factors of a number.
     * @param n The number.
     * @returns The prime factors of `n`.
     */
    static primeFactors(n: number): number[] {
        const factors = [];
        while (n % 2 === 0) {
            factors.push(2);
            n /= 2;
        }
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            while (n % i === 0) {
                factors.push(i);
                n /= i;
            }
        }
        if (n > 2) {
            factors.push(n);
        }
        return factors;
    }


    /**
     * Calculates the nth term of an arithmetic progression.
     * @param a The first term.
     * @param d The common difference.
     * @param n The term number to find.
     * @returns The nth term of the arithmetic progression.
     */
    static nthTermArithmeticProgression(a: number, d: number, n: number): number {
        return a + (n - 1) * d;
    }

    /**
     * Calculates the sum of the first n terms of an arithmetic progression.
     * @param a The first term.
     * @param d The common difference.
     * @param n The number of terms to sum.
     * @returns The sum of the first n terms of the arithmetic progression.
     */
    static sumArithmeticProgression(a: number, d: number, n: number): number {
        return (n / 2) * (2 * a + (n - 1) * d);
    }

    /**
     * Calculates the nth term of a geometric progression.
     * @param a The first term.
     * @param r The common ratio.
     * @param n The term number to find.
     * @returns The nth term of the geometric progression.
     */
    static nthTermGeometricProgression(a: number, r: number, n: number): number {
        return a * Math.pow(r, n - 1);
    }

    /**
     * Calculates the sum of the first n terms of a geometric progression.
     * @param a The first term.
     * @param r The common ratio.
     * @param n The number of terms to sum.
     * @returns The sum of the first n terms of the geometric progression.
     */
    static sumGeometricProgression(a: number, r: number, n: number): number {
        if (r === 1) {
            return n * a;
        }
        return a * (1 - Math.pow(r, n)) / (1 - r);
    }

    /**
     * Calculates the binomial coefficient, "n choose k".
     * @param n Total number of items.
     * @param k Number of items to choose.
     * @returns The binomial coefficient.
     * @throws Error if `n` or `k` is negative, or if `k` is greater than `n`.
     */
    static binomialCoefficient(n: number, k: number): number {
        if (n < 0 || k < 0 || k > n) {
            throw new Error("Invalid values for binomial coefficient.");
        }
        if (k === 0 || k === n) {
            return 1;
        }
        k = Math.min(k, n - k); // Take advantage of symmetry
        let coefficient = 1;
        for (let i = 0; i < k; i++) {
            coefficient *= (n - i) / (i + 1);
        }
        return coefficient;
    }

    /**
     * Calculates the nth root of a number.
     * @param x The number.
     * @param n The root.
     * @returns The nth root of `x`.
     * @throws Error if `x` is negative and `n` is even.
     */
    static nthRoot(x: number, n: number): number {
        if (x < 0 && n % 2 === 0) {
            throw new Error("Negative number cannot have an even root.");
        }
        return x < 0 ? -Math.pow(-x, 1 / n) : Math.pow(x, 1 / n);
    }

    /**
     * Calculates the harmonic mean of an array of numbers.
     * @param numbers Array of numbers.
     * @returns The harmonic mean.
     * @throws Error if the array is empty or contains non-positive numbers.
     */
    static harmonicMean(numbers: number[]): number {
        if (numbers.length === 0) {
            throw new Error("Array must not be empty.");
        }
        let sum = 0;
        for (const num of numbers) {
            if (num <= 0) {
                throw new Error("Numbers must be positive.");
            }
            sum += 1 / num;
        }
        return numbers.length / sum;
    }

    /**
     * Calculates the standard deviation of a set of numbers.
     * @param numbers Array of numbers.
     * @param sample Whether to calculate the sample standard deviation (default) or the population standard deviation.
     * @returns The standard deviation.
     * @throws Error if the array has fewer than two elements.
     */
    static standardDeviation(numbers: number[], sample: boolean = true): number {
        const n = numbers.length;
        if (n < 2) {
            throw new Error("At least two numbers are required.");
        }
        const mean = numbers.reduce((acc, val) => acc + val, 0) / n;
        const variance = numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (sample ? n - 1 : n);
        return Math.sqrt(variance);
    }


    /**
     * Approximates the derivative of a function at a given point.
     * @param func The function to differentiate.
     * @param x The point at which to approximate the derivative.
     * @param h A small number to use in the difference quotient.
     * @returns The approximate derivative of `func` at `x`.
     */
    static approximateDerivative(func: (x: number) => number, x: number, h: number = 0.001): number {
        return (func(x + h) - func(x)) / h;
    }

    /**
     * Calculates the Euclidean distance between two points in n-dimensional space.
     * @param point1 The first point.
     * @param point2 The second point.
     * @returns The Euclidean distance between the two points.
     * @throws Error if the points do not have the same dimension.
     */
    static euclideanDistance(point1: number[], point2: number[]): number {
        if (point1.length !== point2.length) {
            throw new Error("Points must be of the same dimension.");
        }
        const squaredDifferences = point1.map((val, i) => Math.pow(val - point2[i], 2));
        return Math.sqrt(squaredDifferences.reduce((acc, val) => acc + val, 0));
    }

    /**
     * Solves a quadratic equation of the form ax^2 + bx + c = 0.
     * @param a Coefficient of x^2.
     * @param b Coefficient of x.
     * @param c Constant term.
     * @returns The roots of the quadratic equation.
     * @throws Error if the equation has no real roots.
     */
    static solveQuadratic(a: number, b: number, c: number): [number, number] | [number] | [] {
        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            throw new Error("No real roots.");
        } else if (discriminant === 0) {
            return [-b / (2 * a)];
        } else {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return [root1, root2];
        }
    }

    /**
     * Computes the sum of an infinite geometric series given the first term and the common ratio.
     * @param a The first term.
     * @param r The common ratio.
     * @returns The sum of the series.
     * @throws Error if the series does not converge.
     */
    static sumInfiniteGeometricSeries(a: number, r: number): number {
        if (Math.abs(r) >= 1) {
            throw new Error("Series does not converge.");
        }
        return a / (1 - r);
    }

    /**
     * Computes the sum of an infinite geometric series given the first term and the common ratio.
     * @param a The first term.
     * @param r The common ratio.
     * @param n The number of terms to sum.
     * @returns The sum of the series.
     */

    static sumFiniteGeometricSeries(a: number, r: number, n: number): number {
        return a * (1 - Math.pow(r, n)) / (1 - r);
    }

    /**
     * Computes the sum of an infinite arithmetic series given the first term and the common difference.
     * @param a The first term.
     * @param d The common difference.
     * @returns The sum of the series.
     * @throws Error if the series does not converge.
     */

    static sumInfiniteArithmeticSeries(a: number, d: number): number {
        if (d >= 1) {
            throw new Error("Series does not converge.");
        }
        return a / (1 - d);
    }

    /**
     * Computes the sum of a finite arithmetic series given the first term and the common difference.
     * @param a The first term.
     * @param d The common difference.
     * @param n The number of terms to sum.
     * @returns The sum of the series.
     */

    static sumFiniteArithmeticSeries(a: number, d: number, n: number): number {
        return (n / 2) * (2 * a + (n - 1) * d);
    }

    /**
     * Computes the sum of an infinite series of the form a + ar + ar^2 + ar^3 + ... given the first term and the common ratio.
     * @param a The first term.
     * @param r The common ratio.
     * @returns The sum of the series.
     * @throws Error if the series does not converge.
     */

    static sumInfiniteSeries(a: number, r: number): number {
        if (Math.abs(r) >= 1) {
            throw new Error("Series does not converge.");
        }
        return a / (1 - r);
    }

    /**
     * Computes the sum of a finite series of the form a + ar + ar^2 + ar^3 + ... given the first term and the common ratio.
     * @param a The first term.
     * @param r The common ratio.
     * @param n The number of terms to sum.
     * @returns The sum of the series.
     */

    static sumFiniteSeries(a: number, r: number, n: number): number {
        return a * (1 - Math.pow(r, n)) / (1 - r);
    }

    /**
     * Calculate the cubic root of a number.
     * @param x The number.
     * @returns The cubic root of `x`.
     */
    static cbrt(x: number): number {
        return Math.cbrt(x);
    }

    /**
     * Round a number towards plus infinity.
     * @param x The number.
     * @returns The rounded value.
     */
    static ceil(x: number): number {
        return Math.ceil(x);
    }

    /**
     * Compute the cube of a number.
     * @param x The number.
     * @returns The cube of `x`.
     */
    static cube(x: number): number {
        return x * x * x;
    }

    /**
     * Calculate the exponential of a number.
     * @param x The number.
     * @returns The exponential of `x`.
     */
    static exp(x: number): number {
        return Math.exp(x);
    }

    /**
     * Calculate the exponential of a number minus one.
     * @param x The number.
     * @returns The value of `exp(x) - 1`.
     */
    static expm1(x: number): number {
        return Math.expm1(x);
    }

    /**
     * Round a number towards minus infinity.
     * @param x The number.
     * @returns The rounded value.
     */
    static floor(x: number): number {
        return Math.floor(x);
    }

    /**
     * Calculate the base 2 logarithm of a number.
     * @param x The number.
     * @returns The base 2 logarithm of `x`.
     */
    static log2(x: number): number {
        return Math.log2(x);
    }

    /**
     * Compute the sign of a number.
     * @param x The number.
     * @returns The sign of `x`.
     */
    static sign(x: number): number {
        return Math.sign(x);
    }

    /**
     * Compute the square of a number.
     * @param x The number.
     * @returns The square of `x`.
     */
    static square(x: number): number {
        return x * x;
    }

    /**
     * Inverse the sign of a number.
     * @param x The number.
     * @returns The negated value of `x`.
     */
    static unaryMinus(x: number): number {
        return -x;
    }

    /**
     * Apply a unary plus operation.
     * @param x The number.
     * @returns The value of `x`.
     */
    static unaryPlus(x: number): number {
        return +x;
    }


    /**
     * Calculates the percentage of a number.
     * @param part The part value.
     * @param whole The whole value.
     * @returns The percentage of `part` of `whole`.
     */
    static percentage(part: number, whole: number): number {
        return part / whole * 100;
    }

    /**
     * Calculates the ratio of two numbers.
     * @param a The first number.
     * @param b The second number.
     * @returns The ratio of `a` to `b`.
     */
    static ratio(a: number, b: number): string {
        const gcd = ArithmeticOperations.gcd(a, b);
        return `${a / gcd}:${b / gcd}`;
    }

    /**
     * Calculates the average (mean) of a set of numbers.
     * @param nums An array of numbers.
     * @returns The average of `nums`.
     */
    static mean(...nums: number[]): number {
        return nums.reduce((acc, val) => acc + val, 0) / nums.length;
    }

    /**
     * Finds the median value of a set of numbers.
     * @param nums An array of numbers.
     * @returns The median of `nums`.
     */
    static median(...nums: number[]): number {
        nums.sort((a, b) => a - b);
        const mid = Math.floor(nums.length / 2);
        return nums.length % 2 === 0 ? (nums[mid] + nums[mid - 1]) / 2 : nums[mid];
    }

    /**
     * Generates a random number within a given range.
     * @param min The minimum value.
     * @param max The maximum value.
     * @returns A random number between `min` and `max`.
     */
    static random(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }


    /**
    * Raises a number to an integer power using exponentiation by squaring.
    * @param base The base number.
    * @param exponent The exponent (integer).
    * @returns The result of raising `base` to the `exponent`.
    */

    static intPower(base: number, exponent: number): number {
        if (exponent < 0) {
            throw new Error("Exponent must be a non-negative integer.");
        }
        let result = 1;
        while (exponent > 0) {
            if (exponent % 2 === 1) {
                result *= base;
            }
            exponent = Math.floor(exponent / 2);
            base *= base;
        }
        return result;
    }

    /**
     * Computes the sum of an arithmetic progression.
     * @param a1 The first term.
     * @param n The number of terms.
     * @param d The common difference between terms.
     * @returns The sum of the first `n` terms of the progression.
     */
    static arithmeticProgressionSum(a1: number, n: number, d: number): number {
        return n / 2 * (2 * a1 + (n - 1) * d);
    }

    /**
     * Computes the sum of a geometric progression.
     * @param a1 The first term.
     * @param r The common ratio.
     * @param n The number of terms.
     * @returns The sum of the first `n` terms of the progression.
     */
    static geometricProgressionSum(a1: number, r: number, n: number): number {
        if (r === 1) {
            return n * a1;
        }
        return a1 * (1 - Math.pow(r, n)) / (1 - r);
    }


    /**
     * Calculates the sum of all numbers in a given range.
     * @param start The starting number of the range.
     * @param end The ending number of the range.
     * @returns The sum of all numbers from `start` to `end`.
     */
    static sumRange(start: number, end: number): number {
        return (end - start + 1) * (start + end) / 2;
    }

    /**
     * Calculates the sum of the digits of a number.
     * @param n The number.
     * @returns The sum of the digits of `n`.
     */
    static digitSum(n: number): number {
        return Math.abs(n).toString().split("").map(Number).reduce((acc, val) => acc + val, 0);
    }

    /**
     * Converts an angle from degrees to radians.
     * @param degrees The angle in degrees.
     * @returns The angle in radians.
     */
    static degreesToRadians(degrees: number): number {
        return degrees * Math.PI / 180;
    }

    /**
     * Converts an angle from radians to degrees.
     * @param radians The angle in radians.
     * @returns The angle in degrees.
     */
    static radiansToDegrees(radians: number): number {
        return radians * 180 / Math.PI;
    }


}
