import Stars from "../components/Stars";

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-950 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <Stars />
            <figure className="flex flex-col justify-between flex-auto mt-5">
              <blockquote className="text-lg leading-8 text-white">
                <p className="text-2xl">
                  “Snabbt och smidigt, bra bemötande och trevliga
                  installatörer.”
                </p>
              </blockquote>
              <figcaption className="flex items-center mt-5 gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-white">Lasse Jonsson</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col pt-10 border-t border-white/10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <Stars />
            <figure className="flex flex-col justify-between flex-auto mt-5">
              <blockquote className="text-lg leading-8 text-white">
                <p className="text-2xl">
                  “Snabb och utmärkt installation, trevlig personal.”
                </p>
              </blockquote>
              <figcaption className="flex items-center mt-5 gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-white">
                    Robin Ljustermo
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
