/**
You are given two integers num1 and num2.

In one operation, you can choose integer i in the range [0, 60] and subtract 2i + num2 from num1.

Return the integer denoting the minimum number of operations needed to make num1 equal to 0.

If it is impossible to make num1 equal to 0, return -1.
**/

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function (num1, num2) {
    if (num1 === 0) return 0;

    const popcount = (x) => {
        let c = 0n;
        let n = BigInt(x);
        while (n > 0n) {
            n &= n - 1n;
            c++;
        }
        return Number(c);
    };

    for (let k = 1n; k <= 60n; k++) {
        let x = BigInt(num1) - k * BigInt(num2);
        if (x < 0n) continue;

        let pc = popcount(x);
        if (pc <= Number(k) && k <= x) {
            return Number(k);
        }
    }
    return -1;
}
