import "./App.css";
import { Flower } from "./components/flowerDisplay";
import { Poem } from "./components/poemDisplay";
import { Timer } from "./components/timer";
import { useState, useEffect } from "react";

function App() {
  const poems = [
    {
      poem: "Beneath the calm, soft winds play,\nQuiet thoughts in gentle sway.\nTime slows down, a soothing stream—\nHearts in dream.",
      flower: "lily",
    },
    {
      poem: "In the fire’s glow, passion burns,\nDesires grow as the world turns.\nHearts ignite, a burning flame—\nLove's sweet game.",
      flower: "rose",
    },
    {
      poem: "Beneath bright skies, joy takes flight,\nTulip fields in colors bright.\nLaughter rings, a blissful cheer—\nHappiness near.",
      flower: "tulip",
    },
    {
      poem: "Through winds that howl, you stand so tall,\nA heart unbowed, you'll never fall.\nIn strength you rise, through storm and flame—\nBrave by name.",
      flower: "oleander",
    },
  ];

  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);

  useEffect(() => {
    const checkAndUpdatePoem = () => {
      const today = new Date().toDateString();
      const storedDate = localStorage.getItem("lastVisitDate");
      const storedPoemIndex = localStorage.getItem("currentPoemIndex");

      if (storedDate !== today) {
        const newPoemIndex = storedPoemIndex
          ? (parseInt(storedPoemIndex) + 1) % poems.length
          : 0;

        setCurrentPoemIndex(newPoemIndex);
        localStorage.setItem("lastVisitDate", today);
        localStorage.setItem("currentPoemIndex", newPoemIndex);
      } else {
        setCurrentPoemIndex(storedPoemIndex ? parseInt(storedPoemIndex) : 0);
      }
    };

    checkAndUpdatePoem();
  }, [poems]);

  return (
    <main id="background">
      <div id="timer-and-poem-box">
        <Timer />
        <Poem poem={poems[currentPoemIndex].poem} />
      </div>
      <Flower flower={poems[currentPoemIndex].flower} />
    </main>
  );
}

export default App;
