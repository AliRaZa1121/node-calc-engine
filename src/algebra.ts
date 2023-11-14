export class AlgebraOperations {



    /**
    * Calculate the extended greatest common divisor for two values.
    * @param a First number.
    * @param b Second number.
    * @returns The extended GCD of `a` and `b`.
    */


    static xgcd(a: number, b: number): [number, number, number] {
        function extendedGCD(a: number, b: number): [number, number, number] {
            if (b === 0) {
                return [a, 1, 0];
            } else {
                const [gcd, x, y] = extendedGCD(b, a % b);
                return [gcd, y, x - Math.floor(a / b) * y];
            }
        }
        return extendedGCD(a, b);
    }


}