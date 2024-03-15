import HeroPage from "../sections/HeroPage";
import ContactForm from "../sections/ContactForm";
import Testimonials from "../sections/Testimonials";

export default function Contact() {
  return (
    <>
      <HeroPage title="Kontakt" undertext="" />
      <ContactForm className="flex flex-col p-10 text-white rounded-lg bg-secondaryGrey lg:flex-row" />
      <Testimonials />
    </>
  );
}
