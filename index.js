const awaitDiv = setInterval(() => {
  const header = document.querySelector("header._1R3Un");

  if (header) {
    clearInterval(awaitDiv);

    const selectItems = [
      { text: '1x', value: 1 },
      { text: '1.25x', value: 1.25 },
      { text: '1.5x', value: 1.5 },
      { text: '1.75x', value: 1.75 },
      { text: '2x', value: 2 },
    ];

    const speedSelector = document.createElement("select");
    speedSelector.style.width = "40px";

    for (let i = 0; i < selectItems.length; i++) {
      const option = document.createElement("option");
      option.text = selectItems[i].text;
      option.value = selectItems[i].value;
      speedSelector.appendChild(option);
    }

    speedSelector.addEventListener("change", (event) => {
      const speed = event.target.value;
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio) => (audio.playbackRate = speed));
    });

    header.appendChild(speedSelector);
  }
}, [1000]);
