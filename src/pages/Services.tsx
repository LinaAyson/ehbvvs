import HeroPage from "../sections/HeroPage";
import SplitImage from "../sections/SplitImage";
import image from "../assets/img-0631.jpg";

export default function Services() {
  return (
    <>
      <HeroPage title="Tjänster" undertext="vi erbjuder er en .." />
      <SplitImage
        image={image}
        title="Våra tjänster"
        description="Vi erbjuder"
        alignImage="right"
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          reiciendis, adipisci nemo iste similique ipsam facere odio quisquam,
          libero officia quis error dolorem iusto nam architecto eligendi
          voluptates ut! Facilis.
        </p>
      </SplitImage>
    </>
  );
}
