import React from "react";

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
              <a
                className="block w-full px-12 py-3 font-medium text-white border border-orange-400 rounded text-md hover:bg-gray-800 focus:outline-none focus:ring active:bg-zinc-900 sm:w-auto "
                href="/get-started"
              >
                Våra tjänster
              </a>
              <a
                className="block w-full px-12 py-3 font-medium text-white border border-orange-400 rounded text-md hover:bg-gray-800 focus:outline-none focus:ring active:bg-zinc-900 sm:w-auto"
                href="/about"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
