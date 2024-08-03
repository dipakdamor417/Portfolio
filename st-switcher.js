
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})



// scroll hide
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.toggle("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// theme color

const alterStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {

    alterStyle.forEach((style) => {
        if(color == style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            console.log("bsdfb");
        }
    })
}

// theme

const daynight = document.querySelector(".day-night");

daynight.addEventListener("click",() =>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load",() =>{
    if(document.body.classList.contains("dark")) {
        daynight.querySelector("i").classList.toggle("fa-sun");
    }
    else{
        daynight.querySelector("i").classList.toggle("fa-moon");
    }


})

