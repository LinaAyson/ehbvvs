import { func } from "prop-types";
import React from "react";

type SplitImageProps = {
  image: string;
  title: string;
  description: string;
  children: React.ReactNode;
  alignImage: "left" | "right";
};

export default function SplitImage({
  image,
  title,
  description,
  children,
  alignImage,
}: SplitImageProps) {
  function align() {
    if (alignImage === "left") {
      return "lg:order-first lg:pr-10";
    } else {
      return "lg:order-last";
    }
  }

  return (
    <section className="w-full py-10 bg-slate-800">
      <div className="container grid lg:grid-cols-2">
        <div className="my-auto space-y-5 text-gray-100">
          <h2 className="font-bold text-orange-400 uppercase text-md">
            <span className="">
              <hr className="inline-block w-5 h-1 mr-2 border-orange-400" />
              {title}
            </span>
          </h2>
          <div className="text-4xl font-bold text-gray-100">{description}</div>
          {children}
        </div>
        <div className={align()}>
          <img
            src={image}
            alt="Logo"
            className="w-auto pt-10 mx-auto rounded-lg lg:pt-0"
          />
        </div>
      </div>
    </section>
  );
}
