import React from "react";

type coworkerProps = {
  coworker: {
    imageUrl: string;
    name: string;
    jobTitle: string;
    email: string;
    phone: string;
  };
};

export default function Coworker({ coworker }: coworkerProps) {
  return (
    <div className="relative p-4 mx-auto rounded-lg shadow-lg">
      <img
        src={coworker.imageUrl}
        alt={coworker.name}
        className="object-cover transition duration-300 ease-in-out rounded-md opacity-90 hover:opacity-40"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-80 hover:opacity-100">
        <h2 className="text-xl font-semibold text-white">{coworker.name}</h2>
        <p className="text-white">{coworker.jobTitle}</p>
        {/* <a className="text-white" href={`mailto:${coworker.email}`}>
          {coworker.email}
        </a> */}
        <a href={`tel:${coworker.phone}`}>
          <p className="underline text-red ">{coworker.phone}</p>
        </a>
      </div>
    </div>
  );
}
// object-cover transition duration-300 ease-in-out rounded-md opacity-90 hover:opacity-40
