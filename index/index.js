const menu=document.getElementById("menu");
const span=document.getElementById("exit");
const hid=document.getElementById("nav-hid");

menu.addEventListener("click",function(){
    hid.style.opacity=100;
});

span.addEventListener("click", function(){
    hid.style.display="none"
    
});