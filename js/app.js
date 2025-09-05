const music = document.querySelector("audio");
const tenSecForward = document.querySelector(".ten-sec-forward");
const tenSecBackward = document.querySelector(".ten-sec-back-forward");
const playBtn = document.querySelector(".play");
const playOrPauseBtn = document.querySelector("i");

function tenSecForwardHandler() {

}
function tenSecBackwardHandler() {

}
function playOrPauseBtnHandler() {
    console.log("hi")
    if (playOrPauseBtn.className.includes("fa-play")) {
        music.play()
        playOrPauseBtn.classList.remove("fa-play");
        playOrPauseBtn.classList.add("fa-pause");
    } else {
        music.pause()
        playOrPauseBtn.classList.remove("fa-pause")
        playOrPauseBtn.classList.add("fa-play")
    }
}

tenSecForward.addEventListener("click", tenSecForwardHandler);
tenSecBackward.addEventListener("click", tenSecBackwardHandler);
playOrPauseBtn.addEventListener("click", playOrPauseBtnHandler);