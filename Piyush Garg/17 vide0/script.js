// create elements dynamically

const welcome = document.getElementById("welcome");
const name = document.getElementById("name");
const btn = document.getElementById("btn");
const container =document.getElementById('container')

btn.addEventListener("click", () => {
  console.log("i am clicked");
});
btn.addEventListener("click", () => {
  const el = document.createElement("h3");
  el.innerText = "i am dynamically created";
  container.appendChild(el);
});
