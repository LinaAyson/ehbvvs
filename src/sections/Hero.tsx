import Button from "../components/Button";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full pt-20 mx-auto bg-gray-950">
      <div className="container py-40">
        <div className="max-w-3xl text-gray-100">
          <h1 className="text-5xl font-bold bg-clip-text sm:text-5xl xs:text-center">
            EHB VVS <span className="sm:block"> Rörmokare i Stockholm </span>
          </h1>
          <p className="max-w-xl mt-4 italic sm:text-xl/relaxed xs:text-center xs:text-lg">
            Säkra vattenlösningar i Stockholm
          </p>
          <div className="flex flex-wrap gap-4 mt-8 xs:text-center">
            <Button text="Våra tjänster" type="primary" link="/tjanster" />
            <Button text="Kontakta oss" type="primary" link="/kontakt" />
          </div>
        </div>
      </div>
    </section>
  );
}
