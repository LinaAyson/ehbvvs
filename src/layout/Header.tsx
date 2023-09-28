import {
  Bars3BottomRightIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import logo from "../assets/logo1.png";

export default function Header() {
  let Links = [
    { name: "Tjänster", link: "/tjanster" },
    { name: "Priser", link: "/priser" },
    { name: "Karriär", link: "/karriar" },
    { name: "Om oss", link: "/om-oss" },
  ];
  let [isOpen, setisOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-md ">
      <div className="container items-center justify-between pt-2 pb-1 md:flex">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl cursor-pointer"
        >
          <img src={logo} className="w-16" />
          {/* <WrenchScrewdriverIcon className="text-gray-100 w-7 h-7" />
          <span className="font-bold text-gray-100 ">EHB VVS</span> */}
        </NavLink>
        <div
          onClick={() => setisOpen(!isOpen)}
          className="absolute cursor-pointer w-7 h-7 right-8 top-6 md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul className="flex space-x-5 text-gray-100">
          {Links.map((link) => (
            <NavLink to={link.link} className="my-auto">
              {link.name}
            </NavLink>
          ))}
          <Button link="/kontakt" type="primary" text="Kontakta oss" />
        </ul>
      </div>
    </header>
  );
}
