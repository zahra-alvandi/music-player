// const music = document.querySelector("audio");
// const tenSecForward = document.querySelector(".ten-sec-forward");
// const tenSecBackward = document.querySelector(".ten-sec-back-forward");
// const playBtn = document.querySelector(".play");
// const playOrPauseBtn = document.querySelector("i");

// // function tenSecForwardHandler() {
// //     music.currentTime += 10;
// // }
// // function tenSecBackwardHandler() {
// //     music.currentTime -= 10;
// // }
// // function playOrPauseBtnHandler() {
// //     console.log("hi")
// //     if (playOrPauseBtn.className.includes("fa-play")) {
// //         music.play()
// //         playOrPauseBtn.classList.remove("fa-play");
// //         playOrPauseBtn.classList.add("fa-pause");
// //     } else {
// //         music.pause()
// //         playOrPauseBtn.classList.remove("fa-pause")
// //         playOrPauseBtn.classList.add("fa-play")
// //     }
// // }

// // tenSecForward.addEventListener("click", tenSecForwardHandler);
// // tenSecBackward.addEventListener("click", tenSecBackwardHandler);
// // playOrPauseBtn.addEventListener("click", playOrPauseBtnHandler);

// tenSecBackward.addEventListener("click", function () {
//     music.currentTime += 10;
// })

// tenSecBackward.addEventListener("click", function () {
//     music.currentTime -= 10;
// })

// playOrPauseBtn.addEventListener("click", function () {
//     if (playOrPauseBtn.className.includes(".fa-play")) {
//         music.play();
//         playOrPauseBtn.classList.remove(".fa-play");
//         playOrPauseBtn.classList.add(".fa-pause");
//     } else {
//         music.pause()
//         playOrPauseBtn.classList.remove(".fa-pause");
//         playOrPauseBtn.classList.add(".fa-pause");
//     }
// })

const music = document.querySelector("audio");
const tenSecForward = document.querySelector(".ten-sec-forward");
const tenSecBackForward = document.querySelector(".ten-sec-back-forward");
const playBtn = document.querySelector(".play");
const playOrPauseBtn = playBtn.querySelector("i");

function tenSecForwardHandler() {
    music.currentTime += 10;
}

function tenSecBackForwardHandler() {
    music.currentTime -= 10;
}

function playOrPauseHandler() {
    if (playOrPauseBtn.className.includes("fa-play")) {
        music.play();
        playOrPauseBtn.classList.remove("fa-play");
        playOrPauseBtn.classList.add("fa-pause");
    } else {
        music.pause();
        playOrPauseBtn.classList.remove("fa-pause");
        playOrPauseBtn.classList.add("fa-play");
    }
}

tenSecForward.addEventListener("click", tenSecForwardHandler);
tenSecBackForward.addEventListener("click", tenSecBackForwardHandler);
playOrPauseBtn.addEventListener("click", playOrPauseHandler);
