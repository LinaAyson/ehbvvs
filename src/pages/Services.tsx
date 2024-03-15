import HeroPage from "../sections/HeroPage";
import SplitImage from "../sections/SplitImage";
import ListItem from "../components/ListItem";
import pic1 from "../assets/img-0627.jpg";
import image from "../assets/img-0631.jpg";

export default function Services() {
  return (
    <>
      <HeroPage
        title="Tjänster"
        undertext="VVS-lösningar för alla behov – från byte till nyinstallation"
      />
      <SplitImage
        title="Tjänster"
        description="Värme, ventilation och sanitet"
        image={pic1}
        alignImage="left"
      >
        <p>
          Vi har ett brett utbud av VVS-tjänster och utför allt från mindre
          installationer till större entreprenader.
        </p>
        <ul className="">
          <ListItem text="Byte av blandare" />
          <ListItem text="Byte av badrumsinredning" />
          <ListItem text="Byte av WC, dusch/duschväggar m.m" />
          <ListItem text="Värmepumpar" />
          <ListItem text="Undercentraler" />
          <ListItem text="Stambyten" />
          <ListItem text="Nyproduktion" />
          <ListItem text="ROT-arbeten" />
        </ul>
      </SplitImage>
    </>
  );
}
