import { playSound } from './modules/audio.js';
import { createDivBlack, createDivWhite } from './modules/keys.js';

const myPiano = () => {

    document.addEventListener('DOMContentLoaded', () => {

        createDivBlack();
        createDivWhite();

        const keyElements = document.querySelectorAll('.key');
        
        keyElements.forEach((pianoKey, i) => {
            const number = i < 9 ? '0' + (i + 1) : i + 1;
            const newUrl = `assets/sounds/key${number}.mp3`;
            pianoKey.addEventListener('click', () => {
                playSound(newUrl);
            });
        });
    });
};

myPiano();
