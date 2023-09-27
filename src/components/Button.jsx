import React from "react";
import { NavLink } from "react-router-dom";

export default function Button({ text, link = "", type }) {
  // Classnames function for the button based on the type prop
  function classNames(type) {
    switch (type) {
      case "primary":
        return "bg-gray-900 text-gray-100 border border-orange-400";
      case "secondary":
        return "bg-gray-900 text-gray-100";
      default:
        return "bg-gray-900 text-gray-100";
    }
  }

  return (
    <NavLink
      to={link}
      className={"px-3 py-2 font-semibold rounded-lg " + classNames(type)}
    >
      {text}
    </NavLink>
  );
}
