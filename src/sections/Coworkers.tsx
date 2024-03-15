import React from "react";
import person from "../assets/person.jpg";
import Coworker from "../components/Coworker";

const coworkersData = [
  {
    name: "Oliver",
    jobTitle: "VD/Delägare/Montör",
    imageFilename: "oliver.jpg",
    email: "email@email.se",
    phone: "+46723683790",
  },
  {
    name: "Thomas",
    jobTitle: "Delägare/Montör",
    imageFilename: "thomas.jpg",
    email: "email@email.se",
    phone: "+46709545442",
  },
  {
    name: "Svante",
    jobTitle: "Delägare/Montör",
    imageFilename: "svante.jpg",
    email: "email@email.se",
    phone: "+46708612184",
  },
  {
    name: "Patrik",
    jobTitle: "Montör",
    imageFilename: "patrik.jpg",
    email: "email@email.se",
    phone: "+46725692266",
  },
  {
    name: "Ola",
    jobTitle: "Montör",
    imageFilename: "ola.jpg",
    email: "email@email.se",
    phone: "+46701492545",
  },
  {
    name: "Rasmus ",
    jobTitle: "Montör",
    imageFilename: "rasmus.jpg",
    email: "email@email.se",
    phone: "+46761275617",
  },
  {
    name: "Jonathan",
    jobTitle: "Montör",
    imageFilename: "jonathan.jpg",
    email: "email@email.se",
    phone: "+46707518349",
  },
  {
    name: "Nicklas",
    jobTitle: "Montör",
    imageFilename: "niclas.jpg",
    email: "email@email.se",
    phone: "+46708102484",
  },
  {
    name: "Johan",
    jobTitle: "Montör",
    imageFilename: "johan.jpg",
    email: "email@email.se",
    phone: "+46734488627",
  },
];

export default function Coworkers() {
  return (
    <section className="my-10">
      <div className="container">
        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {coworkersData.map((coworker) => {
            const imageUrl = coworker.imageFilename
              ? require(`../assets/coworkers/${coworker.imageFilename}`)
              : person;

            return (
              <Coworker
                key={coworker.name}
                coworker={{ ...coworker, imageUrl }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
