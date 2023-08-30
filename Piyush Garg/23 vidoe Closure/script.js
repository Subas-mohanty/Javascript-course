function main() {
  const name = "Subas mohanty";
  // this is the closure function which is inside another function
  function init() {
    console.log(name);
  }
  init();
}
main();

const name = document.getElementById("name");
const btn = document.getElementById("btn-click");

function fontSize(size) {
  function changeSize() {
    name.style.fontSize = `${size}px`;
  }
  return changeSize;
}
const size12 = fontSize(12);
const size28 = fontSize(28);
const size56 = fontSize(56);

btn.addEventListener("click", size56);
