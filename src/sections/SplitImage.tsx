import React from "react";
import Headline from "../components/Headline";

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
      return "lg:order-last lg:pl-10";
    }
  }

  return (
    <section className="w-full py-16 ">
      <div className="container grid lg:grid-cols-2">
        <div className="my-auto space-y-5 text-white">
          <Headline title={title} />
          <div className="text-4xl font-bold text-white ">{description}</div>
          {children}
        </div>
        <div className={"flex " + align()}>
          <img
            src={image}
            alt={title}
            className="z-20 w-auto mx-auto mt-10 rounded-md lg:mt-0"
          />
        </div>
      </div>
    </section>
  );
}
