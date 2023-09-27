import React from "react";

type SplitImageProps = {
  image: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function SplitImage({
  image,
  title,
  description,
  children,
}: SplitImageProps) {
  return (
    <section className="w-full py-10 bg-gray-900">
      <div className="flex justify-between mx-10">
        <div className="text-gray-100">
          <h2 className="font-bold text-center text-orange-400 uppercase text-md">
            <span className="">
              <hr className="inline-block w-5 h-1 mx-2 border-orange-400" />
              {title}
            </span>
          </h2>
          <div className="text-4xl font-bold text-gray-100">{description}</div>
          {children}
        </div>
        <div className="">
          <img src={image} alt="Logo" className="rounded-sm w-50 h-50" />
        </div>
      </div>
    </section>
  );
}
