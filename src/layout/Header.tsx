import {
  Bars3BottomRightIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import logo from "../assets/logo1.png";
export default function Header() {
  let Links = [
    { name: "Tjänster", link: "/tjanster" },
    { name: "Priser", link: "/priser" },
    // { name: "Karriär", link: "/karriar" },
    { name: "Om oss", link: "/om-oss" },
    { name: "Skärgården", link: "/vvs-skargarden" },
  ];

  let [isOpen, setisOpen] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const closeMenu = () => {
    setisOpen(false);
  };

  return (
    <header
      className={
        isOpen
          ? "bg-black fixed top-0 left-0 z-50 w-full h-full shadow-md"
          : scroll
          ? "bg-black fixed top-0 left-0 z-50 w-full shadow-md transparent"
          : "bg-transparent fixed top-0 left-0 z-50 w-full shadow-md transparent"
      }
    >
      <div className="container z-20 items-center justify-between py-3 md:flex">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl cursor-pointer"
          onClick={closeMenu}
        >
          <img src={logo} className="w-16 mt-2" />
        </NavLink>
        <div
          onClick={() => setisOpen(!isOpen)}
          className="absolute text-white cursor-pointer w-7 h-7 right-8 top-6 md:hidden"
        >
          {isOpen ? <XMarkIcon className="" /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={
            isOpen
              ? "flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 text-gray-100 mt-6"
              : "hidden md:flex space-x-5 text-gray-100"
          }
        >
          {Links.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              className="my-auto"
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <Button
            link="/kontakt"
            type="primary"
            text="Kontakta oss"
            onClick={closeMenu}
          />
        </ul>
      </div>
    </header>
  );
}
