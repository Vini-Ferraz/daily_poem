import React, { useState } from "react";

const popSound = new Audio("sound-effects/click.mp3");

export function Lily() {
  const [flowers, setFlowers] = useState([]);

  const handleFlowerClick = () => {
    popSound.play();

    // Gerar uma nova flor com posição aleatória e um ID único
    const newFlower = {
      id: Date.now(), // ID único baseado no timestamp
      x: Math.floor(Math.random() * (window.innerWidth - 140)),
      y: Math.floor(Math.random() * (window.innerHeight - 140)),
      onClick: handleFlowerClick,
    };

    // Adicionar a nova flor ao array de flores
    setFlowers((prevFlowers) => [...prevFlowers, newFlower]);

    // Remover a flor depois de 2 segundos (tempo para ela sumir)
    setTimeout(() => {
      setFlowers((prevFlowers) =>
        prevFlowers.filter((flower) => flower.id !== newFlower.id)
      );
    }, 5000);
  };

  return (
    <div>
      <img
        src="lily.webp"
        alt="lily-flower"
        onClick={handleFlowerClick}
        style={{ cursor: "pointer" }}
      />

      {flowers.map((flower) => (
        <img
          key={flower.id}
          src="animations-images/falling-flower.webp"
          style={{
            position: "absolute",
            top: `${flower.y}px`,
            left: `${flower.x}px`,
            width: "150px",
            height: "150px",
            opacity: 1,
            animation: "fadeOut 5s forwards", // Aplicando animação CSS
          }}
          onClick={handleFlowerClick}
        />
      ))}
    </div>
  );
}
