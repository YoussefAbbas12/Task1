let nav = document.querySelector('header nav')
let Links = document.querySelector('header nav .headerLinks')
let openIcon = document.querySelector('header nav .navIcon')
let closeIcon = document.querySelector('header nav .navClose')
window.onscroll = function(){
    if(window.scrollY < 45){
        nav.removeAttribute('class')
        document.querySelector('header').style.padding = '45px 105px 0 116px'
    }else{
        nav.setAttribute('class' ,'active')
        document.querySelector('header').style.padding = '85px 105px 0 116px'
    }
};


openIcon.addEventListener('click' , () =>{
    openIcon.style.display = 'none';
    closeIcon.style.display = 'inline';

    Links.style.height = 'fit-content'
})
closeIcon.addEventListener('click' , () =>{
    closeIcon.style.display = 'none';
    openIcon.style.display = 'inline';
 
    Links.style.height = '0'
})