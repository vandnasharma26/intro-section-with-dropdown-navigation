const menus = document.querySelectorAll('.drop-down');

for(menu of menus) {
    menu.addEventListener('click', function() {
        // Selects the descendats of clicked event whose class is 'drop-down-menu', or 'arrow-icon'
        const dropDownMenu = this.querySelector('.drop-down-menu');
        const arrowIcon = this.querySelector('.arrow-icon');

        // if(dropDownMenu) checks whether the elements exists or not
        if(dropDownMenu) {
            // toggle effect
            if(dropDownMenu.style.display === 'none' ||
               dropDownMenu.style.display === ''){
                    dropDownMenu.style.display = 'block';
                    arrowIcon.src = 'images/icon-arrow-up.svg'
               } else {
                    dropDownMenu.style.display = 'none';
                    arrowIcon.src = 'images/icon-arrow-down.svg'
               }
        }
    })
}

const screenWidth = window.screen.width;
const menuIcon = document.querySelector('#menu');
const closeMenuIcon = document.querySelector('#icon-close-menu');

if(screenWidth <701) {
    document.querySelector('.content-title').innerHTML = 'Make remote work';
}

closeMenuIcon.addEventListener('click', function() {
    document.querySelector('.mobile-menu').style.display = 'none';
    document.querySelector('.main-menu').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
})

menuIcon.addEventListener('click', function(){
    document.querySelector('.mobile-menu').style.display = 'block';
    document.querySelector('.main-menu').style.display = 'flex';
    document.querySelector('.overlay').style.display = 'block'; 
})