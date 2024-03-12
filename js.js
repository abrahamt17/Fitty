const nav = document.querySelector('.nav');
const scrolled = document.querySelector('#section--1');
const down = document.querySelector('.down')
const up = document.querySelector('.up')
const counter = document.querySelector('.number')
const counter2 = document.querySelector('.number-one')
const counter3 = document.querySelector('.number-two')



//sticky Navbar
// const initialCoords = scrolled.getBoundingClientRect();
// window.addEventListener("scroll", function() {
//     if (this.window.scrollY < initialCoords.top) {
//         nav.classList.remove('sticky');
//         up.classList.remove('into');
//         down.classList.remove('into')
//     } else {
//         nav.classList.add('sticky')
//         up.classList.add('into');
//         down.classList.add('into')
//     }

// });
// console.log(initialCoords)





// status array for Counting
//1
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
let idx = 1

function loop() {

    const num = array[idx]

    idx++
    counter.innerHTML = num

    if (idx > array.length - 1) {
        counter.innerHTML = array[22] + "+" + ' ' + 'Trainers'
        counter.classList.add('stop')
    } else {
        counter.classList.remove('stop')
    }

}



setInterval(loop, 80)
    //2
array3 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 30, 34, 38, 42, 44, 46, 48, 50]
let idxxx = 1

function loop3() {

    const num3 = array3[idxxx]

    idxxx++
    counter3.innerHTML = num3

    if (idxxx > array.length - 1) {
        counter3.innerHTML = array3[20] + "+" + ' ' + 'Programs'
        counter3.classList.add('stop')
    } else {
        counter3.classList.remove('stop')
    }


}
setInterval(loop3, 80)
    //3
array2 = [10, 40, 70, 110, 140, 170, 200, 230, 260, 290, 300, 340, 390, 440, 470, 500, 560, 590, 600, 750, 800, 900, 950, '1k']
let idxx = 1

function loop2() {

    const num2 = array2[idxx]

    idxx++
    counter2.innerHTML = num2

    if (idxx > array2.length - 1) {
        counter2.innerHTML = array2[22] + "+" + ' ' + 'Members'
        counter2.classList.add('stop')
    } else {
        counter2.classList.remove('stop')
    }
}

setInterval(loop2, 80)




///pAge 2


//scroll anime

const section1 = document.querySelector('#section--1');


function reavel() {
    const trigger = window.innerHeight / 5 * 4;

    document.querySelectorAll('.img1').forEach(function(icon) {
        const s1coords = icon.getBoundingClientRect().top;
        if (s1coords < trigger) {
            icon.classList.add('show')
        } else { icon.classList.remove('show') }

    })
}

reavel() /

    //scroll
    window.addEventListener('scroll', () => {
        let value = window.scrollY
        if (value > 608) {
            console.log(counter2)

        }
    })

// window.addEventListener('scroll', function(e) {

//     const s1coords = section1.getBoundingClientRect();


//     // Scrolling
//     // window.scrollTo(
//     //   s1coords.left + window.pageXOffset,
//     //   s1coords.top + window.pageYOffset
//     // );

//     window.scrollTo({
//         left: s1coords.left + window.pageXOffset,
//         top: s1coords.top + window.pageYOffset,
//         behavior: 'smooth',
//     });

//     section1.scrollIntoView({ behavior: 'smooth' });
// });