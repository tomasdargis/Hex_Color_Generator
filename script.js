const body = document.querySelector('body');
const btn = document.querySelector('.generate');
const hex = document.querySelector('.hex');

const generateHexColor = () => {
    const randomColor = Math.random().toString(16).slice(2, 8);

    hex.textContent = '#' + randomColor;
    body.style.backgroundColor = '#' + randomColor;

    console.log(randomColor);
};

btn.addEventListener('click', generateHexColor);
body.addEventListener('mousewheel', generateHexColor);
