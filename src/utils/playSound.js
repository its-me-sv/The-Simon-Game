const playSound = pos => {
    let audio = document.getElementById(pos);
    audio.currentTime = 0;
    audio.volume = 1;
    audio.play();
};

export default playSound;