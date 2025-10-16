import React, { useState, useEffect } from 'react';
import '../../styles/HomeSection.css';

const StarryBackground: React.FC = () => {
  // Creamos un estado para cada capa de estrellas
  const [estrellasCapa1, setEstrellasCapa1] = useState('');
  const [estrellasCapa2, setEstrellasCapa2] = useState('');
  const [estrellasCapa3, setEstrellasCapa3] = useState('');

  useEffect(() => {
    // Función que genera estrellas con diferentes tamaños
    const generarEstrellas = (cantidad: number) => {
      const estrellas = [];
      for (let i = 0; i < cantidad; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        // Generamos un tamaño aleatorio entre 1 y 3
        const tamaño = Math.floor(Math.random() * 3) + 1;
        const desenfoque = Math.floor(Math.random() * 3) + 1;
        
        // Creamos la estrella con su tamaño aleatorio
        estrellas.push(`${x}px ${y}px ${desenfoque}px ${tamaño}px #FFF`);
      }
      return estrellas.join(', ');
    };

    // Generamos las estrellas y las guardamos
    setEstrellasCapa1(generarEstrellas(700));
    setEstrellasCapa2(generarEstrellas(200));
    setEstrellasCapa3(generarEstrellas(100));

  }, []); // Se ejecuta solo una vez

  // Usamos las variables de estado para aplicar el boxShadow
  return (
    <>
      <div id="stars" style={{ boxShadow: estrellasCapa1 }}></div>
      <div id="stars2" style={{ boxShadow: estrellasCapa2 }}></div>
      <div id="stars3" style={{ boxShadow: estrellasCapa3 }}></div>
    </>
  );
};

export default StarryBackground;