# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

Mobile version:
![drop-down-mobile](https://github.com/vandnasharma26/intro-section-with-dropdown-navigation/assets/86317804/b8ca7530-40b7-4c5b-a0cf-b7d22f4e98a6)

Desktop Version:
![drop-down-desktop](https://github.com/vandnasharma26/intro-section-with-dropdown-navigation/assets/86317804/1bb3c26f-7b1c-4a99-85fb-844197981bdf)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

The overlay css code, it was so simple yet it was so hard for me. I admit, I took help of chatgpt for it, bet I still have to appreciate it

```css
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
    display: none; /* Initially hidden */
    z-index: 2; /* Place it above other content */
  }
```

Definitely, after a lot of heat and trials, I got them drop-down effect, which I am proud of
```js
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
```

## Author

- Frontend Mentor - [@vandnasharma26](https://www.frontendmentor.io/profile/vandnasharma26)
