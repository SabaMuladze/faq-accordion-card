const boxes = document.querySelectorAll('.box')
const label = document.querySelectorAll('.label')
const btns = document.querySelectorAll('button')
const content = document.querySelectorAll('.content')


boxes.forEach((item) => {

    item.addEventListener('click', (e) => {


        if (item.classList.contains('active')) {

            item.classList.add('active');

            label.forEach((lbl) => {
                lbl.classList.remove('label-border');
            });

        } else {
            boxes.forEach(list => {
                list.classList.remove('active')
            })
            label.forEach((lbl) => {
                lbl.classList.add('label-border');
            });
        }

        item.classList.toggle('active');
    });





})

