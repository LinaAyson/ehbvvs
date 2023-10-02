import HeroPage from "../sections/HeroPage";
import SplitImage from "../sections/SplitImage";
import skargarden from "../assets/skargarden.jpg";

export default function Vvsskargarden() {
  return (
    <section>
      <HeroPage title="Rörmokare" />
      <SplitImage
        image={skargarden}
        title="VVS på ön"
        description="Vi på EHB VVS kommer till ön och utför vvs-arbeten allt från service och reparation till nyinstallation"
        alignImage="left"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ea
          est ad adipisci minus culpa molestias laborum harum libero delectus
          vel doloremque repellat omnis deleniti, fuga esse velit saepe
          suscipit!
        </p>
      </SplitImage>
    </section>
  );
}
