// for loops

for(let i=0;i<5;i++){
    console.log(i);
}

let names = ['subbu', 'chiku', 'kamal'];
for(let i=0;i<names.length;i++){
    // console.log(names[i]);
    let html=`<div>${names[i]}</div>`;
    console.log(html);
}

// while loop

// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }


// do while loop

let j=0;
do{
    console.log(j);
    j++;
}while(j<5);

// break and continue

const scores=[50,25,0,30,100,20,10];
for(let i=0;i<scores.length;i++){
    if(scores[i]===0){
        continue;  // skip the value
    }
    console.log('your score is ', scores[i]);
    if(scores[i]===100){
        console.log('you got the top score!');
        break; // stop the iteration there
    }
}

// variables and block scope

let age = 19;

if(true){
    let age=98;
    let name='subas';
    console.log('inside the 1st scope: ', age , name);
}
if(true){
    console.log('inside the 2nd code block: ', age);
    var test='test'; // this has no scope and can be used anywhere in the code base
}
age=56;
console.log('outside the block: ', age, name ,test)