import { NavLink } from "react-router-dom";

type HeroPageProps = {
  title: string;
};

export default function HeroPage({ title }: HeroPageProps) {
  return (
    <section className="relative flex overflow-hidden bg-black">
      <div className="container z-20 pt-10">
        <div className="relative px-6 py-24 overflow-hidden isolate sm:px-24 xl:py-32">
          <h2 className="max-w-2xl mx-auto text-4xl font-bold tracking-tight text-center text-white sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-xl mx-auto mt-4 italic text-center text-gray-100 sm:text-xl/relaxed xs:text-center xs:text-lg">
            Reprehenderit ad esse et non officia in nulla. Id proident tempor
            incididunt nostrud nulla et culpa.
          </p>
        </div>
      </div>
      <svg
        className="absolute inset-0 z-10 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="3096c803-efce-4a18-a601-c2f068f9adf3"
            width="200"
            height="200"
            x="50%"
            y="-24"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-24" className="overflow-visible fill-gray-800/20">
          <path d="M0 0h201v201h-201Z" stroke-width="0"></path>
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#3096c803-efce-4a18-a601-c2f068f9adf3)"
        ></rect>
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute -right-14 -top-24 w-[69.25rem] transform-gpu blur-3xl"
      >
        <path
          fill="url(#986f4ec8-ca62-4906-a05f-981d15a9baf5)"
          fill-opacity=".25"
          d="M235.233 229.055 57.541 310.091.83.615l234.404 228.44L555.251 83.11c-65.036 115.261-134.286 322.756 109.01 230.655C968.382 198.638 1031-19.583 1092.23 172.304c48.98 153.51-34.51 321.107-82.37 385.717L810.952 307.442 648.261 631.576 235.233 229.055Z"
        ></path>
        <defs>
          <linearGradient
            id="986f4ec8-ca62-4906-a05f-981d15a9baf5"
            x1="1220.59"
            x2="-85.053"
            y1="198.898"
            y2="-7.05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#293858"></stop>
            <stop offset="1" stop-color="#405277"></stop>
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
