import { Lily } from "./flowers/lily";
import { Rose } from "./flowers/rose";
import { Oleander } from "./flowers/oleander";
import { Tulip } from "./flowers/tulips";

export function Flower({ flower }) {
  const flowerComponents = {
    lily: Lily,
    rose: Rose,
    tulip: Tulip,
    oleander: Oleander,
  };

  const FlowerComponent = flowerComponents[flower];

  return <FlowerComponent flower={flower} />;
}
