document.addEventListener("DOMContentLoaded",()=>{
    const bar = document.querySelector('.hambuger');
    const nav = document.querySelector('.nav-menu');
    bar.addEventListener('click',()=>{
        nav.style.transform="translateX(0)";
        // transform:translateX(-100%);
    })
    nav.addEventListener('click',()=>{
        nav.style.transform="translateX(-100%)";
    })
},false)