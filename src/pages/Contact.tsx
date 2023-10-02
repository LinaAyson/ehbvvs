import HeroPage from "../sections/HeroPage";
import ContactForm from "../sections/ContactForm";
import Testimonials from "../sections/Testimonials";

export default function Contact() {
  return (
    <>
      <HeroPage title="Kontakt" undertext="kontakta oss för .." />
      <ContactForm />
      <Testimonials />
    </>
  );
}
