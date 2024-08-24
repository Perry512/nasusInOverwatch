import React from 'react';
import hanamura from './Hanamura1.jpg';

const style = StyleSheet.create({
  container: {
    flex:1
  }
})

const urls = [
    'https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Nasus_Original_QAttack_0.ogg/',
    'https://static.wikia.nocookie.net/leagueoflegends/images/9/9c/Nasus_Original_QAttack_1.ogg/',
    'https://static.wikia.nocookie.net/leagueoflegends/images/f/fc/Nasus_Original_QAttack_2.ogg/',
    'https://static.wikia.nocookie.net/leagueoflegends/images/3/32/Nasus_Original_QAttack_3.ogg/',


]
function playAudio(url) {

    const randomIndex = Math.floor(Math.random() * urls.length);
    const randomURL = urls[randomIndex];

    const audio = new Audio(randomURL);
    audio.play().catch(error => {
    console.error('Playback failed:', error);
  });
}

const NasusContent = () => {

  const handleImageClick = () => {
    playAudio();
  };

  return (
    <div>
      <section>
        <img
          src={hanamura}
          alt="this is a dumb bit"
          onClick={handleImageClick} 
        />
      </section>
    </div>
  );
};

export default function Nasus() {
  return (
    <div>
      <NasusContent />
    </div>
  );
}