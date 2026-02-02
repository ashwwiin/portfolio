// src/hooks/useSound.js
import { Howl } from 'howler';
import { useState, useEffect } from 'react';

const useSound = (src) => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const howl = new Howl({ 
      src: [src], 
      volume: 0.3,
      onloaderror: () => console.warn(`Sound file not found: ${src}`) 
    });
    setSound(howl);

    return () => howl.unload();
  }, [src]);

  const play = () => {
    if (sound && sound.state() === 'loaded') {
      sound.play();
    }
  };

  return play;
};

export default useSound;