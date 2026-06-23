const music = document.getElementById("music");

document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

