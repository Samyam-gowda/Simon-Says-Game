let gameseq = [];
let userseq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelup();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 900);

}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 500);

}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `LEVEL${level}`;
    let rand = Math.random();
    rand = rand * 3;
    rand = Math.floor(rand);
    let randcol = btns[rand];
    let randbtn = document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    console.log(gameseq);
    gameFlash(randbtn);
}


function checkAns(inx) {
    if (userseq[inx] === gameseq[inx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelup(), 1000);
        }
    }
    else {
        h2.innerHTML = `GAME OVER! <b>SCORE: ${level * 10}</b> <br> PRESS ANY KEY TO START AGAIN `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
}
function btnpress() {
    let btn = this;
    userFlash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (i of allBtns) {
    i.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}