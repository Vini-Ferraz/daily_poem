import { useState, useRef } from "react";

const rainSound = new Audio("sound-effects/rain.mp3");

export function Rose() {
  const [isDark, setIsDark] = useState(false);
  const rainInterval = useRef(null); // UseRef para armazenar o intervalo

  const handleMouseDown = () => {
    rainSound.play();
    // Inicia a criação das gotas de chuva repetidamente a cada 100ms
    rainInterval.current = setInterval(() => {
      createRainDrop();
    }, 20);

    // Escurece a tela
    setIsDark(true);
  };

  const handleMouseUp = () => {
    rainSound.pause();
    // Para de escurecer a tela
    setIsDark(false);

    // Limpa o intervalo, parando a criação de novas gotas de chuva
    clearInterval(rainInterval.current);
  };

  const createRainDrop = () => {
    const darkOverlay = document.querySelector(".dark-overlay");

    // Verifica se a dark-overlay existe
    if (!darkOverlay) {
      console.error("dark-overlay não encontrada");
      return; // Se não encontrar a div, sai da função
    }

    const rainDrop = document.createElement("div");
    rainDrop.className = "rain-drop";

    const randomX = Math.floor(Math.random() * (window.innerWidth - 10));
    rainDrop.style.left = `${randomX}px`;

    darkOverlay.appendChild(rainDrop);

    setTimeout(() => {
      rainDrop.remove();
    }, 2000);
  };

  return (
    <>
      <div className={`dark-overlay ${isDark ? "active" : ""}`}></div>

      <img
        src="rose.webp"
        alt="Rose"
        className="rose-image"
        style={{ cursor: "pointer" }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      />
    </>
  );
}
