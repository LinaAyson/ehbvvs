import HeroPage from "../sections/HeroPage";
import SplitImage from "../sections/SplitImage";
import image from "../assets/img-0631.jpg";
import Button from "../components/Button";

export default function Prices() {
  return (
    <>
      <HeroPage
        title="Priser"
        undertext="Vi erbjuder konkurrenskraftiga priser med högkvalitativ service"
      />
      <SplitImage
        image={image}
        title="Priser"
        description="Serviceavgift för mindre arbeten"
        alignImage="left"
      >
        <p>
          2000:- ex moms 2 timmars arbete samt servicebil ingår. Efter 2 timmar
          debiterar vi 650:- ex moms per timme. Material tillkommer.
        </p>
        <p>
          Arbete i skärgården. 690:- ex moms per timme. 550:- ex moms för
          servicebil till hamn 1500:- ex moms båtavgift Resor över 15 sjömil
          debiteras med 100:- ex moms per sjömil.{" "}
        </p>
        <p className="text-sm">
          <i>
            Vi debiterar tid och sjömil från att vi lämnar hamn tills vi är
            tillbaka i hamn.{" "}
          </i>
        </p>

        <p>
          Har du frågor om priser eller annat tveka inte på att{" "}
          <a href="/kontakt" className="text-red">
            kontakta oss
          </a>
        </p>
      </SplitImage>
    </>
  );
}
