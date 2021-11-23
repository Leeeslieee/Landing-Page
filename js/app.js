function buildNavigationBar() {
    const navItem = document.getElementsByTagName('h2');
    const fragment = document.createDocumentFragment();
    const navul = document.getElementById('nav-ul');
    for (let i = 0; i < navItem.length; i++) {
        const newListItem = document.createElement('li');
        newListItem.classList.add('navList');
        newListItem.innerHTML = '<a href="#section' + (i + 1) + '">' + navItem[i].innerText + '</a>';
        
        newListItem.addEventListener('click', function(event){
            event.preventDefault();
            const navSection=document.getElementById('section'+(i+1).toString());
            navSection.scrollIntoView({block: "center", inline: "nearest"});
        })
        
        
        fragment.appendChild(newListItem);
        console.log(newListItem);

    }
    navul.appendChild(fragment);

}
buildNavigationBar();


function isInView(elem) {
    if (elem.getBoundingClientRect().top < 250 && elem.getBoundingClientRect().top > 0) {
        return true;
    } else {
        return false;
    }
}

function setActive() {
    for (let i = 0; i < sections.length; i++) {
        if (isInView(sections[i])) {
            sections[i].classList.add('active-view');
            navBar[i].classList.add('active-nav');
        } else {
            sections[i].classList.remove('active-view');
            navBar[i].classList.remove('active-nav');
        }
    }
}

let navBar=document.querySelectorAll('.navList');
let sections=document.querySelectorAll('section');
document.addEventListener('scroll', setActive);


