const keys = document.querySelectorAll('.key');
// const audio = new Audio('24-piano-keys');

// console.log(keys);

// const clicKeys = (key, i) => {
//     console.log(key, i);
// }

// keys.forEach(clicKeys);

const playSound = (newUrl) => {
    new Audio(newUrl).play(); //new Audio('24-piano-keys').play();
}

keys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    const newUrl = `24-piano-keys/key${number}.mp3`;
    console.log(newUrl);
    pianoKey.addEventListener('click', () => {
        playSound(newUrl);
    });
});

