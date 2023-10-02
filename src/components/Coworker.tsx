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
    <div className="p-4 mx-auto rounded-lg shadow-lg">
      <div className="flex ">
        <img
          src={coworker.imageUrl}
          alt={coworker.name}
          className="object-cover transition duration-300 ease-in-out opacity-90 hover:scale-110 hover:opacity-40"
        />
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold">{coworker.name}</h2>
        <p className="text-gray-500">{coworker.jobTitle}</p>
        <div>
          <a className="text-gray-500 " href={`mailto:${coworker.email}`}>
            {coworker.email}
          </a>
        </div>
        <div>
          <a className="text-gray-500 " href={`tel:${coworker.phone}`}>
            {coworker.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
