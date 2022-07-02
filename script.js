function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e){
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key= document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; //if no audio for the corresponding key, return
    audio.currentTime = 0; //reset the audio to the start
    audio.play();
    key.classList.add('playing');
}

const keys= document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);