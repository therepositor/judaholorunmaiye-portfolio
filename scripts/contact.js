const menuButton = document.getElementById('menu-button');
const menuOptionsContainer = document.getElementById('menu-options-container');
const menuOptions = document.getElementById('menu-options');
const closeButton = document.getElementById('close-button');
const navLink = menuOptions.querySelectorAll('li');


console.log(navLink)

const openMenu = (e) => {
    console.log(e, 'menu opened!')
    if (e) {
        if (menuOptionsContainer.style.display !== 'flex') {
            menuOptionsContainer.style.display = 'flex';
            navLink.forEach((element, index) => {
        setTimeout(() => {
            element.style.visibility = 'visible'    
            } , index * 500);
        });
        } else {
            return
        }
    }
    
}

const closeMenu = (e) => {
    console.log(e, 'close menu!!')
    menuOptionsContainer.style.display = 'none';
    menuOptions.style.visibility = 'visible';
}
menuButton.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)

