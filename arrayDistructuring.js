const array = [15, 28, 43, 9, 72, 31, 6, 55, 12, 89];

const [a, b, c, ...rest] = array;
console.log(a, b, c, rest);