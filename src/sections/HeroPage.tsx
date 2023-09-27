import { NavLink } from "react-router-dom";

type HeroPageProps = {
  title: string;
};

export default function HeroPage({ title }: HeroPageProps) {
  return (
    <section className="pt-20 bg-gray-100">
      <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-36">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <div className="flex items-center justify-center mt-5 ">
            <NavLink
              to="/"
              className="mr-1 text-sm font-semibold text-gray hover:text-orange-600"
            >
              Hem
            </NavLink>
            <p className="text-sm font-semibold text-gray">/ {title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
