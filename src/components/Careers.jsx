import React from "react";
import pic2 from "../assets/img-0631.jpg";

const Careers = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative px-6 pt-2 isolate lg:px-8">
        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-36">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Karriär
            </h1>
            <div className="flex items-center justify-center mt-5 ">
              <a
                href="#"
                className="mr-1 text-sm font-semibold text-gray hover:text-orange-600"
              >
                Hem
              </a>
              <p className="text-sm font-semibold text-gray">/ Karriär</p>
            </div>
          </div>
        </div>

        <h6 className="text-sm font-bold text-left text-orange-400 uppercase">
          <hr className="inline-block w-5 h-1 mx-1 border-orange-400" />
          Lediga tjänster
        </h6>
        <div className="bg-red-300 ">
          <div className="mt-2 text-3xl font-bold text-gray-9-100">
            <h2>
              Vi söker ständigt efter<span className=""> nya talanger!</span>
            </h2>
          </div>
          <div className="flex mx-5">
            <div className="mt-10">
              <p>
                Är du en skicklig rörmokare med passion för ditt yrke? Är du
                redo att ta din karriär till nya höjder?
              </p>
              <p>
                Då är du precis den typ av person vi letar efter! Vår framgång
                som företag beror i hög grad på våra dedikerade medarbetare.
              </p>
            </div>
            <div className="">
              <img src={pic2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
