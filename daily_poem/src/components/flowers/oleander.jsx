import { useState } from "react";

export function Oleander() {
  const [emojis, setEmojis] = useState([]);

  const handleFlowerClick = () => {
    // Gerar emojis ao clicar na flor
    const newEmoji = {
      id: Date.now(), // ID único
      emoji: getRandomEmoji(), // Emoji aleatório
      x: Math.floor(Math.random() * window.innerWidth), // Posição X aleatória
    };
    setEmojis((prevEmojis) => [...prevEmojis, newEmoji]);

    // Remover o emoji após a animação (2 segundos)
    setTimeout(() => {
      setEmojis((prevEmojis) => prevEmojis.filter((e) => e.id !== newEmoji.id));
    }, 2000);
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
            zIndex: 100,
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
