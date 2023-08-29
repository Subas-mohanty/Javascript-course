let students = ["subas", "manas", "harry"];
console.log(students);
students[0]="subbu";
console.log(students[0]);

let mix=["sk", "rk",30,25];
console.log(mix);

// Array methods
console.log(students.length);

// let result=students.join("_");
// console.log(result);

// let result=students.concat(["rohan","chaman"]);
// console.log(result);

let result = students.push("rohan");
result=students.pop();
console.log(result);
console.log(students);
