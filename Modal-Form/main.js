var formuac = document.getElementById("formu-ac");
var modal =document.querySelector(".modal");
var formcls = document.querySelector("form-close");

formuac.addEventListener("click",()=>{
    modal.style.display = "flex"
});
form-close.addEventListener("click",()=>{
    modal.style.display = "none"
});