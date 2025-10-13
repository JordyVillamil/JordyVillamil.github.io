// src/components/background/StarryBackground.tsx
import React from 'react';
import '../styles/HomeSection.css'; // Los estilos del cielo estrellado están aquí

const StarryBackground: React.FC = () => {
  return (
    <>
      {/* Estos divs son los elementos a los que se aplica el 
        box-shadow masivo y las animaciones @keyframes en HomeSection.css
      */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </>
  );
};

// 🛑 ¡La exportación por defecto (default) resuelve el error! 🛑
export default StarryBackground;