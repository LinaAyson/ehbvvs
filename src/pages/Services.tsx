import HeroPage from "../sections/HeroPage";
import SplitImage from "../sections/SplitImage";
import image from "../assets/img-0631.jpg";

export default function Services() {
  return (
    <>
      <HeroPage title="Tjänster" />
      <SplitImage
        image={image}
        title="Våra tjänster"
        description="Vi söker ständigt efter nya talanger!"
        alignImage="right"
      >
        <p>
          Är du en skicklig rörmokare med passion för ditt yrke? Är du redo att
          ta din karriär till nya höjder? Då är du precis den typ av person vi
          letar efter! Vår framgång som företag beror i hög grad på våra
          dedikerade medarbetare.
        </p>
      </SplitImage>
    </>
  );
}
