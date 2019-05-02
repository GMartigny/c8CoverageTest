/**
 * Called by test
 * @param {Number} base
 * @param {Number} power
 * @return {Number}
 */
const pow = (base, power) => {
    const result = base ** power;
    return result;
};

/**
 * Called by test
 * @param {Number} n
 * @return {Number}
 */
const floor = n => {
    // This condition should not be covered by test
    if (n < 0) {
        n += 1;
    }

    const result = n << 0;
    return result;
};

/**
 * Not called by test
 * @param {Number} n
 * @return {Number}
 */
const fibo = n => {
    if (n < 2) {
        return 1;
    }

    return fibo(n - 1) + fibo(n - 2);
};

export {
    pow,
    floor,
    fibo,
};
