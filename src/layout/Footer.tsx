import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

export default function Footer() {
  return (
    <footer className="py-8 bg-black lg:py-20">
      <div className="container px-4 mx-auto lg:px-16 ">
        <div className="flex flex-col items-center justify-between text-center lg:flex-row lg:text-left">
          {/* Logo Section */}
          <div className="mb-8 lg:mb-0">
            <img src={logo} className="w-48 mx-auto lg:mx-0" alt="Logo" />
          </div>

          {/* Text and Links Section */}
          <div className="flex flex-col lg:flex-row">
            {/* Links */}
            <div className="mb-4 lg:mb-0 lg:mr-8">
              <span className="block mb-2 text-gray-300 uppercase text-md">
                Länkar
              </span>
              <ul className="list-unstyled">
                <li>
                  <Link
                    className="block pb-1 text-sm text-gray-400 hover:text-gray-600"
                    to="/tjanster"
                  >
                    Tjänster
                  </Link>
                </li>
                <li>
                  <Link
                    className="block pb-1 text-sm text-gray-400 hover:text-gray-600"
                    to="/priser"
                  >
                    Priser
                  </Link>
                </li>
                <li>
                  <Link
                    className="block pb-1 text-sm text-gray-400 hover:text-gray-600"
                    to="/om-oss"
                  >
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link
                    className="block pb-1 text-sm text-gray-400 hover:text-gray-600"
                    to="/vvs-skargarden"
                  >
                    Skärgården
                  </Link>
                </li>
                <li>
                  <Link
                    className="block pb-1 text-sm text-gray-400 hover:text-gray-600"
                    to="/kontakt"
                  >
                    Kontakta oss
                  </Link>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <span className="block mb-2 text-gray-300 uppercase text-md">
                EHB VVS
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="block pb-1 text-sm text-gray-400 hover:text-gray-600"
                    href="https://maps.app.goo.gl/6pyH91TZUvhiV3jM6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Östermalmsgatan 21BV <br /> 114 26 Stockholm
                  </a>
                </li>
                <li>
                  <a
                    className="block pb-1 text-sm text-gray-400 hover:text-gray-600"
                    href="tel:+46709545442"
                  >
                    0709545442
                  </a>
                </li>
                <li>
                  <a
                    className="block pb-1 text-sm text-gray-400 hover:text-gray-600"
                    href="https://www.allabolag.se/5569910333/ehb-vvs-ab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Org.nr. 556991-0333
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

        {/* Copyright Section */}
        <div className="text-center">
          <p className="py-1 text-sm text-gray-500">
            Copyright © 2024
            <a
              href="/"
              className="ml-1 text-sm text-gray-500 hover:text-indigo-900"
            >
              Weblou
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
