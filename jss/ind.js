
let menue =document.querySelector('#menu-icon');
const navebar =document.querySelector('#navbar');
menue.onclick= ()=>{
    menue.classList.toggle("bx-x");
    navebar.classList.toggle("active");
}
console.log(navebar);
console.log(menue);

