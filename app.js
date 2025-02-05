const hamb = document.querySelector('.header .nav-bar .hamb');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');

hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


document,addEventListener('scroll',() => {
    var scroll_position = window.scrollY;
    const header = document.querySelector('#header .header');

    if(scroll_position > 250){

        header.style.backgroundColor = '#29323c';
    } else{
        header.style.backgroundColor = 'transparent';
    }
});