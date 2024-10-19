import { useEffect } from "react";

export function Oleander() {
  useEffect(() => {
    const handleShake = (event) => {
      const acceleration = event.acceleration;
      if (acceleration.x > 15 || acceleration.y > 15 || acceleration.z > 15) {
        // Ativa animação quando o movimento do shake é detectado
        createEmojis();
      }
    };

    // Verifica se o navegador suporta o DeviceMotionEvent
    if (window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", handleShake);
    }

    // Limpar evento quando o componente for desmontado
    return () => {
      if (window.DeviceMotionEvent) {
        window.removeEventListener("devicemotion", handleShake);
      }
    };
  }, []);

  // Função para criar e adicionar emojis na tela
  const createEmojis = () => {
    const emojis = ["❤️", "🌸", "💖", "💐", "🌹"]; // Array de emojis

    for (let i = 0; i < 20; i++) {
      const emojiElement = document.createElement("div");
      emojiElement.className = "emoji";
      emojiElement.textContent =
        emojis[Math.floor(Math.random() * emojis.length)];

      // Posicionamento aleatório dos emojis na tela
      emojiElement.style.left = `${Math.random() * 100}vw`;
      emojiElement.style.top = `-50px`; // Para começar fora da tela

      document.body.appendChild(emojiElement);

      // Remover o emoji após a animação
      setTimeout(() => {
        emojiElement.remove();
      }, 2000);
    }
  };

  return (
    <img
      src="flowers-images/oleander.webp"
      alt="Oleander"
      className="oleander-image"
    />
  );
}
