//without arrow function (before ES6)
function total(a, b) {
   return a + b;
}
console.log(total(3, 5))

//with arrow function (from ES6)
let sum = (a, b) => a + b
console.log(sum(3,5))