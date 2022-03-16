let img = {
    node: null,
    python: null,
    html: null,
    css: null,
    c: null,
    javac: null,
    type: null
}


window.onresize = CanvasSize;
window.onload = LogoInit;

function dist(x1, x2, y1, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

function CanvasW() {
    return window.innerWidth; 
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function CanvasImageLoad() {
    let imgName = Object.keys(img);
    for (let i = 0; i < imgName.length; i++) {
        img[`${imgName[i]}`] = document.getElementById(`${imgName[i]}`)
    }
}

function CanvasSize() {
    const canvas = document.getElementById("lvllang");
    canvas.width = window.innerWidth - 60;   
}


let x = [];
let y = [];
function getPosX() {
    return getRandomInt(CanvasW-75)+75;
}

function getPosY(i) {
    let interval = [];
    for (let e = 0; e < x.length-1; e++) {
        if (x[i] < x[e]+50 && x[i] > x[e]-50) {
            interval.push(y[i]);
        }
    }
    
}

function LogoInit() {
    for (let i = 0; i < 7; i++ ){
        x.push(getPosX());
        y.push(getPosY(i));
    }
    CanvasImageLoad();
    console.log(x);
    console.log(y);
}


function CanvasDisplay() {
    let canvas = document.getElementById("lvllang");
    let ctx = canvas.getContext("2d");
    let imgName = Object.keys(img);
    for (let i = 0; i < imgName.length; i++) {
        ctx.drawImage(img[`${imgName[i]}`],x[i]-37.5,y[i]-37.5, 75,75);
    }
}


function CanvasMain() {
    CanvasSize();
    CanvasDisplay();
}
setInterval(CanvasMain,30);