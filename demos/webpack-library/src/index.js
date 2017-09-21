module.exports  = class Calculator {
    /**
     * 加法
     * 
     * @param {Number} a 
     * @param {Number} b 
     * @returns 
     */
    add(a, b) {
        return a + b;
    }
    /**
     * 减法
     * 
     * @param {Number} a 
     * @param {Number} b 
     * @returns 
     */
    subtract(a, b) {
        return a - b;
    }
    /**
     * 乘法
     * 
     * @param {Number} a 
     * @param {Number} b 
     * @returns 
     */
    multiply(a, b) {
        return a * b;
    }
    /**
     * 除法
     * 
     * @param {Number} a 
     * @param {Number} b 
     * @returns 
     */
    divide(a, b) {
        return a / b;
    }
}