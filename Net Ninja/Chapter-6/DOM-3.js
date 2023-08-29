// classList methods


// const content=document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('succes');

const paras=document.querySelectorAll('p');
paras.forEach(p=>{
    if(p.textContent.includes('error')){ // we could have used p.innerText but that could not get the hidden text so we use text content
        p.classList.add('error');
    }
    else if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});

const title=document.querySelector('.title');
title.classList.toggle('test'); // if the test class is not present then it will put a test class over there
title.classList.toggle('test'); // now the test class is present, so it will remove the test class