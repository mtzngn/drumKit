// in this project we will create different sounds accordance to the keys 
// pressed on key board.

//creating variables for each ssounds to be played
var clap = new Audio("./sounds/clap.wav")
var hihat = new Audio("./sounds/hihat.wav")
var kick = new Audio("./sounds/kick.wav")
var openhat = new Audio("./sounds/openhat.wav")
var boom = new Audio("./sounds/boom.wav")
var ride = new Audio("./sounds/ride.wav")
var snare = new Audio("./sounds/snare.wav")
var tom = new Audio("./sounds/tom.wav")
var tink = new Audio("./sounds/tink.wav")
//adding the event listener 
window.addEventListener("keydown", (e)=>{
    if (e.key == "a") {
        clap.play()
    } else if (e.key == "s") {
        hihat.play()
    }else if (e.key == "d") {
        kick.play()
    }else if (e.key == "f") {
        openhat.play()
    }else if (e.key == "g") {
        boom.play()
    }else if (e.key == "h") {
        ride.play()
    }else if (e.key == "j") {
        snare.play()
    }else if (e.key == "k") {
        tom.play()
    }else if (e.key == "l") {
        tink.play()
    }
})
var boxes = document.getElementsByClassName("box")

boxes[0].addEventListener("click", ()=>{
    clap.play()
})
boxes[1].addEventListener("click", ()=>{
    hihat.play()
})
boxes[2].addEventListener("click", ()=>{
    kick.play()
})
boxes[3].addEventListener("click", ()=>{
    openhat.play()
})
boxes[4].addEventListener("click", ()=>{
    boom.play()
})
boxes[5].addEventListener("click", ()=>{
    ride.play()
})
boxes[6].addEventListener("click", ()=>{
    snare.play()
})
boxes[7].addEventListener("click", ()=>{
    tom.play()
})
boxes[8].addEventListener("click", ()=>{
    tink.play()
})