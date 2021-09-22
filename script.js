let theme = document.querySelector('.theme');
let main = document.querySelector('.main');
let column = document.querySelectorAll('.column');
let list = document.querySelectorAll('.list');
let slide = document.querySelectorAll('.slide');
let next = document.querySelector('.slider-next');
let prev = document.querySelector('.slider-prev');
let arrows = document.querySelector('.buttonCase');
const sliderLine = document.querySelector('.slider-line');

// touch swipes
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);

document.addEventListener('mousedown', handleMouseStart);
document.addEventListener('mousemove', handleMouseMove);

let x1 = null;

function handleTouchStart(event) {
    x1 = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!x1) {
        return false;
    }
    let x2 = event.touches[0].clientX;
    let xDiff = x2 - x1;

    if (xDiff > 0) slidePrev()
    else slideNext();

    x1 = null;
}

function handleMouseStart(event) {
    x1 = event.clientX;
}

function handleMouseMove(event) {
    if (!x1) {
        return false;
    }
    let x2 = event.clientX;
    let xDiff = x2 - x1;

    if (xDiff > 0) slidePrev()
    else slideNext();

    x1 = null;
}

// --------------------------------------

theme.addEventListener('click', toggler);

function toggler() {
    arrows.style.color = 'white';
    if (arrows.style.color === 'black') {
        arrows.style.color = 'white';
    }
    if (arrows.style.color === 'white') {
        arrows.style.color = 'black';
    }

    main.classList.toggle('dark');

    for (let el of column) {
        el.classList.toggle('dark_theme');
    }
    for (let el of list) {
        el.classList.toggle('list_dark_theme');
    }
    for (let el of slide) {
        el.classList.toggle('slide-dark');
    }
}

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);

let offset = 0;

function slideNext() {
    offset += 370;
    if (offset > 740) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
}

function slidePrev() {
    offset -= 370;
    if (offset < 0) {
        offset = 740
    }
    sliderLine.style.left = -offset + 'px';
}

(setInterval(slideNext, 5000))

