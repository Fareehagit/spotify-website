console.log("Welcome to spotify");

// initializing the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myprogressBar = document.getElementById("myprogressBar");
let gif = document.getElementById("gif");
let mastersongName = document.getElementById("mastersongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

// songs array
let songs = [
    { songName: "let me love you", filePath: "songs/2.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma -Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Deaf Kev - Invicible [NCS Release] - 320k", filePath: "songs/2.mp3", coverPath: "covers/3.jpg" },
    { songName: "Diferent Heaven & EH!DE - My Heart", filePath: "songs/2.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji - Heroes - Tonight Feet - Johning", filePath: "songs/2.mp3", coverPath: "covers/5.jpg" },
    { songName: "Warriyo", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sawaha - Ticktok Arabic", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Gejala - Gejala Turkish remix", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
    { songName: "Safarri - Serina", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
    { songName: "Na jAna - salam e ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },

]


songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});
// handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("bi-play-circle-fill")
        masterPlay.classList.add("bi-pause-circle-fill")
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("bi-pause-circle-fill")
        masterPlay.classList.add("bi-play-circle-fill")
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener("timeupdate", () => {
    console.log("timeupdate");
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', () => {
    audioElement.currentTime = myprogressBar.value * audioElement.duration / 100;
})

// songItemplay


const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("bi-pause-circle-fill");
        element.classList.add("bi-play-circle-fill");
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (element.classList[2] == "bi-play-circle-fill") {
            element.classList.remove("bi-play-circle-fill");
            element.classList.add("bi-pause-circle-fill");

            songIndex = parseInt(e.target.id);
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            mastersongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove("bi-play-circle-fill");
            masterPlay.classList.add("bi-pause-circle-fill");
        }

        else {
            audioElement.pause();
            element.classList.remove("bi-pause-circle-fill")
            element.classList.add("bi-play-circle-fill")
            masterPlay.classList.remove("bi-pause-circle-fill")
            masterPlay.classList.add("bi-play-circle-fill")
            gif.style.opacity = 0;
        }
        // makeAllPlay();
        // songIndex = parseInt(e.target.id);
        // e.target.classList.remove("bi-play-circle-fill");
        // e.target.classList.add("bi-pause-circle-fill");
        // audioElement.src = `songs/${songIndex + 1}.mp3`;
        // mastersongName.innerText = songs[songIndex].songName;
        // audioElement.currentTime = 0;
        // audioElement.play();
        // gif.style.opacity = 1;
        // masterPlay.classList.remove("bi-play-circle-fill");
        // masterPlay.classList.add("bi-pause-circle-fill");
    })
})

// previous play buttons
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("bi-play-circle-fill")
    masterPlay.classList.add("bi-pause-circle-fill")

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("bi-play-circle-fill")
    masterPlay.classList.add("bi-pause-circle-fill")

})