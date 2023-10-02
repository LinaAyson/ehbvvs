import HeroPage from "../sections/HeroPage";
import SplitImage from "../sections/SplitImage";
import skargarden from "../assets/skargarden.jpg";
import ListItem from "../components/ListItem";

export default function Vvsskargarden() {
  return (
    <section>
      <HeroPage
        title="Rörmokare i skärgården"
        undertext="Vi på EHB VVS kommer till ön och utför vvs-arbeten allt från service
          och reparation till nyinstallation"
      />
      <SplitImage
        image={skargarden}
        title="Skärgårdsarbete"
        description="VVS på ön"
        alignImage="left"
      >
        <div className="">
          <p>
            Vi utgår från Åkersberga med egen båt. Med oss är du i säkra händer,
            vi är certifierade av Säker Vatten AB läs mer på{" "}
            <a
              className="text-blue-400"
              target="_blank"
              href="https://www.sakervatten.se/company/502057/ehb-vvs-ab"
            >
              Säkertvatten.se
            </a>
          </p>
          <p>
            Med vårt stora och väletablerade kontaktnät med hantverkare kan vi
            vid behov även erbjuda snickare, elektriker, plattsättare,
            maskinentreprenörer och arborister.
          </p>
        </div>
      </SplitImage>

      <div className="container px-6 my-6">
        <ul className="grid lg:grid-cols-2">
          <ListItem
            text="Servicearbeten: WC och 
blandare – byte, reparation"
          />
          <ListItem text="Värmeinstallationer: radiator och golvvärmesystem" />
          <ListItem text="Byte av WC, dusch/duschväggar m.m" />
          <ListItem
            text="Värmepumpar: bergvärme,
luft/vatten, frånluft, luft/luft."
          />
          <ListItem
            text="Avloppsanläggningar: 
Nyinstallation och service"
          />
          <ListItem
            text="Nyinstallationer: Rot-arbeten, 
nyproduktion"
          />
          <ListItem
            text="Poolanläggingar: 
Nyinstallation och service"
          />
          <ListItem
            text="Enskilda vattenanläggningar: 
vattenpumpsbyte och 
reparation."
          />
          <ListItem
            text="Avsaltningsanläggningar 
              (sjövattenrening)"
          />
        </ul>
      </div>
    </section>
  );
}
