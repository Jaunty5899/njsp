let button=document.querySelector("button");
let count=document.querySelector("span");
let divedit=document.querySelector("div");
// console.log(btn);
button.addEventListener("click",function() {
    count.textContent=+count.textContent+1;
    console.log(parseInt(divedit.style.width));
    let size=parseInt(divedit.style.width);
    divedit.style.width=size+10+'px';
    divedit.style.height=size+10+'px';
});