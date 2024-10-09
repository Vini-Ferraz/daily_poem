export function Flower({ flower }) {
  if (flower == "lily") {
    return <img src="lily.png" />;
  } else if (flower == "rose") {
    return <img src="rose.png" />;
  } else {
    return <img src="tulips.png" />;
  }
}
