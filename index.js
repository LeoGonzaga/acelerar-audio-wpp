const awaitDiv = setInterval(() => {
  const header = document.querySelector("._1R3Un");
  if (header) {
    console.log(header);
    clearInterval(awaitDiv);
    const btn = document.createElement("button");
    btn.innerHTML = "2x";
    btn.addEventListener("click", () => {
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio) => (audio.playbackRate = 2));
    });
    header.appendChild(btn);
  }
}, [1000]);
