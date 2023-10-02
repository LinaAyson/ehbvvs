import HeroPage from "../sections/HeroPage";
import SplitImage from "../sections/SplitImage";
import image from "../assets/img-0631.jpg";
import Headline from "../components/Headline";
import Coworkers from "../sections/Coworkers";

export default function About() {
  return (
    <>
      <HeroPage title="Om oss" undertext="hello" />
      <SplitImage
        image={image}
        title="Om oss"
        description="Vår rörmokarhistoria och engagemang i Stockholm"
        alignImage="right"
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          voluptatibus at dolorem ullam vel corporis fugiat asperiores laborum
          natus laudantium distinctio optio aperiam quia quae dolor id
          repellendus sit non.
        </p>
      </SplitImage>
      <Headline title={"Vårat team"} />
      <Coworkers />
    </>
  );
}
