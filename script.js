let button=document.querySelector("button");
let count=document.querySelector("span");
// console.log(btn);
button.addEventListener("click",function() {
    count.textContent=+count.textContent+1;
});
