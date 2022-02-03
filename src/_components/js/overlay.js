let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

import { gsap } from "gsap";

const body = document.querySelector('body');
let tl = gsap.timeline();


document.addEventListener("DOMContentLoaded", function(event) {
    // tl.to(".overlay__logo", {
    //     opacity: 1,
    //     ease: "expo.Out",
    //     onUpdate: logoAnimate
    // })

    // .to(".overlay__logo", {
    //     duration: 1,
    //     delay: 4,
    //     y: -100,
    //     opacity: 0,
    //     ease: "expo.Out"
    // })

    tl.to(".overlay", {
        delay: 1,
        duration: 1,
        top: "-120%",
        ease: "expo.Out",
    })

    // .from('.text__container > *',{
    //     duration: 1,
    //     x: "100px",
    //     opacity: 0,
    //     ease: "expo.Out"
    // },"-=.5")

    // .from('.datos__consultorio',{
    //     duration: 1,
    //     right: "-100%",
    //     ease: "expo.Out"
    // },"-=.8")

    // .from('.datos__consultorio > *',{
    //     duration: 1,
    //     x: "100px",
    //     opacity: 0,
    //     ease: "expo.Out",
    //     onUpdate: bodyHidden
    // },"-=.8")

    
    // .from('.main_bg',{
    //     duration: 1,
    //     x: "50px",
    //     opacity: 0,
    //     ease: "expo.Out",
    // },"-=1")

})

// function logoAnimate(){
//     new Vivus(
//         'boxes', {
//             type: 'delayed',
//             duration: 200,
//             animTimingFunction: Vivus.Ease
//         },
//     )
// }

// function bodyHidden(){
//     body.classList.remove('hidden');
// }