var btn=document.getElementsByClassName("btn");
var tab=document.getElementsByClassName("tab");
var Name=document.getElementById("name");
var email=document.getElementById("email");
let submit=document.getElementById("submit")
let para=document.getElementById("para");
submit.addEventListener('click',()=>{
    if(Name.value!=" ")
    {
        localStorage.setItem(Name.value,email.value);
            para.innerHTML="* * * successfully submitted * * *";
    }
     Name.value=Name.ariaPlaceholder;
     email.value=" ";
     setTimeout(()=>{
        para.innerHTML=" ";
     },1000)
    
})
function display(tabname){
    for( let table of tab)
    {
        table.classList.remove("active");
    }

    document.getElementById(tabname).classList.add("active");
   
}