import Hero from "../sections/Hero";
import SplitImage from "../sections/SplitImage";
import pic1 from "../assets/img-0627.jpg";
import pic2 from "../assets/img-0615.jpg";
import ListItem from "../components/ListItem";
import Testimonials from "../sections/Testimonials";
import ContactForm from "../sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <SplitImage
        title="Tjänster"
        description="Värme, ventilation och sanitet"
        image={pic1}
        alignImage="right"
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
      {/* <SplitImage
        title="Om oss"
        description="Vi finns för att hjälpa dig"
        image={pic2}
        alignImage="left"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          accusamus voluptatum commodi, quod totam inventore! Illum iste soluta
          distinctio delectus facere, cumque est dicta obcaecati architecto
          eveniet autem molestias sed?
        </p>
      </SplitImage> */}

      <ContactForm className="flex flex-col p-10 text-white rounded-lg bg-secondaryGrey lg:flex-row" />
      <Testimonials />
    </>
  );
}
