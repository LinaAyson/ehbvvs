import { CheckCircleIcon } from "@heroicons/react/24/outline";

type ListItemProps = {
  text: string;
};

export default function ListItem({ text }: ListItemProps) {
  return (
    <li className="flex">
      <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-orange-400" />
      <p className="ml-5 text-lg">{text}</p>
    </li>
  );
}
