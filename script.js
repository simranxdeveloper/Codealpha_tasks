let currentSong = 0;

let songs = [
    { title: "Song 1", src: "song1.mp3" },
    { title: "Song 2", src: "song2.mp3" },
    { title: "Song 3", src: "song3.mp3" }
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const title = document.getElementById("title");

function loadSong(index) {
    audio.src = songs[index].src;
    title.textContent = songs[index].title;
}
loadSong(currentSong);

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸ Pause";
    } else {
        audio.pause();
        playBtn.textContent = "▶ Play";
    }
});

nextBtn.addEventListener("click", () => {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    audio.play();
});

prevBtn.addEventListener("click", () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    audio.play();
});

audio.addEventListener("timeupdate", () => {
    progressBar.value = audio.currentTime;
    progressBar.max = audio.duration;
});

progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
});
