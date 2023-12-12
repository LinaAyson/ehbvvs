import { CheckCircleIcon } from "@heroicons/react/24/outline";

type ListItemProps = {
  text: string;
};

export default function ListItem({ text }: ListItemProps) {
  return (
    <li className="flex">
      <CheckCircleIcon className="flex-shrink-0 w-5 h-5 my-auto text-primaryRed " />
      <p className="my-auto ml-5 text-lg font-thin text-gray-200">{text}</p>
    </li>
  );
}
