import "./App.css";
import { Flower } from "./components/flowerDisplay";
import { Poem } from "./components/poemDisplay";
import { Timer } from "./components/timer";
import { useState, useEffect } from "react";

function App() {
  const poems = [
    {
      poem: "Beneath the calm, soft winds play,\nQuiet thoughts in gentle sway.\nTime slows down, a soothing stream—\nHearts in dream.",
      emotion: "peace",
      flower: "lily",
      hasBeenRead: false,
    },
    {
      poem: "In the fire’s glow, passion burns,\nDesires grow as the world turns.\nHearts ignite, a burning flame—\nLove's sweet game.",
      emotion: "desire",
      flower: "rose",
      hasBeenRead: false,
    },
    {
      poem: "Beneath bright skies, joy takes flight,\nTulip fields in colors bright.\nLaughter rings, a blissful cheer—\nHappiness near.",
      emotion: "happiness",
      flower: "tulip",
      hasBeenRead: false,
    },
    {
      poem: "Through winds that howl, you stand so tall,\nA heart unbowed, you'll never fall.\nIn strength you rise, through storm and flame—\nBrave by name.",
      emotion: "brave",
      flower: "oleander",
      hasBeenRead: false,
    },
  ];

  // Estado para armazenar o índice do poema atual
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);

  useEffect(() => {
    // Função para verificar e atualizar o poema com base no dia
    const checkAndUpdatePoem = () => {
      const today = new Date().toDateString(); // Data de hoje
      const storedDate = localStorage.getItem("lastVisitDate");
      const storedPoemIndex = localStorage.getItem("currentPoemIndex");

      // Se a data mudou ou não existe, atualizamos o poema
      if (storedDate !== today) {
        const newPoemIndex = storedPoemIndex
          ? (parseInt(storedPoemIndex) + 1) % poems.length // Incrementa e faz a rotação dos poemas
          : 0; // Se não tiver nada salvo, começa do primeiro

        setCurrentPoemIndex(newPoemIndex); // Atualiza o estado com o novo índice
        localStorage.setItem("lastVisitDate", today); // Salva a data de hoje
        localStorage.setItem("currentPoemIndex", newPoemIndex); // Salva o novo índice do poema
      } else {
        // Se for o mesmo dia, mantém o poema atual
        setCurrentPoemIndex(storedPoemIndex ? parseInt(storedPoemIndex) : 0);
      }
    };

    checkAndUpdatePoem(); // Executa quando o componente monta
  }, [poems]); // Chama essa função sempre que a lista de poemas mudar

  return (
    <body id="background">
      <div id="timer-and-poem-box">
        <Timer />
        <Poem poem={poems[currentPoemIndex].poem} />
      </div>
      <Flower flower={poems[currentPoemIndex].flower} />
    </body>
  );
}

export default App;
