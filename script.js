const boxes = document.querySelectorAll('.box')
const label = document.querySelectorAll('.label')
const btns = document.querySelectorAll('button')
const content = document.querySelectorAll('.content')


boxes.forEach((item) => {

    item.addEventListener('click', (e) => {


        item.classList.toggle('active');

        label.forEach((lbl) => {
            lbl.classList.toggle('label-border');
        });

    });





})

