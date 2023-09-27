import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import pic from "../assets/img-0627.jpg";

const Services = () => {
  return (
    <div className="w-full py-10 bg-gray-900">
      <div className="flex justify-between mx-10">
        <div className="text-gray-100">
          <h2 className="font-bold text-center text-orange-400 uppercase text-md">
            <span className="">
              <hr className="inline-block w-5 h-1 mx-2 border-orange-400" />
              Tjänster
            </span>
          </h2>
          <h2 className="text-4xl font-bold text-gray-100">
            {" "}
            Värme, ventilation och sanitet
          </h2>
          <p className="my-4">
            Vi har ett brett utbud av VVS-tjänster och utför allt från mindre
            installationer till större entreprenader.
          </p>

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
        </div>
        <div class="">
          <img src={pic} alt="Logo" className="rounded-sm w-50 h-50" />
        </div>
      </div>
    </div>
  );
};

export default Services;
