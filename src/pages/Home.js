import React, { useRef } from 'react';
import F1 from '../assets/images/f1-logo.png';
import F1Sound from '../assets/sounds/f1_message_2023.mp3';

const Home = () => {
  // Crear una referencia para el audio
  const audioRef = useRef(null);

  // Función para reproducir el sonido al hacer clic en la imagen
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">Bienvenido al Mundo de la Fórmula 1</h1>
        <img
          className="home-image"
          src={F1}
          alt="Fórmula 1"
          onClick={playSound}  // Añadir evento onClick
        />
        {/* Elemento de audio invisible */}
        <audio ref={audioRef} src={F1Sound} />
      </div>
    </div>
  );
};

export default Home;
