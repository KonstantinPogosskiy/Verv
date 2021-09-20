let theme = document.querySelector('.theme');
let main = document.querySelector('.main');
let column = document.querySelectorAll('.column');
let list = document.querySelectorAll('.list');
let slide = document.querySelectorAll('.slide');
let next = document.querySelector('.slider-next');
let prev = document.querySelector('.slider-prev');

theme.addEventListener('click', toggler);

function toggler() {

    main.classList.toggle('dark');

        for(let el of column) {
            el.classList.toggle('dark_theme');
        }
        for(let el of list) {
            el.classList.toggle('list_dark_theme');
        }
        for(let el of slide) {
            el.classList.toggle('slide-dark');
        }
}

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

next.addEventListener('click', () => {
    offset += 300;
    if(offset > 600) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
})

prev.addEventListener('click', () => {
    offset -= 300;
    if(offset < 0) {
        offset = 600
    }
    sliderLine.style.left = -offset + 'px';
})

(setInterval(() => {
    offset += 300;
    if(offset > 600) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
}, 5000))