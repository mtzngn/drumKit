// in this project we will create different sounds accordance to the keys 
// pressed on key board.
// window.addEventListener("keydown", logKey)

// function logKey(e) {

//         keyValue.textContent = e.key.toLowerCase();
//         charCode.textContent = e.which ;
//         result.textContent = e.which;


//     keyCode.textContent = e.code;
//     for (let i = 0; i < boxes.length; i++) {
//         boxes[i].style.visibility = ""
//     }
//     heading.style.visibility = "hidden";
//     heading.style.marginTop = "0";


// }


var clap = new Audio("./sounds/clap.wav")
var hihat = new Audio("./sounds/hihat.wav")
var kick = new Audio("./sounds/kick.wav")
var openhat = new Audio("./sounds/openhat.wav")
var boom = new Audio("./sounds/boom.wav")
var ride = new Audio("./sounds/ride.wav")
var snare = new Audio("./sounds/snare.wav")
var tom = new Audio("./sounds/tom.wav")
var tink = new Audio("./sounds/tink.wav")
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
