let load = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomArbitraryInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function display_load() {
    const loader = document.getElementById("loader");
    load = (load > 98) ? 100 : load;
    loader.innerHTML = `${load}%`;
    load += Math.floor(getRandomArbitraryInt(1, 4));
}

async function set_display() {
    let temps;
    while (load <= 100) {
        temps = getRandomArbitraryInt(20, 150); // 20 - 150
        display_load()
        await sleep(temps);
    }
    const loader = document.getElementById("loader");
    loader.classList.add("finish");
    setTimeout(set_load, 1000);
}
set_display();

function set_load() {
    const space = document.getElementById("space");
    space.classList.add("finish-space");
    setTimeout(set_load_alpha, 2500);
}

async function set_load_alpha() {
    const balise = document.getElementById("balise");
    const balise2 = document.getElementById("balise2");
    balise.classList.add("finish-balise-alpha");
    balise2.classList.add("finish-balise-alpha");
    await sleep(1000);
    document.getElementById("bg").style.display = "none";
    display_mouse();

}

function display_mouse() {
    const text_mouse = document.getElementsByClassName("scroll")[0];
    const mouse = document.getElementsByClassName("mouse")[0];
    const down = document.getElementsByClassName("down")[0];
    const mouse_left = document.getElementById("mouse-left");
    const mouse_right = document.getElementById("mouse-right");
    const lang = document.getElementsByClassName("lang")[0];
    const article1 = document.getElementById('article1');
    article1.classList.remove('none');
    lang.classList.remove("none")
    text_mouse.classList.add("view");
    mouse.classList.add("view");
    down.classList.remove("none");
    down.classList.add("view");
    down.classList.add("animation");
    mouse_left.classList.add("mouse-left");
    mouse_right.classList.add("mouse-right");
}


let frensh = false;
let anglais = true;
function frensh_clic(click) {
    const frensh_ = document.getElementsByClassName("francais")[0];
    if (frensh) {
        frensh_.classList.remove("clicked_lang");
        frensh_.classList.add("not_clicked");
        frensh = false;
    } else {
        frensh_.classList.remove("not_clicked");
        frensh_.classList.add("clicked_lang");
        frensh = true;
    }
    if (!click) {
        anglais_clic(click = true);
    }
}

function anglais_clic(click) {
    const anglais_ = document.getElementsByClassName("anglais")[0];
    if (anglais) {
        anglais_.classList.remove("clicked_lang");
        anglais_.classList.add("not_clicked");
        anglais = false;
    } else {
        anglais_.classList.remove("not_clicked");
        anglais_.classList.add("clicked_lang");
        anglais = true;
    }
    if (!click) {
        frensh_clic(click = true);
    }
}