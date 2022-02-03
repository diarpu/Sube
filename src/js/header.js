const body = document.querySelector('body');


/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    bgAsideBox = document.querySelector('.bg-overlay')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        bgAsideBox.classList.add('active')
        body.classList.add('hidden')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        bgAsideBox.classList.remove('active')
        body.classList.remove('hidden')
    })
}

if(bgAsideBox){
    bgAsideBox.addEventListener('click', (e) =>{
        navMenu.classList.remove('show-menu')
        bgAsideBox.classList.remove('active')
        body.classList.remove('hidden')
    } )
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.goto')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    bgAsideBox.classList.remove('active')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// OPEN SUBMENU
const dropMenu = document.querySelector('.drop-menu');

function dropMenuList(){
    const subMenu = document.querySelector('.submenu');
    subMenu.classList.toggle('submenu--active');
}

dropMenu.addEventListener('click', dropMenuList)


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50){
        header.classList.add('header-sticky');
        body.classList.remove('hidden');
    }
    else{
        header.classList.remove('header-sticky');
    } 
}
window.addEventListener('scroll', scrollHeader)


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset
    
//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50;
//         const sectionId = current.getAttribute('id');
        
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)