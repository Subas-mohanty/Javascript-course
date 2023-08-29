// object literals

// creating an object
let user = {
    name: "subas",
    age: 19,
    country: 'India',
    email: "sk@gmail.com",
    blogs: ['hello man', 'hey mate'],

    // adding function to object
    login: function(){
        console.log('the user logged in');
    },
    logBlogs: function(){
        console.log(this.blogs);
    },
    thisEx: function(){
        console.log(this);
    }
};
console.log(user);
console.log(user.name);
console.log(user.age);
user.age=45;
console.log(user.age);

// the above line can be written as
console.log(user['age']); // -> this is useful in this case

const key='country';
console.log(user[key]); // but i can't do like this user.key

// type of user
console.log(typeof user);

user.login();
user.logBlogs();
user.thisEx(); // will print the object
console.log(this); // the window object or the root object

// array of objects
const book =[
    { title: 'Atomic habits',author: 'james clear'},
    { title: 'Quiet', author: 'susain cain'}
];
console.log(book);

// Math objects

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area=5.353;
console.log(Math.round(area));
console.log(Math.floor(area)); // rounded up to smallest integer
console.log(Math.ceil(area)); // rounded up to biggest integer
console.log(Math.trunc(area)); // take away the decimal and leave the integer

// Random numbers

const random= Math.random();
console.log(random);

console.log(Math.round(random*100));

// primitive values

let a=4;
let b=a;
console.log(`a: ${a} b: ${b}`);
a=76;
console.log(`a: ${a} b: ${b}`); // the values will not be changed

// for strings

let s="sk";
let k=s;
console.log(s,k);
s="ks";
console.log(s,k); // values will not be changed

// reference values

//for array
const c=[1,2,23,45];
const d=c;

console.log(`c: ${c} d: ${d}`);
c[0]=76;
console.log(`c: ${c} d: ${d}`); // the value will be updated cause it's not a primitive

//for objects

const e={name: "subas", home: "India"};
const f=e;

console.log(e,f);
// e.name="subbu";
f.name="subbu";
console.log(e,f); // here also the value will be updated>>
