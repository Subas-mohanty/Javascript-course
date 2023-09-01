/* What is compostion ?
  :- It is a function which merges to function and gives the required results. For example -> */

function add(a, b) {
  return a + b;
}
function square(a) {
  return a * a;
}
const multiply = (args) => args[0] * args[1];

// The simple and bruteforce method is this
// method-1
// let sum=add(2,3)
// let result=square(sum)
// console.log(result);

// method-2
// This is what composition is but we have to make it generic so that we can pass any type of function to this and it will give the required result

// function addAndSquare(a,b){
//     return square(add(a,b))
// }
// console.log(addAndSquare(4,2))

// Composition
// function compose(fn1, fn2) {
//   return function (a, b) {
//     return fn2(fn1(a, b));
//   };
// }

// converting to modern javascript code
const compose = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

function composeAll(...fns) {
  return function (...val) {
    return fns.reduce((a, b) => b(a), val);
  };
}
// converting to modern js or EcmaScript6(ES6)
const composeAllarrow=(...fns)=>(...val)=>fns.reduce((a, b) => b(a), val);

const task = composeAllarrow(multiply, square, (val)=>val+1);
console.log(task(3, 1));
