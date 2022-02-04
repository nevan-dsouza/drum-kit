 // Play Sound Function
 function playSound (e) {
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    console.log(audio);

    if (!audio) {
      return;
    };

    // console.log(key);

    audio.currentTime = 0;  // rewinds from the start
    audio.play();
    key.classList.add('playing')

  };


  // Remove transition after sound is played
  function removeTransition(e) {
    // console.log(e);
    if(e.propertyName !=='transform'){
      return;
    }
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');

  // iterating through the keys array
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);