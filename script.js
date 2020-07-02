let button = document.querySelectorAll("button");
let count = document.querySelector("span");
let divedit = document.querySelector("div");
// console.log(btn);

function counter() {
  count.textContent = +count.textContent + 1;
}

button[0].addEventListener("click", function () {
  // count.textContent = +count.textContent + 1;
  //   console.log(parseInt(divedit.style.width));
  counter();
  let size = parseInt(divedit.style.width);
  divedit.style.width = size + 10 + "px";
  divedit.style.height = size + 10 + "px";
});

button[1].addEventListener("click", function () {
  // count.textContent = +count.textContent + 1;
  counter();
  let size = parseInt(divedit.style.marginLeft);
  divedit.style.marginLeft = size + 10 + "px";
});
