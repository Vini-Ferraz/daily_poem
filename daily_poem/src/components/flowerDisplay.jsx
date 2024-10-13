export function Flower({ flower }) {
  const flowerImages = {
    lily: "lily.webp",
    rose: "rose.webp",
    tulip: "tulips.webp",
    oleander: "oleander.webp",
  };

  const imageSrc = flowerImages[flower];

  return <img src={imageSrc} alt={flower} className={`${flower}-image`} />;
}
