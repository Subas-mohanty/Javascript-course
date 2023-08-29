console.log("hello world");
// callback and higher order function

function add(a, b, callback) {
  let c = a + b;
  callback(c);
}
add(4,9,(val) => console.log(val));
// console.log(add(3,8));
