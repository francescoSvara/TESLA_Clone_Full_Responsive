/* const fullpageEl = document.getElementById('fullpage') */


const menuBtn = document.querySelector('.menu__btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation__close__btn')
const blurOverlay = document.querySelector('.blur__overlay')

const CLICK = 'click'
const IS_ACTIVE = 'is--active'

let currentScrollPosition = 0;
let previousScrollPosition = 0;

const toggleNavigation = () => {
    /* fullpageEl.classList.toggle('no.scroll') */
    navigation.classList.toggle(IS_ACTIVE)
    document.body.style.overflow = navigation.classList.contains(IS_ACTIVE) ? 'hidden' : 'scroll'
    blurOverlay.classList.toggle(IS_ACTIVE)
    if (navigation.classList.contains(IS_ACTIVE)) {
        previousScrollPosition = window.pageYOffset;
    } else {
        window.scrollTo(0, previousScrollPosition);        
    }    
}

menuBtn.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)
window.addEventListener("load", createFullPageScrolling);

function createFullPageScrolling() {
var sections = document.getElementsByClassName("section");
var currentSection = 0;
    
document.addEventListener("wheel", function(event) {
    if (navigation.classList.contains(IS_ACTIVE)) {
        return;
    }
    if (event.deltaY > 0) {
        if (currentSection < sections.length - 1) {
            currentSection++;
        }
    } else {
        if (currentSection > 0) {
            currentSection--;
        }
    }
    window.scrollTo({
        top: sections[currentSection].offsetTop,
        behavior: "smooth"
    });
});
}