const sum = (a, b) => a + b
const sub = (a, b) => a - b
const reverse = (str) => {
    let str = str.split("").reverse().join("");                                
    console.log(str);
}
export {sum, sub, reverse}; // export module
export const version = 'myMath 1.0'