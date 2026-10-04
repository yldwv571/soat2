const watches = [
    {
        img: "Frame 24 (1).png",
        bg: "linear-gradient(90deg, rgba(244, 167, 100, 1) 44%, rgba(255, 222, 194, 1) 62%)",
        btnBg: "rgba(255, 222, 194, 1)"
    },
    {
        img: "Frame 25.png",
        bg: "linear-gradient(90deg, rgb(142, 126, 112) 44%, rgb(159, 155, 152) 62%)",
        btnBg: "rgb(159, 155, 152)"
    },
    {
        img: "Frame 26.png",
        bg: "linear-gradient(90deg, rgb(45, 226, 51) 44%, rgb(162, 239, 104) 62%)",
        btnBg: "rgb(162, 239, 104)"
    },
    {
        img: "Frame 27.png",
        bg: "linear-gradient(90deg, rgb(219, 16, 16) 44%, rgb(212, 67, 67) 62%)",
        btnBg: "rgba(212, 67, 67)"
    }
];

let currentIndex = 0;

const watchImg = document.getElementById('watch-img');
const nextBtn = document.querySelector('.next-btn'); // O'ng strelka
const prevBtn = document.querySelector('.prev-btn'); // Chap strelka
const buttons = document.querySelectorAll('.btn');

function changeWatch(direction) {
    // 1. Soat qaysi tomonga qarab chiqib ketishini belgilaymiz
    if (direction === 'next') {
        watchImg.classList.add('slide-left'); // O'ng strelka bosilsa chapga suriladi
        currentIndex = (currentIndex + 1) % watches.length;
    } else {
        watchImg.classList.add('slide-right'); // Chap strelka bosilsa o'ngga suriladi
        currentIndex = (currentIndex - 1 + watches.length) % watches.length;
    }

    // 2. Animatsiya tugagach yangi soatni joyiga keltiramiz
    setTimeout(() => {
        watchImg.src = watches[currentIndex].img;
        document.body.style.background = watches[currentIndex].bg;
        buttons.forEach(btn => {
            btn.style.background = watches[currentIndex].btnBg;
        });

        // Animatsiya klasslarini olib tashlaymiz
        watchImg.classList.remove('slide-left', 'slide-right');
    }, 300);
}

// O'ng strelkani bosganda (soat chapga yuradi)
nextBtn.addEventListener('click', () => {
    changeWatch('next');
});

// Chap strelkani bosganda (soat o'ngga yuradi)
prevBtn.addEventListener('click', () => {
    changeWatch('prev');
});