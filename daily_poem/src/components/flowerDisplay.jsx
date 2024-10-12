export function Flower({ flower }) {
  const flowerImages = {
    lily: "lily.png",
    rose: "rose.png",
    tulip: "tulips.png",
    oleander: "oleander.png",
  };

  const imageSrc = flowerImages[flower];

  return <img src={imageSrc} alt={flower} className={`${flower}-image`} />;
}
