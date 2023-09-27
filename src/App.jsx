// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import Careers from "./components/Careers";

export default function App() {
  // const [count, setCount] = usteState(0);
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <ContactPage />
      <Careers />
      <div className="w-full h-screen bg-primary"></div>
      <Footer />
    </div>
  );
}
