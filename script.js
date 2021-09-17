let close = document.querySelector('.close');
let main = document.querySelector('.main');
let column = document.querySelectorAll('.column');
let list = document.querySelectorAll('.list');

close.addEventListener('click', toggler);

function toggler() {
    main.classList.toggle('dark');
        for(let el of column) {
            el.classList.toggle('dark_theme');
        }
        for(let el of list) {
            el.classList.toggle('list_dark_theme');
        }
}