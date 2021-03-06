//Function: Create Navigation Bar by section title element h2
function buildNavigationBar() {
    const navItem = document.getElementsByTagName('h2');
    const fragment = document.createDocumentFragment();
    //get parent element ul
    const navul = document.getElementById('nav-ul');
    //create child element li and listens to 'click' event
    for (let i = 0; i < navItem.length; i++) {
        const newListItem = document.createElement('li');
        newListItem.classList.add('navList');
        newListItem.innerHTML = '<a href="#section' + (i + 1) + '">' + navItem[i].innerText + '</a>';
        newListItem.addEventListener('click', function (event) {
            event.preventDefault();
            const navSection = document.getElementById('section' + (i + 1).toString());
            navSection.scrollIntoView(true);
            var yChange = window.scrollY;
            if (yChange) {
                window.scroll(0, yChange - 150);
            }
        })
        fragment.appendChild(newListItem);
    }
    navul.appendChild(fragment);
}

buildNavigationBar();

//Function: Check if the section is in viewpoint and return boolean value
function isInView(elem) {
    //The following code is used to test for ordinates
    //console.log(elem.getBoundingClientRect().top + " " + elem.getBoundingClientRect().bottom)
    if ((elem.getBoundingClientRect().top < 250 && elem.getBoundingClientRect().top > 0)
        || (elem.getBoundingClientRect().top < 0 && elem.getBoundingClientRect().bottom > 600)) {
        return true;
    } else {
        return false;
    }
}

//Function: style the navbar and section based on return value of isInView function
//by looping through the entire navbar and all sections
function setActive() {
    nav.classList.remove("navbar-hide");
    for (let i = 0; i < sections.length; i++) {
        if (isInView(sections[i])) {
            sections[i].classList.add('active-view');
            navBar[i].classList.add('active-nav');
        } else {
            sections[i].classList.remove('active-view');
            navBar[i].classList.remove('active-nav');
        }
    }
    //Hide navbar when not scrolling
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        nav.classList.add("navbar-hide");
    }, 1500)
}

let navBar = document.querySelectorAll('.navList');
let sections = document.querySelectorAll('section');
let nav = document.getElementById('nav-ul');
let timer = null;
document.addEventListener('scroll', setActive);
