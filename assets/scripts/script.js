const MD    = document.querySelector('.mousedown');
const MO    = document.querySelector('.mouseover');
const MV    = document.querySelector('.mousemove');
const CLK   = document.querySelector('.click');
const DCLK  = document.querySelector('.doubleclick');
const CNTXT = document.querySelector('.context');

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

CLK.addEventListener('click' , (e) => {
    CLK.style.background = `#${rand(6)}`;
});

DCLK.addEventListener('dblclick' , (e) => {
    DCLK.style.background = `#${rand(6)}`;
});

CNTXT.addEventListener('contextmenu' , (e) => {
    CNTXT.style.background = `#${rand(6)}`;
});