export function Poem({ poem }) {
  return (
    <div id="poem">
      {poem.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
