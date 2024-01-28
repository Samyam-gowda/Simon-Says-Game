let gameseq=[];
let userseq=[];
let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelup();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    },1000);

}

function levelup(){
    level++;
    h2.innerText = `LEVEL ${1}`;
    let rand = Math.random();
    rand = rand*3;
    rand  = Math.floor(rand);
    let randcol = btns[rand];
    let randbtn = document.querySelector(`.${randcol}`);
    btnFlash(randbtn);
}

function btnpress(){
    let btn = this;
    btnFlash(btn);
    console.log("btn pressed");
}

let allBtns = document.querySelectorAll(".btn");
for(i of allBtns){
    i.addEventListener("click",btnpress);
}