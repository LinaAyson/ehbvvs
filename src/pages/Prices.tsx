import HeroPage from "../sections/HeroPage";
import ContactForm from "../sections/ContactForm";
import SplitImage from "../sections/SplitImage";
import image from "../assets/img-0631.jpg";

export default function Prices() {
  return (
    <>
      <HeroPage title="Priser" />
      <SplitImage
        image={image}
        title="priser"
        description="lorem"
        alignImage="left"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ea
          est ad adipisci minus culpa molestias laborum harum libero delectus
          vel doloremque repellat omnis deleniti, fuga esse velit saepe
          suscipit!
        </p>
      </SplitImage>
    </>
  );
}
