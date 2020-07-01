var btn=document.getElementById("btn");
// console.log(btn);
btn.addEventListener("click",function increment() {
    btn.innerHTML=(btn.innerHTML*1)+1;
});
