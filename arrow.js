// normal function
// function add(x, y){
//     const result = x + y;
//     return result;
// }
// function show(){
//     console.log('Hello world')
// }
// arrow functionদ
const add = (x, y) => x + y;
const show = () =>{
    console.log('hello');
}
const showNumber = x => Math.pow(x, 5);
console.log(showNumber(40));

console.log(add(3, 12));
show()