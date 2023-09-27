import { CheckCircleIcon } from "@heroicons/react/24/outline";

type ListItemProps = {
  text: string;
};

export default function ListItem({ text }: ListItemProps) {
  return (
    <li className="flex">
      <CheckCircleIcon className="w-5 h-5 text-orange-400 flex-shrink-0" />
      <p className="ml-5 text-lg">{text}</p>
    </li>
  );
}
