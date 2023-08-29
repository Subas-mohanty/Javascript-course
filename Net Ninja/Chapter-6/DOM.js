// const para= document.querySelector('body > h1');

// console.log(para);

const para=document.querySelectorAll('p');

// console.log(para);
// console.log(para[0]);
// console.log(para[1]);
// console.log(para[2]);

para.forEach(para=>{
    // console.log(para);
});

// get an element by ID

const title=document.getElementById('page-title');
console.log(title);

// get elements by their class name

const errors = document.getElementsByClassName('error'); // this will return a html collection which can be accessed by the square bracket [] like this but we can't use for each method on that
console.log(errors);
console.log(errors[0]);

// get elements by their tag name

const paras=document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
