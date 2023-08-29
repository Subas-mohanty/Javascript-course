// const para = document.querySelector('p');

// console.log(para);
// console.log(para.innerText);
// para.innerText = 'ninjas are awesome';
// console.log(para);
// console.log(para.innerText);

// const paras = document.querySelectorAll('p');
// console.log(paras); // jreturns a nodeList -> all array methods can be applied and also forEach method can be applied

// paras.forEach(p => {
//   console.log(p.innerText);
//   // p.innerText ='new text';
//   p.innerText += ' new text!';
// });

// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>this is a new h2</h2>';

// content.innerHTML += '<h2>this is an h2 added to the content</h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// const link=document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.codewithharry.com');
// link.innerText='CodeWithHarry website';

// const message=document.querySelector('p');
// console.log(message.getAttribute('class'));
// message.setAttribute('class','succes');
// message.innerText='Welcome';
// message.setAttribute('style','color: green'); // if the attribute is not present then js will create that attribute than apply the changes


const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;'); // in this way we will override all the previously set properties 

// so we use .style property instead of setAttribute
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = ''; // to remove the property


