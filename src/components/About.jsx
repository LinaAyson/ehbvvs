import React from "react";
import pic2 from "../assets/img-0615.jpg";

const About = () => {
  return (
    <div className="w-full py-10 bg-gray-900">
      <div className="flex flex-row-reverse mx-10">
        <div className="text-orange-400">
          <h6 className="font-bold text-center uppercase text-md">
            <span className="">
              <hr className="inline-block w-5 h-1 mx-2 border-orange-400" />
              Om oss
            </span>
          </h6>
          <h2 className="ml-5 text-4xl font-bold text-gray-100">
            Vi finns för att hjälpa dig
          </h2>
          <p className="m-5 mt-5 text-gray-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            accusamus voluptatum commodi, quod totam inventore! Illum iste
            soluta distinctio delectus facere, cumque est dicta obcaecati
            architecto eveniet autem molestias sed?
          </p>
        </div>
        <div className="">
          <img src={pic2} alt="Logo" className="rounded-sm w-50 h-50" />
        </div>
      </div>
    </div>
  );
};

export default About;
