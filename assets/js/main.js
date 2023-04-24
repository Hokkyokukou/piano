import { playSound } from './audio.js';
import { createDivBlack, createDivWhite } from './keys.js';

const myPiano = () => {

    document.addEventListener('DOMContentLoaded', () => {
        createDivBlack();
        createDivWhite();

        const keyElements = document.querySelectorAll('.key');
        // console.log(keyElements);

        keyElements.forEach((pianoKey, i) => {
            const number = i < 9 ? '0' + (i + 1) : i + 1;
            const newUrl = `sounds/key${number}.mp3`;
            // console.log(newUrl);
            pianoKey.addEventListener('click', () => {
                playSound(newUrl);
            });
        });
    });
};

myPiano();
