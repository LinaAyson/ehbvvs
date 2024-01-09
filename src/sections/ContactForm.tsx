import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Headline from "../components/Headline";

type ContactFormProps = {
  className?: string;
};

export default function ContactForm({ className }: ContactFormProps) {
  return (
    <section>
      <div className="container py-10 ">
        <div className={className}>
          <div className=" lg:basis-2/3 md:basis-1/2">
            <Headline title="Frågor?" />

            <div>
              <div className="max-w-screen-md py-2 lg:py-2">
                <p className="mb-8 font-light text-gray-200 lg:mb-8 sm:text-lg">
                  Har du frågor om tjänster, priser eller annat tveka inte på
                  att kontakta oss
                </p>
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-left">
                  Kontakta oss
                </h2>

                <form action="#" className="space-y-8">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium "
                    >
                      Din email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-zinc-800   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder="emailadress@email.se"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium "
                    >
                      Ditt namn
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="block w-full p-3 text-sm rounded-lg border-gray-950 bg-zinc-800 focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Namn"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium "
                    >
                      Ditt meddelande
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="block p-2.5 w-full text-sm  bg-zinc-800 rounded-lg focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Skriv ett meddelande.."
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 text-sm text-center text-gray-100 rounded-lg bg-zinc-950 sm:w-fit hover:border border-primaryRed "
                  >
                    Skicka meddelande
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-20 font-light break-words lg:ml-10 lg:basis-1/3">
            <h3 className="mb-4 text-3xl font-semibold ">Kontaktuppgifter</h3>
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service.
            </p>
            <div className="flex flex-col mt-5 ">
              <div className="inline-flex mt-5 space-x-4 ">
                <MapPinIcon className="w-8 h-8 text-primaryRed " />
                <a
                  href="https://maps.app.goo.gl/Xh5iuj4yNDgowtDd7"
                  target="_blank"
                >
                  Östermalmsgatan 21, 114 26 Stockholm
                </a>
              </div>
              <div className="inline-flex mt-5 space-x-4 ">
                <PhoneIcon className="w-8 h-8 text-primaryRed " />
                <a href="tel:+46709545442">0709545442</a>
              </div>
              <div className="inline-flex mt-5 space-x-4 ">
                <EnvelopeIcon className="w-8 h-8 text-primaryRed " />
                <a href="mailto:emailadress@email.se">emailadress@email.se</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
