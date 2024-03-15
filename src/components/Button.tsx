import { NavLink } from "react-router-dom";

type ButtonProps = {
  text: string;
  link: string;
  type?: string;
  onClick?: () => void; // Added onClick prop
};

export default function Button({
  text,
  link = "",
  type = "default",
  onClick,
}: ButtonProps) {
  // Classnames function for the button based on the type prop
  function classNames(type: string) {
    switch (type) {
      case "primary":
        return "bg-black text-gray-200 border border-primaryRed hover:border-red ";
      case "secondary":
        return "bg-black text-gray-100";
      case "default":
        return "bg-black text-gray-100";
      default:
        return ""; // Handle other cases if needed
    }
  }

  return (
    <NavLink
      to={link}
      className={"px-3 py-2 font-semibold rounded-lg  " + classNames(type)}
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
}
