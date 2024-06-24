// Select elements
const nav = document.querySelector('.nav');
const counters = Array.from(document.querySelectorAll('.number, .number-one, .number-two'));
const icons = Array.from(document.querySelectorAll('.img1'));
const down = document.querySelector('.down');
const up = document.querySelector('.up');

// Sticky navigation
const initialCoords = document.querySelector('#section--1').getBoundingClientRect();
window.addEventListener('scroll', () => {
    if (window.scrollY < initialCoords.top) {
        nav.classList.remove('sticky');
        up.classList.remove('into');
        down.classList.remove('into');
    } else {
        nav.classList.add('sticky');
        up.classList.add('into');
        down.classList.add('into');
    }
});

// Counters
const countersData = [
    { array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], text: 'Trainers' },
    { array: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 30, 34, 38, 42, 44, 46, 48, 50], text: 'Programs' },
    { array: [10, 40, 70, 110, 140, 170, 200, 230, 260, 290, 300, 340, 390, 440, 470, 500, 560, 590, 600, 750, 800, 900, 950, '1k'], text: 'Members' }
];

countersData.forEach((counterData, index) => {
    let idx = 1;
    setInterval(() => {
        const num = counterData.array[idx];
        counters[index].innerHTML = num;
        if (idx > counterData.array.length - 1) {
            counters[index].innerHTML = counterData.array[counterData.array.length - 2] + "+ " + counterData.text;
            counters[index].classList.add('stop');
        } else {
            counters[index].classList.remove('stop');
        }
        idx++;
    }, 80);
});

// Icon reveal
const revealIcons = () => {
    const trigger = window.innerHeight / 5 * 4;
    icons.forEach(icon => {
        const iconCoords = icon.getBoundingClientRect().top;
        if (iconCoords < trigger) {
            icon.classList.add('show');
        } else {
            icon.classList.remove('show');
        }
    });
};

revealIcons();
window.addEventListener('scroll', revealIcons);

// Smooth scrolling
const sections = Array.from(document.querySelectorAll('section'));
window.addEventListener('scroll', () => {
    const currentSection = sections.find(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        return sectionTop - sectionHeight / 3 <= 0;
    });

    if (currentSection) {
        const id = currentSection.getAttribute('id');
        document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
    }
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const targetSection = document.querySelector(href);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});