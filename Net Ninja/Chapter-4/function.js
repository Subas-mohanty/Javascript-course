// function declaration
function greet(){
    console.log('hello world');
}

// function expression
const speak= function(){
    console.log('i am speak');
};

greet();
speak();

// arguments and parameters
const say=function(name='subas', time='night'){
    console.log(`good ${time} ${name}`);
};
say();
say('chhoti');

// returning values

const calArea=function(radius){
    return Math.PI*radius**2;
}
const area=calArea(5);
console.log(area);

// arrow function

const calVol = (side) => {return side**3;}
console.log(calVol(3));


let name = "subas";
// function
const greet2 = () => 'hello';
console.log(greet2);

// methods
let result=name.toUpperCase();
console.log(result);

// callback and foreach

let people=['subas', 'manu', 'rutu', 'kabi'];

// people.forEach(function(person){
//     console.log(person);
// });

// converting the above function into an arrow function

// people.forEach((person,index) =>{
//     console.log(index,person);
// });

const logPerson=(person,index) =>{
    console.log(`${index} hello ${person}`)
};
people.forEach(logPerson);


// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people2 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
  // create html template for each person
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
// ul.innerHTML = html;