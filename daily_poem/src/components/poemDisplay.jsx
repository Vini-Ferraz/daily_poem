export function Poem({ poemText }) {
  const poemLines = poemText.split("\n");
  return (
    <div>
      {poemLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
