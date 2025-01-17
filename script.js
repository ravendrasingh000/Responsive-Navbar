const menuBtn = document.querySelector("#menuIcon");
const closeBtn = document.querySelector("#closeIcon");
const menuList = document.querySelector(".menu");

menuBtn.addEventListener("click",()=>{
    menuList.style.display = "block";
    menuBtn.style.display = "none"
    closeBtn.style.display = "block"
})

closeBtn.addEventListener("click",()=>{
    closeBtn.style.display = "none"
    menuList.style.display = "none";
    menuBtn.style.display = "block"
})