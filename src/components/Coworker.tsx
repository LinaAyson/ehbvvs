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
    <div className="p-4 text-center rounded-lg shadow-lg">
      <img
        src={coworker.imageUrl}
        alt={coworker.name}
        className="object-cover mx-auto transition-transform duration-300 rounded-md grayscale w-52 hover:grayscale-0 hover:scale-105"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-red">{coworker.name}</h2>
        <p className="text-gray-600">{coworker.jobTitle}</p>
        {/* <a
          className="text-gray-600 hover:text-gray-800"
          href={`mailto:${coworker.email}`}
        >
          {coworker.email}
        </a> */}
        <div>
          <a href={`tel:${coworker.phone}`}>
            <p className="text-gray-600 hover:text-gray-100">
              {coworker.phone}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

// export default function Coworker({ coworker }: coworkerProps) {
//   return (
//     <div className="relative p-4 mx-auto rounded-lg shadow-lg">
//       <img
//         src={coworker.imageUrl}
//         alt={coworker.name}
//         className="object-cover transition duration-300 ease-in-out rounded-md opacity-90 hover:opacity-40"
//       />
//       <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-80 hover:opacity-100">
//         <h2 className="text-xl font-semibold text-white">{coworker.name}</h2>
//         <p className="text-white">{coworker.jobTitle}</p>
//         {/* <a className="text-white" href={`mailto:${coworker.email}`}>
//           {coworker.email}
//         </a> */}
//         <a href={`tel:${coworker.phone}`}>
//           <p className="underline text-red ">{coworker.phone}</p>
//         </a>
//       </div>
//     </div>
//   );
// }
// object-cover transition duration-300 ease-in-out rounded-md opacity-90 hover:opacity-40
