/* what is currying ?
   :- when we are using a function which takes 3 arguments and perform some tasks using the parametres but due to some reason all the three parameters are not available at a time, at that time we have to use currying to solve this problem.
   we can say it is a closure inside a closure function
   Here is the demostration code -> */

// This function will work fine but when a,b,c will not be available at a time , like if a is coming from a api and b is coming from another api and c is provided by user, at that time it will create problem. To avoid this problem we use currying

// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(3, 4, 2));

// we can apply currying in this way, by creating separate variables then passing them as arguments but what if the function takes hundreds or thousand arguments, we can't do things like this at that time. so this is not preferable
/* let a;
   let b;
   let c;

   add(a,b,c); */

// Currying Example-1

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add(4)(3)(1))

// we can even do it like this

const add = (a) => (b) => (c) => a + b + c;
console.log(add(4)(3)(1));

// Example-2
// function sendEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Sending an email to ${to} with subject ${subject} : ${body} `)
//         }
//     }
// }

const sendEmail=to=>subject=>body=>(`Sendin an email to ${to} with subject ${subject} : ${body} `)

let step1=sendEmail('mohantysubas143@gmail.com')
let step2=step1('new coding session')
let step3=step2("Join the new coding session for an amazing experience")
console.log(step3);