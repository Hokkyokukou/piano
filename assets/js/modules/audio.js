export const playSound = (newUrl) => {
    const audio = new Audio(newUrl);
    audio.play();
};
