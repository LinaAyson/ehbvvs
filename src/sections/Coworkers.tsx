import person from "../assets/person.jpg";
import { title } from "process";
import Coworker from "../components/Coworker";

const coworkersData = [
  {
    name: "Thomas Björklund",
    jobTitle: "VD",
    imageUrl: person,
    email: "email@email.se",
    phone: "070707070",
  },
  {
    name: "Jane Doe",
    jobTitle: "Webmaster",
    imageUrl: person,
    email: "email@email.se",
    phone: "070707070",
  },
  {
    name: "Tom Doe",
    jobTitle: "Mes",
    imageUrl: person,
    email: "email@email.se",
    phone: "070707070",
  },
];

export default function Coworkers() {
  return (
    <section className="my-10">
      <div className="container">
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          {coworkersData.map((coworker) => (
            <Coworker coworker={coworker} />
          ))}
        </div>
      </div>
    </section>
  );
}
