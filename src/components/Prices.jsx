import React from "react";
import pic2 from "../assets/img-0615.jpg";

const Prices = () => {
  return (
    <div className="w-full py-10 bg-gray-900">
      <div className="flex flex-row-reverse justify-between mx-10">
        <div className="text-gray-100">
          <h6 className="font-bold text-center uppercase text-md">
            <span className="">
              <hr className="inline-block w-5 h-1 mx-2" />
              Priser
            </span>
          </h6>
          <h2 className="ml-5 text-4xl font-bold text-white">
            ROT-avdrags giltiga priser
          </h2>
          <p className="m-5 mt-10">
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

export default Prices;
