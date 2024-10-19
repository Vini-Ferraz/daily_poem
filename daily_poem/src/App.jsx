import "./App.css";
import { Flower } from "./components/flowerDisplay";
import { Poem } from "./components/poemDisplay";
import { Timer } from "./components/timer";
import { useState, useEffect } from "react";

function App() {
  const poems = [
    {
      poem: [
        "In her eyes, the world does shine,",
        "Reflections of a love divine.",
        "Secrets linger, a timeless glow—",
        "Feelings bloom and gently flow.",
      ],
      flower: "lily",
    },
    {
      poem: [
        "In your gaze, the past unfolds,",
        "Whispers of stories, long retold.",
        "A bond unbroken, hearts align—",
        "In that moment, you felt like mine.",
      ],
      flower: "rose",
    },
    {
      poem: [
        "Across the seas, my heart will sail,",
        "Through storms and winds, I shall not fail.",
        "For love's pure light, a guiding star—",
        "No distance can keep us apart, no matter how far.",
      ],
      flower: "tulip",
    },
    {
      poem: [
        "In heaven's grace, you were designed,",
        "The fairest angel, truly divine.",
        "Sent to earth, a gift so rare—",
        "A beauty bright, beyond compare.",
      ],
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
        <Poem poem={poems[3].poem} />
      </div>
      <Flower flower={poems[3].flower} />
    </main>
  );
}

export default App;
