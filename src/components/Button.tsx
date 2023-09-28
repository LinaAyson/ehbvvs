import { NavLink } from "react-router-dom";

type ButtonProps = {
  text: string;
  link: string;
  type?: string;
};

export default function Button({
  text,
  link = "",
  type = "default",
}: ButtonProps) {
  // Classnames function for the button based on the type prop
  function classNames(type: string) {
    switch (type) {
      case "primary":
        return "bg-gray-900 text-gray-100 border border-orange-400 ";
      case "secondary":
        return "bg-gray-900 text-gray-100";
      case "default":
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
