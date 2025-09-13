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
const forwardBtn = document.querySelector(".forward");
const backForwardBtn = document.querySelector(".back-forward");
const musicCover = document.querySelector("img")
const musicTitle = document.querySelector("h1")
const musicCard = document.querySelector(".music-card")

const musics = [
    { id: 1, src: "./src/public/musics/Hoomaan - Farsangaa (320).mp3", cover: "./src/public/Julianna Sinclair.jpg", title: "فرسنگا", singer: "هومان، کرورش" },
    { id: 2, src: "./src/public/musics/Dare Mishe Hava Sard (320).mp3", cover: "./src/public/୨୧ (๑_⤙_๑) ˚𖦹₊ ⊹.jpg", title: "داره میشه هوا سرد", singer: "هومان" },
    { id: 3, src: "./src/public/musics/Komak Komak (320).mp3", cover: "./src/public/a9465e8d-5f02-4c5a-96f4-bfd0479389a9.jpg", title: "کمک کمک", singer: "شایان اشراقی" },
]

let mainMusicIndex = 0;

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

function forwardHandler() {
    mainMusicIndex++;
    if (mainMusicIndex > 2) {
        mainMusicIndex = 0;
    }
    const mainMusic = musics[mainMusicIndex];

    musicCover.setAttribute("src", mainMusic.cover);
    music.setAttribute("src", mainMusic.src);
    musicTitle.innerHTML = `${mainMusic.title} - ${mainMusic.singer}`;

    const palette = ["blue", "brown"]; // دو خانواده
    const family = palette[Math.floor(Math.random() * palette.length)];

    let hueRange, saturation, lightness;

    if (family === "blue") {
        // آبی تیره: hue 200–240
        hueRange = 200 + Math.floor(Math.random() * 40);
        saturation = 40 + Math.floor(Math.random() * 30);
        lightness = 20 + Math.floor(Math.random() * 15);
    } else {
        // قهوه‌ای تیره: hue 20–40 (نارنجی-قرمز) + کمی اشباع کم
        hueRange = 20 + Math.floor(Math.random() * 20);
        saturation = 30 + Math.floor(Math.random() * 20);
        lightness = 20 + Math.floor(Math.random() * 15);
    }

    document.body.style.backgroundColor =
        `hsl(${hueRange}, ${saturation}%, ${lightness}%)`;
    // رنگ body
    document.body.style.backgroundColor =
        `hsl(${hueRange}, ${saturation}%, ${lightness}%)`;

    // رنگ music-card با کمی تفاوت
    const cardHue = (hueRange + 20) % 360;          // کمی hue رو تغییر میدیم
    const cardLight = Math.min(lightness + 10, 50); // کمی روشن‌تر
    musicCard.style.background = `linear-gradient(135deg, hsl(${cardHue}, ${saturation}%, ${cardLight}%), hsl(${cardHue}, ${saturation}%, ${cardLight + 5}%))`;

    // متن روشن برای خوانایی
    musicCard.style.color = "#f1f5f9";



    music.play();
    playOrPauseBtn.classList.remove(".fa-play");
    playOrPauseBtn.classList.add(".fa-pause");
}

function backForwardHandler() {
    mainMusicIndex--;
    if (mainMusicIndex < 0) {
        mainMusicIndex = 2;
    }

    const mainMusic = musics[mainMusicIndex];

    musicCover.setAttribute("src", mainMusic.cover);
    music.setAttribute("src", mainMusic.src);
    musicTitle.innerHTML = `${mainMusic.title} - ${mainMusic.singer}`;

    const palette = ["blue", "brown"]; // دو خانواده
    const family = palette[Math.floor(Math.random() * palette.length)];

    let hueRange, saturation, lightness;

    if (family === "blue") {
        // آبی تیره: hue 200–240
        hueRange = 200 + Math.floor(Math.random() * 40);
        saturation = 40 + Math.floor(Math.random() * 30);
        lightness = 20 + Math.floor(Math.random() * 15);
    } else {
        // قهوه‌ای تیره: hue 20–40 (نارنجی-قرمز) + کمی اشباع کم
        hueRange = 20 + Math.floor(Math.random() * 20);
        saturation = 30 + Math.floor(Math.random() * 20);
        lightness = 20 + Math.floor(Math.random() * 15);
    }

    document.body.style.backgroundColor =
        `hsl(${hueRange}, ${saturation}%, ${lightness}%)`;
    // رنگ body
    document.body.style.backgroundColor =
        `hsl(${hueRange}, ${saturation}%, ${lightness}%)`;

    // رنگ music-card با کمی تفاوت
    const cardHue = (hueRange + 20) % 360;          // کمی hue رو تغییر میدیم
    const cardLight = Math.min(lightness + 10, 50); // کمی روشن‌تر
    musicCard.style.background = `linear-gradient(135deg, hsl(${cardHue}, ${saturation}%, ${cardLight}%), hsl(${cardHue}, ${saturation}%, ${cardLight + 5}%))`;

    // متن روشن برای خوانایی
    musicCard.style.color = "#f1f5f9";



    music.play();
    playOrPauseBtn.classList.remove(".fa-play");
    playOrPauseBtn.classList.add(".fa-pause");
}

tenSecForward.addEventListener("click", tenSecForwardHandler);
tenSecBackForward.addEventListener("click", tenSecBackForwardHandler);
playOrPauseBtn.addEventListener("click", playOrPauseHandler);
forwardBtn.addEventListener("click", forwardHandler);
backForwardBtn.addEventListener("click", backForwardHandler);