import React, { useState } from 'react';
import sound from './stay.mp3';

export default function MultimediaPlayer() {
  const [userClicked, setUserClicked] = useState(false);

  const handleUserClick = () => {
    setUserClicked(true);
    playAudio();
  };

  const playAudio = () => {
    const audio = new Audio(sound)
    audio.play();
  };

  return (
    <div className='multimedia-player'>
      {userClicked ? (
        <>
          <iframe
            title='YouTube Video'
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/3biyCrxr3P0?autoplay=1&loop=1&mute=1'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </>
      ) : (
        <button onClick={handleUserClick}>
          <p>Toca en cualquier lado</p>
        </button>
      )}
    </div>
  );
}
