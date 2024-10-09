import "./App.css";
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
  ];

  return <Poem poem={poem[1].poem} />;
}

export default App;
