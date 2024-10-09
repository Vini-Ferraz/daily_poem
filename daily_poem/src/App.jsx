import "./App.css";
import { Flower } from "./components/flowerDisplay";
import { Poem } from "./components/poemDisplay";

function App() {
  const poem = [
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
  ];
  let n = 0;
  return (
    <>
      <Poem poem={poem[n].poem} />
      <Flower flower={poem[n].flower} />
    </>
  );
}

export default App;
