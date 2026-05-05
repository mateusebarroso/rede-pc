let menu = document.querySelector(".toggle");
let ulEl = document.querySelector('.navigator')

menu.addEventListener('click', e=>{
    ulEl.classList.toggle('active')
})