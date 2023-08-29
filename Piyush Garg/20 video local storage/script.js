
/* so what is local storage ?
  :- LocalStorage is a storage povided by the browser to store some data, it can't be cross checked for ex- if i have store some data in my local storage then someone else will not be able to access the data. It is used when we want to store the data entered by the user for future use like if we want to greet the user with their name that they have entered or even we can store whether the user left the page with dark mode enabled or disabled. This kind of things are done using local storage
*/

const userName = document.getElementById("username");
const btnSubmit = document.getElementById("btn-submit");
const showName=document.getElementById('show-name')


btnSubmit.addEventListener("click", () => {
  const value = userName.value;
  localStorage.setItem("name", value);
  location.reload(); // this is used to reload the page on the onclick of the button
});

window.addEventListener('load', ()=>{
    const uName=localStorage.getItem('name')
    showName.innerText=uName;
})