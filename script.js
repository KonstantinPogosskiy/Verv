let theme = document.querySelectorAll('.theme');
let column = document.querySelectorAll('.column');
let list = document.querySelectorAll('.list');
let light = document.querySelectorAll('._light');
let slide = document.querySelectorAll('.slide');
let next = document.querySelector('.slider-next');
let prev = document.querySelector('.slider-prev');
// let arrows = document.querySelector('.buttonCase');
let sliderLine = document.querySelector('.slider-line');
let overflow = document.querySelector('.overflow');

// touch swipes
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);

overflow.addEventListener('mousedown', handleMouseDown);
overflow.addEventListener('mouseup', handleMouseUp);

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

function handleMouseDown(event) {
    x1 = event.clientX;
}

function handleMouseUp(event) {

    let x2 = event.clientX;
    let xDiff = x2 - x1;

    if (xDiff > 0) slidePrev()
    else slideNext();

    x1 = null;
}

// --------------------------------------
for(let el of theme) {
    el.addEventListener('click', toggler);
}


function toggler() {

/*
    arrows.style.color = 'white';
    if (arrows.style.color === 'black') {
        arrows.style.color = 'white';
    }
    if (arrows.style.color === 'white') {
        arrows.style.color = 'black';
    }
*/
    for(let el of theme) {
        if (el.style.display === 'none') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        };
    }

    for(let el of light) {
        el.classList.toggle('dark');
    }
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
    offset += 335;
    if (offset > 670) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}

function slidePrev() {
    offset -= 335;
    if (offset < 0) {
        offset = 670;
    }
    sliderLine.style.left = -offset + 'px';
}

(setInterval(slideNext, 5000))



