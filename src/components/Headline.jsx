import React from "react";

export default function Headline({ title }) {
  return (
    <section className="container w-full">
      <h2 className="text-lg font-bold text-orange-400 uppercase">
        <span className="">
          <hr className="inline-block w-6 h-1.5 mr-2 border-orange-400 " />
          {title}
        </span>
      </h2>
    </section>
  );
}
