import React, { useState } from "react";
import {
  WrenchScrewdriverIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Header = () => {
  let Links = [
    { name: "Tjänster", link: "/" },
    { name: "Priser", link: "/" },
    { name: "Karriär", link: "/" },
    { name: "Om oss", link: "/" },
  ];
  let [isOpen, setisOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full shadow-md">
      <div className="items-center justify-between py-4 bg-white md:px-10 px-7 md:flex">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl cursor-pointer"
        >
          <WrenchScrewdriverIcon className="w-7 h-7" />
          <span className="font-bold">EHB VVS</span>
        </NavLink>

        {/* Menu Icon */}
        <div
          onClick={() => setisOpen(!isOpen)}
          className="absolute cursor-pointer w-7 h-7 right-8 top-6 md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* nav links  */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            isOpen ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="font-semibold my-7 md:my-0 md:ml-8">
              <a href="/">{link.name}</a>
            </li>
          ))}
          <Button text="Kontakta oss" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
