export const createDivBlack = () => {
    const blackKeys = document.querySelector('.black_keys');

    for (let index = 0; index < 10; index++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('key', 'black_key'); //10
        blackKeys.appendChild(newDiv);
    }
};

export const createDivWhite = () => {
    const whiteKeys = document.querySelector('.white_keys');

    for (let index = 0; index < 14; index++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('key', 'white_key'); //14
        whiteKeys.appendChild(newDiv);
    }
};
