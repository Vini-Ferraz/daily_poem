import { useState } from "react";

const popSound = new Audio("sound-effects/click.mp3");

export function Tulip() {
  const [pinkButterFlies, setPinkButterFlies] = useState([]);
  const [yellowButterFlies, setYellowButterFlies] = useState([]);
  const handleFlowerClick = () => {
    popSound.play();
    const newPinkButterFly = {
      id: Date.now(),
      x: Math.floor(Math.random() * (window.innerWidth - 150)),
      y: Math.floor(Math.random() * (window.innerHeight - 150)),
    };
    const newYellowButterFly = {
      id: Date.now(),
      x: Math.floor(Math.random() * (window.innerWidth - 150)),
      y: Math.floor(Math.random() * (window.innerHeight - 150)),
    };

    setPinkButterFlies((prevPinkButterFly) => [
      ...prevPinkButterFly,
      newPinkButterFly,
    ]);
    setYellowButterFlies((prevYellowButterFly) => [
      ...prevYellowButterFly,
      newYellowButterFly,
    ]);

    setTimeout(() => {
      setPinkButterFlies((prevPinkButterFly) =>
        prevPinkButterFly.filter(
          (pinkButterFly) => pinkButterFly.id !== newPinkButterFly.id
        )
      );
    }, 5000);

    setTimeout(() => {
      setYellowButterFlies((prevYellowButterFly) =>
        prevYellowButterFly.filter(
          (yellowButterFly) => yellowButterFly.id !== newYellowButterFly.id
        )
      );
    }, 5000);
  };

  return (
    <>
      <img
        src="tulips.webp"
        alt="Tulip"
        className="tulip-image"
        onClick={handleFlowerClick}
      />

      {pinkButterFlies.map((pinkButterFly) => (
        <img
          key={pinkButterFly.id}
          src="animations-images/pink-butterfly.webp"
          style={{
            position: "absolute",
            top: `${pinkButterFly.y}px`,
            left: `${pinkButterFly.x}px`,
            width: "150px",
            height: "150px",
            opacity: 1,
            animation: "pink-butter-fly 5s ease",
          }}
          onClick={handleFlowerClick}
        />
      ))}

      {yellowButterFlies.map((yellowButterFly) => (
        <img
          src="animations-images/yellow-butterfly.webp"
          key={yellowButterFly.id}
          style={{
            position: "absolute",
            top: `${yellowButterFly.y}px`,
            left: `${yellowButterFly.x}px`,
            width: "150px",
            height: "150px",
            opacity: 1,
            animation: "yellow-butter-fly 5s ease",
          }}
          onClick={handleFlowerClick}
        />
      ))}
    </>
  );
}
