const Info = [
    {
        name:"burger",
        img:"./img/burger.png"
    },
    {
        name:"fire",
        img:"./img/fire.png"
    },
    {
        name:"flash",
        img:"./img/flash.png"
    },
    {
        name:"gift",
        img:"./img/gift.png"
    },
    {
        name:"plant",
        img:"./img/plant.png"
    },
    {
        name:"tron",
        img:"./img/tron.png"
    },
    {
        name:"ufo",
        img:"./img/ufo.png"
    },
    {
        name:"youtube",
        img:"./img/youtube.png"
    }
];
const box = document.querySelector(".box");
const boxPoint = document.querySelector(".point");
const success = document.querySelector(".success");
let count = 0;
let point = 0;
let state = true;   
boxPoint.textContent = `Point:${point}`;
const arrayInfo = [...Info,...Info].sort(()=> 0.5 - Math.random());
arrayInfo.forEach(item => {
    let img = document.createElement("img");
    img.classList.add("img");
    img.setAttribute("data-name",item.name);
    img.setAttribute("src","./img/question.gif");
    box.appendChild(img);
})
box.addEventListener("click",(e) => {
    if (state === false) {
        return;
    }
    if (e.target.matches(".img")) {
        count++;
        if (count < 2) {
            e.target.classList.add("section");
            e.target.setAttribute("src",`./img/${e.target.dataset.name}.png`);
        } else {
            count = 0;
            e.target.classList.add("section");
            e.target.setAttribute("src",`./img/${e.target.dataset.name}.png`);
            state = false;
            setTimeout(function() {
                state = true;
                let chose = document.querySelectorAll(".section");
                if (chose[0].dataset.name === chose[1].dataset.name) {
                    chose[0].style.opacity = `0`;
                    chose[0].style.visibility = `hidden`;
                    chose[1].style.opacity = `0`;
                    chose[1].style.visibility = `hidden`;
                    chose[0].classList.remove("section");
                    chose[1].classList.remove("section");
                    point++;
                    boxPoint.textContent =  `Point:${point}`;
                    if (point === ((arrayInfo.length) / 2)) {
                        success.style.transform = `translate(-50%,-50%) scale(1)`;
                    }
                } else {
                    chose[0].classList.remove("section");
                    chose[1].classList.remove("section");
                    chose[0].setAttribute("src","./img/question.gif");
                    chose[1].setAttribute("src","./img/question.gif");
                }
            },2000);
            
        }
    }
})