const startbtn = document.querySelector("#start")
const stopbtn = document.querySelector("#stop")
const reset = document.querySelector("#reset")
const counter = document.querySelector(".timer")

let seconds =0;
let minutes =0;
let hours = 0;


function startStopWatch() {
    seconds++
    if(seconds > 59){
        seconds=0
        minutes++
        if(minutes  > 59){
            minutes=0
            hours++
        }
        
    }
    let finalseconds = seconds < 10 ? ` 0${seconds}`: seconds
    let finalminutes = minutes < 10 ? ` 0${minutes}`: minutes
    let finalhour =  hours < 10 ? `0 ${hours}`: hours
    counter.textContent = `${finalhour}: ${finalminutes}: ${finalseconds}`
}

let info = null

startbtn.addEventListener("click", function () {
    
    info = setInterval(() => {
        startStopWatch();
    }, 1000);
})


stopbtn.addEventListener("click",function () {
    clearInterval(info)
    info = null
})

reset.addEventListener("click", function () {
    clearInterval(info)
    info =null
    seconds =0
    minutes =0
    hours=0
    counter.textContent ="00" + ":" + "00" + ":" + "00"    
})