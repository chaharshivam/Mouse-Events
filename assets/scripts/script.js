const MD = document.querySelector('.mousedown');
const MO = document.querySelector('.mouseover');
const MV = document.querySelector('.mousemove');

let rand = digits => Math.floor( Math.random() * Math.pow(10, digits) );

MD.addEventListener('mousedown' , (e) => {
    MD.style.background = `#${rand(6)}`;
});

MO.addEventListener('mouseover', (e) => {
    MO.style.background = `linear-gradient(to right, #${rand(6)},#${rand(6)}`;
});

MV.addEventListener('mousemove', (e) => {
    MV.style.background = `#${rand(6)}`;
});