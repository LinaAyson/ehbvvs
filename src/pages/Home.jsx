import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";
import About from "../components/About";
import ContactPage from "../components/ContactPage";
import Careers from "../components/Careers";
import Hero from "../sections/Hero";
import SplitImage from "../sections/SplitImage";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import im from "../assets/img-0627.jpg";

export default function Home() {
  return (
    <>
      <Hero />
      <SplitImage title="Hej" description="Hej hej" image={im} text="test">
        <ul className="">
          <li className="flex">
            <CheckCircleIcon className="w-5 h-8 text-orange-400" />
            <p className="ml-5 text-lg"> Byte av blandare</p>
          </li>
          <li className="flex">
            <CheckCircleIcon className="w-5 h-8 text-orange-400" />
            <p className="ml-5 text-lg"> Byte av badrumsinredning</p>
          </li>
          <li className="flex">
            <CheckCircleIcon className="w-5 h-8 text-orange-400" />
            <p className="ml-5 text-lg"> Byte av WC, dusch/duschväggar m.m</p>
          </li>
          <li className="flex">
            <CheckCircleIcon className="w-5 h-8 text-orange-400" />
            <p className="ml-5 text-lg"> Värmepumpar</p>
          </li>
          <li className="flex">
            <CheckCircleIcon className="w-5 h-8 text-orange-400" />
            <p className="ml-5 text-lg"> Undercentraler</p>
          </li>
          <li className="flex">
            <CheckCircleIcon className="w-5 h-8 text-orange-400" />
            <p className="ml-5 text-lg"> Stambyten</p>
          </li>
          <li className="flex">
            <CheckCircleIcon className="w-5 h-8 text-orange-400" />
            <p className="ml-5 text-lg"> Nyproduktion</p>
          </li>
          <li className="flex">
            <CheckCircleIcon className="w-5 h-8 text-orange-400" />
            <p className="ml-5 text-lg"> ROT-arbeten</p>
          </li>
        </ul>
      </SplitImage>
      <Services />
      <About />
      <ContactPage />
      <Careers />
      <div className="w-full h-screen bg-primary"></div>
    </>
  );
}
