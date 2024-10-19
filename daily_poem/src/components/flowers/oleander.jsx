import { useState } from "react";

const popSound = new Audio("sound-effects/click.mp3");

export function Oleander() {
  const [emojis, setEmojis] = useState([]);

  const handleFlowerClick = () => {
    popSound.play();
    // Gerar emojis ao clicar na flor
    const newEmoji = {
      id: Date.now(), // ID único
      emoji: getRandomEmoji(), // Emoji aleatório
      x: Math.floor(Math.random() * window.innerWidth), // Posição X aleatória
    };
    setEmojis((prevEmojis) => [...prevEmojis, newEmoji]);

    setTimeout(() => {
      setEmojis((prevEmojis) => prevEmojis.filter((e) => e.id !== newEmoji.id));
    }, 3000);
  };

  const getRandomEmoji = () => {
    const emojiList = ["💖", "🌹", "🌸", "💐", "❤️"]; // Emojis relacionados a amor/flores
    return emojiList[Math.floor(Math.random() * emojiList.length)];
  };

  return (
    <>
      {/* Renderizar os emojis com a animação */}
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="emoji"
          style={{
            position: "absolute",
            top: 0,
            left: `${emoji.x}px`,
          }}
        >
          {emoji.emoji}
        </div>
      ))}
      <img
        src="flowers-images/oleander.webp"
        alt="Oleander"
        className="oleander-image"
        onClick={handleFlowerClick}
      />
    </>
  );
}
