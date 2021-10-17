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
let continueButton = document.querySelector('.continue');

// touch swipes
let interval = setInterval(slideNext, 5000);

overflow.addEventListener('mousemove', handleMouseMove);
overflow.addEventListener('touchmove', (event) => {
    clearInterval(interval);
    handleTouchMove(event);
    interval = setInterval(slideNext, 5000);
});

overflow.addEventListener('mousedown', (event) => {
    clearInterval(interval);
    handleMouseDown(event);
    interval = setInterval(slideNext, 5000);
});

overflow.addEventListener('touchstart', handleTouchStart);

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
for (let el of theme) {
    el.addEventListener('click', toggler);
}


function toggler () {

    /*
        arrows.style.color = 'white';
        if (arrows.style.color === 'black') {
            arrows.style.color = 'white';
        }
        if (arrows.style.color === 'white') {
            arrows.style.color = 'black';
        }
    */
    for (let el of theme) {
        if (el.style.display === 'none') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }

    for (let el of light) {
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
    // iPhone X
    if(document.body.clientWidth <= '375') {
        offset += 340;
        if (offset > 710) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    }
    // iPhone XR
    else if (document.body.clientWidth >= '414') {
        offset += 379;
        if (offset > 758) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    }
}

function slidePrev() {
    // iPhone X
    if(document.body.clientWidth <= '375') {
        offset -= 340;
        if (offset < 0) {
            offset = 710;
        }
        sliderLine.style.left = -offset + 'px';
    }
    // iPhone XR
    else if (document.body.clientWidth >= '414') {
        offset -= 379;
        if (offset < 0) {
            offset = 758;
        }
        sliderLine.style.left = -offset + 'px';
    }

    x1 = null;
}


let col = ''

for (let el of list) {
    el.addEventListener('click', () => {
        removeClass(list, 'active');
        el.classList.add('active');
        col = el.dataset.list;
    });


    continueButton.addEventListener('click', () => {
        document.location.href = `https://www.google.com/search?${col}`
    })

    function removeClass(array, className) {
        array.forEach((item) => item.classList.remove(className))
    }
}








