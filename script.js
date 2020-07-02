let increasebtn = document.querySelector("#increase");
let upbtn = document.querySelector("#up");
let leftbtn = document.querySelector("#left");
let downbtn = document.querySelector("#down");
let rightbtn = document.querySelector("#right");
let count = document.querySelector("span");
let divedit = document.querySelector("div");
function logger() {
  console.log(divedit.style.marginLeft);
  console.log(divedit.style.marginTop);
}

function counter() {
  count.textContent = +count.textContent + 1;
}

increasebtn.addEventListener("click", function () {
  counter();
  let size = parseInt(divedit.style.width);
  divedit.style.width = size + 10 + "px";
  divedit.style.height = size + 10 + "px";
});

downbtn.addEventListener("click", function () {
  counter();
  logger();
  let size = parseInt(divedit.style.marginTop) + 10;
  divedit.style.marginTop = size + "px";
});

rightbtn.addEventListener("click", function () {
  counter();
  logger();
  let size = parseInt(divedit.style.marginLeft) + 10;
  if (size > 1345) {
    divedit.style.marginLeft = 1340 + "px";
  } else {
    divedit.style.marginLeft = size + "px";
  }
});

upbtn.addEventListener("click", function () {
  counter();
  logger();
  let size = parseInt(divedit.style.marginTop) - 10;
  if (size < 5) {
    divedit.style.marginTop = 5 + "px";
  } else {
    divedit.style.marginTop = size + "px";
  }
});

leftbtn.addEventListener("click", function () {
  counter();
  logger();
  let size = parseInt(divedit.style.marginLeft) - 10;
  if (size < 0) {
    divedit.style.marginLeft = 0 + "px";
  } else {
    divedit.style.marginLeft = size + "px";
  }
});
