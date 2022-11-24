let toggles = document.getElementsByClassName('d-toggle');
let contentDiv = document.getElementsByClassName('d-content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            icons[i].classList.remove('fa-angle-down');
            icons[i].classList.add('fa-angle-up');
        }
        else{
            contentDiv[i].style.height = "0px";
            icons[i].classList.remove('fa-angle-up');
            icons[i].classList.add('fa-angle-down');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                icons[j].classList.remove('fa-angle-up');
                icons[j].classList.add('fa-angle-down');
            }
        }
    });
}

window.addEventListener("scroll", ()=>{
    var header = document.querySelector(".header-nav");
    if(window.scrollY > 150){
        header.classList.toggle("header-scroll", true);
    }else{
        header.classList.toggle("header-scroll", false);
    }
    
});

window.addEventListener("scroll", ()=>{
    var header = document.querySelector(".stick_img");
    if(window.scrollY > 1100){
        document.querySelector(".stick_img").style.display = "block"
        header.classList.toggle("sticky_stylo", true);
    }else{
        header.classList.toggle("sticky_stylo", false);
        document.querySelector(".stick_img").style.display = "none"
    }
    
});
