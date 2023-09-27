import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="w-full mx-auto">
      <section className="bg-gray-950">
        <div className="max-w-screen-xl px-4 py-32">
          <div className="max-w-3xl text-gray-100">
            <h1 className="text-5xl font-bold bg-clip-text sm:text-5xl xs:text-center">
              EHB VVS <span className="sm:block"> Rörmokare i Stockholm </span>
            </h1>
            <p className="max-w-xl mt-4 sm:text-xl/relaxed xs:text-center xs:text-lg">
              lorem
            </p>
            <div className="flex flex-wrap gap-4 mt-8 xs:text-center">
              <Button text="Våra tjänster" type="primary" />
              <Button text="Kontakta oss" type="primary" link="/kontakt" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
