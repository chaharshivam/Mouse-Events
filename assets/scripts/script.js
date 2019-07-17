const MD = document.querySelector('.mousedown');
const MO = document.querySelector('.mouseover');
const MV = document.querySelector('.mousemove');

MD.addEventListener('mousedown' , (e) => {
    MD.style.background = `#${Math.floor( Math.random() * 1000000)}`;
});

MO.addEventListener('mouseover', (e) => {
    MO.style.background = 
    `linear-gradient(to right, #${Math.floor( Math.random() * 1000000)},#${Math.floor( Math.random() * 1000000)}`;
});

MV.addEventListener('mousemove', (e) => {
    MV.style.background = `#${Math.floor( Math.random() * 1000000)}`;
});