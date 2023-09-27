import {
  Bars3BottomRightIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

export default function Header() {
  let Links = [
    { name: "Tjänster", link: "/tjanster" },
    { name: "Priser", link: "/priser" },
    { name: "Karriär", link: "/karriar" },
    { name: "Om oss", link: "/om-oss" },
  ];
  let [isOpen, setisOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full shadow-md bg-white ">
      <div className="container items-center justify-between py-4 md:flex">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl cursor-pointer"
        >
          <WrenchScrewdriverIcon className="w-7 h-7" />
          <span className="font-bold">EHB VVS</span>
        </NavLink>
        <div
          onClick={() => setisOpen(!isOpen)}
          className="absolute cursor-pointer w-7 h-7 right-8 top-6 md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            isOpen ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <NavLink
              to={link.link}
              className="font-semibold my-7 md:my-0 md:ml-8"
            >
              {link.name}
            </NavLink>
          ))}
          <Button link="/kontakt" type="default" text="Kontakta oss" />
        </ul>
      </div>
    </header>
  );
}
