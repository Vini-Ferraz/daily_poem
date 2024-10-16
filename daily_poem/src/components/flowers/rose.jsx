import { useState, useRef } from "react";

const rainSound = new Audio("sound-effects/rain.mp3");

export function Rose() {
  const [isDark, setIsDark] = useState(false);
  const rainInterval = useRef(null);
  const handleMouseDown = (event) => {
    event.preventDefault();
    rainSound.play();
    rainInterval.current = setInterval(() => {
      createRainDrop();
    }, 20);

    setIsDark(true);
  };

  const handleMouseUp = (event) => {
    event.preventDefault();
    rainSound.pause();

    setIsDark(false);

    clearInterval(rainInterval.current);
  };

  const createRainDrop = () => {
    const darkOverlay = document.querySelector(".dark-overlay");

    if (!darkOverlay) {
      console.error("dark-overlay não encontrada");
      return;
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
