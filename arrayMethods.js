// forEach, map, find, filter, Reduce

// number_array = [15, 28, 43, 9, 72, 31, 6, 55, 12, 89]

// const numbers =[15, 28, 43, 9];
// for (const num of numbers) {
//     console.log('value For of Loops :', num)
// }
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log('For Loop', element)
// }

// const numbers =[15, 28, 43, 9];

// const a = x => console.log(x);
// numbers.forEach(x => console.log(x));
// numbers.forEach(a);

// const fruits = ["apple", "banana", "orange", "grape", "watermelon"];

// fruits.forEach(item => console.log(item));

// const numbers =[15, 28, 43, 9];
// let sum = 0;
// numbers.forEach(x => sum += x);
// console.log(sum);

// const array = [15, 28, 43, 9, 72, 31, 6, 55, 12, 89];

// let total = 0;

// array.forEach(num => total += num);
// console.log(total);

// for Each function does not return anything
// map function returns an array.

// const array = [15, 28, 43, 9, 72, 31, 6, 55, 12, 89];
// array.map((item) => console.log(item));
// const array = [15, 28, 43, 9, 72, 31, 6, 55, 12, 89];
// const result = array.forEach((item) => item);
// console.log(result);

// const result1 = array.map((item) => item*2);
// console.log(result1);
// console.log(array);


// const fruits = ["apple", "banana", "orange", "grape", "watermelon"];

// fruits.forEach((item) => console.log(item));
// forEach((item, index, arr) => {})

// fruits.map((item,index,arr) => console.log(item, index)); 


// const fruits = ["apple", "banana", "orange", "grape", "watermelon"];

// const find = (fruits) => {
//     for (const item of fruits) {
//         if (item === 'orange') {
//             return item
//         }
//     }
//     return null;
// }
// const output = find(fruits);
// console.log(output);

// const fruit = fruits.find((item) => item === 'orange');
// console.log(fruit);

// const fruits = ["apple", "banana", "orange", "grape", "watermelon"];

// const array = [15, 28, 43, 9, 72, 31, 6, 55, 12, 89];

// const filter = numbers => {
//     const result = [];

//     for (const num of numbers) {
//         if (num % 2 === 0) {
//             result.push(num)
//         }
//     }
//     return result;
// }
// const x = filter(array);
// console.log(x);

// const x = array.filter((item) => item % 2 === 0);
// console.log(x);

const array = [15, 28, 43, 9, 72, 31, 6, 55, 12, 89];