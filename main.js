const myPiano = () => {
    const keyElements = document.querySelectorAll('.key');

        const createDivBlack = () => {
        for (let index = 0; index < 10; index++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('key', 'black_key'); //10
            const blackKeys = document.querySelector('.black_keys');
            blackKeys.appendChild(newDiv);
        }
    };

    const createDivWhite = () => {
        for (let index = 0; index < 14; index++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('key', 'white_key'); //14
            const whiteKeys = document.querySelector('.white_keys');
            whiteKeys.appendChild(newDiv);
        }
    };

    const playSound = (newUrl) => {
        const audio = new Audio(newUrl);
        audio.play();
    };

    // createDivBlack();
    // createDivWhite();

    keyElements.forEach((pianoKey, i) => {
        const number = i < 9 ? '0' + (i + 1) : i + 1;
        const newUrl = `sounds/key${number}.mp3`;
        console.log(newUrl);
        pianoKey.addEventListener('click', () => {
            playSound(newUrl);
        });
    });
};

myPiano();