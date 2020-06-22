/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var sectionsCount = document.getElementsByClassName("landing__container").length;
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    for (let i = 0; i < sectionsCount; i++) {
        const newElement = document.createElement('li');
        newElement.innerText = 'Section ' + (i + 1);
        newElement.setAttribute('target-nav', newElement.innerText);
        newElement.classList.add("menu__link");
        fragment.appendChild(newElement);
    }
    document.getElementById("navbar__list").appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function(e) {
    let currentScrollPosition = window.scrollY;
    const sections = document.getElementsByTagName("section");
    if(currentScrollPosition > 100) {
        document.querySelector("ul").classList.add("minimize");
    } else {
        document.querySelector("ul").classList.remove("minimize");
    }
    
    for (const section of sections) {
        let activeSection = section.getAttribute("data-nav");
        let activeLink    = document.querySelector(`li[target-nav = '${activeSection}']`);
        if(Math.abs(section.offsetTop - currentScrollPosition) < 150) {
            activeLink.classList.add('menu__link__active');
            section.classList.add("your-active-class");
            document.getElementById('navbar__list').scrollTop = activeLink.offsetTop-10;
        } else {
            activeLink.classList.remove('menu__link__active');
            section.classList.remove("your-active-class");
        }
    }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
window.addEventListener('DOMContentLoaded', ($event) => {
    buildNav();
});

// Build menu 
const linksContainer = document.getElementById("navbar__list");
linksContainer.addEventListener("click", function(evt) {
    let section = evt.target.innerText;
    let target = document.querySelector(`section[data-nav = '${section}']`);
    target.scrollIntoView();
});
// Scroll to section on link click

// Set sections as active
// function setActive(section) {
//     const target = document.querySelector(`section[data-nav = '${section}']`);
//     if(!target.classList.contains("your-active-class")) {
//         target.classList.add("your-active-class");
//     }
// }

