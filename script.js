let increasebtn = document.querySelector("#increase");
let upbtn = document.querySelector("#up");
let leftbtn = document.querySelector("#left");
let downbtn = document.querySelector("#down");
let rightbtn = document.querySelector("#right");
let count = document.querySelector("span");
let divedit = document.querySelector("#subject");
let container = document.querySelector("#container");
let keyspressed = {};

// console.log(container.style.width);
// function logger() {
//   console.log(divedit.style.marginLeft);
//   console.log(divedit.style.marginTop);
// }

function counter() {
  count.textContent = +count.textContent + 1;
}

increasebtn.addEventListener("click", increasefn);

function increasefn() {
  counter();
  let size = parseInt(divedit.style.width);
  divedit.style.width = size + 10 + "px";
  divedit.style.height = size + 10 + "px";
}

document.addEventListener("keydown", function (event) {
  keyspressed[event.keyCode] = true;
  // console.log(keyspressed);
  if (
    (keyspressed[87] && event.keyCode == 65) ||
    (keyspressed[38] && event.keyCode == 37) ||
    (keyspressed[65] && event.keyCode == 87) ||
    (keyspressed[37] && event.keyCode == 38)
  ) {
    upfn();
    leftfn();
  } else if (
    (keyspressed[87] && event.keyCode == 68) ||
    (keyspressed[38] && event.keyCode == 39) ||
    (keyspressed[68] && event.keyCode == 87) ||
    (keyspressed[39] && event.keyCode == 38)
  ) {
    upfn();
    rightfn();
  } else if (
    (keyspressed[83] && event.keyCode == 65) ||
    (keyspressed[40] && event.keyCode == 37) ||
    (keyspressed[65] && event.keyCode == 83) ||
    (keyspressed[37] && event.keyCode == 40)
  ) {
    downfn();
    leftfn();
  } else if (
    (keyspressed[83] && event.keyCode == 68) ||
    (keyspressed[40] && event.keyCode == 39) ||
    (keyspressed[68] && event.keyCode == 83) ||
    (keyspressed[39] && event.keyCode == 40)
  ) {
    downfn();
    rightfn();
  } else if (event.keyCode == 39 || event.keyCode == 68) {
    rightfn();
  } else if (event.keyCode == 37 || event.keyCode == 65) {
    leftfn();
  } else if (event.keyCode == 38 || event.keyCode == 87) {
    upfn();
  } else if (event.keyCode == 40 || event.keyCode == 83) {
    downfn();
  }
});

document.addEventListener("keyup", function (event) {
  delete keyspressed[event.keyCode];
  if (event.keyCode == 39 || event.keyCode == 68) {
    rightbtn.classList.remove("highlight");
  } else if (event.keyCode == 37 || event.keyCode == 65) {
    leftbtn.classList.remove("highlight");
  } else if (event.keyCode == 38 || event.keyCode == 87) {
    upbtn.classList.remove("highlight");
  } else if (event.keyCode == 40 || event.keyCode == 83) {
    downbtn.classList.remove("highlight");
  }
});

downbtn.addEventListener("click", downfn);

function downfn() {
  downbtn.classList.add("highlight");
  counter();
  // logger();
  let size = parseInt(divedit.style.marginTop) + 10;
  let height = parseInt(container.style.height) - 6;
  if (size > height) {
    divedit.style.marginTop = height + "px";
  } else {
    divedit.style.marginTop = size + "px";
  }
}

rightbtn.addEventListener("click", rightfn);

function rightfn() {
  rightbtn.classList.add("highlight");
  counter();
  // logger();
  let size = parseInt(divedit.style.marginLeft) + 10;
  let width = parseInt(container.style.width) - 6;
  if (size > width) {
    divedit.style.marginLeft = width + "px";
  } else {
    divedit.style.marginLeft = size + "px";
  }
}

upbtn.addEventListener("click", upfn);

function upfn() {
  upbtn.classList.add("highlight");
  counter();
  // logger();
  let size = parseInt(divedit.style.marginTop) - 10;
  if (size < 0) {
    divedit.style.marginTop = 0 + "px";
  } else {
    divedit.style.marginTop = size + "px";
  }
}

leftbtn.addEventListener("click", leftfn);

function leftfn() {
  leftbtn.classList.add("highlight");
  counter();
  // logger();
  let size = parseInt(divedit.style.marginLeft) - 10;
  if (size < 0) {
    divedit.style.marginLeft = 0 + "px";
  } else {
    divedit.style.marginLeft = size + "px";
  }
}
