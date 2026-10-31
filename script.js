const music = document.getElementById("music");
const soundButton = document.getElementById("soundButton");
const soundLabel = document.getElementById("soundLabel");
const startButton = document.getElementById("startButton");
const video = document.getElementById("specialVideo");
const videoPlaceholder = document.getElementById("videoPlaceholder");

soundButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      soundLabel.textContent = "Jeda musik";
    } catch {
      alert("Belum ada musik. Masukkan file MP3 ke folder musik dan beri nama musik.mp3.");
    }
  } else {
    music.pause();
    soundLabel.textContent = "Nyalakan musik";
  }
});

startButton.addEventListener("click", () => {
  document.getElementById("chapterOne").scrollIntoView({behavior:"smooth"});
  if (music.paused) {
    music.play().then(() => {
      soundLabel.textContent = "Jeda musik";
    }).catch(() => {});
  }
  shower(18);
});

video.addEventListener("loadeddata", () => {
  videoPlaceholder.classList.add("hidden");
});
video.addEventListener("error", () => {
  videoPlaceholder.classList.remove("hidden");
});

function makePetal() {
  const p = document.createElement("span");
  p.className = "petal";
  p.textContent = Math.random() > .5 ? "✿" : "♡";
  p.style.left = Math.random() * 100 + "vw";
  p.style.fontSize = (12 + Math.random() * 17) + "px";
  p.style.opacity = .35 + Math.random() * .45;
  p.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
  p.style.animationDuration = (8 + Math.random() * 8) + "s";
  document.getElementById("petals").appendChild(p);
  setTimeout(() => p.remove(), 17000);
}
function shower(count) {
  for (let i=0; i<count; i++) setTimeout(makePetal, i*100);
}
setInterval(makePetal, 1100);
