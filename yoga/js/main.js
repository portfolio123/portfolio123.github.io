/* Burger*/

(function(){
    const burgerItem=document.querySelector('.burger');
    const menu=document.querySelector('.right_nav');
    const menuCloseItem=document.querySelector('.header_nav-close');
    burgerItem.addEventListener('click',()=>{
        menu.classList.add('right_nav_active');
    });
    menuCloseItem.addEventListener('click',()=>{
        menu.classList.remove('right_nav_active');
    });
}());