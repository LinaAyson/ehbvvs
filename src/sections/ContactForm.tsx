import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
  return (
    <section className="bg-gray-100">
      <div className="container py-10 ">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:basis-2/3 md:basis-1/2">
            <h6 className="text-sm font-bold text-left text-orange-400 uppercase">
              <hr className="inline-block w-5 h-1 mx-1 border-orange-400 " />
              Frågor?
            </h6>
            <section className="">
              <div className="max-w-screen-md py-2 lg:py-2">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-left text-gray-900">
                  Kontakta oss
                </h2>
                {/* <p className="mb-8 font-light text-gray-500 lg:mb-8 dark:text-gray-400 sm:text-lg">
                Har du frågor om tjänster, priser eller andra frågor tveka inte
                på att kontakta oss
              </p> */}
                <form action="#" className="space-y-8">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Din email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder="emailadress@email.se"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Ditt namn
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Namn"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Ditt meddelande
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Leave a comment..."
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 text-sm font-medium text-center text-gray-100 bg-gray-700 rounded-lg sm:w-fit hover:bg-gray-800 focus:ring-4 focus:ring-orange-400 "
                  >
                    Skicka meddelande
                  </button>
                </form>
              </div>
            </section>
          </div>

          <div className="m-10 mt-20 font-light lg:basis-1/3">
            <h3 className="mb-4 text-3xl font-semibold text-gray-900">
              Kontaktuppgifter
            </h3>
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service.
            </p>
            <div className="flex flex-col mt-5">
              <div className="inline-flex mt-5">
                <MapPinIcon className="w-8 h-8 text-orange-400 " />
                <a href="https://maps.app.goo.gl/Xh5iuj4yNDgowtDd7">
                  Östermalmsgatan 21, 114 26 Stockholm
                </a>
              </div>
              <div className="inline-flex mt-5 ">
                <PhoneIcon className="w-8 h-8 text-orange-400 " />
                <a href="tel:+46709545442">0709545442</a>
              </div>
              <div className="inline-flex mt-5 ">
                <EnvelopeIcon className="w-8 h-8 text-orange-400 " />
                <a href="mailto:emailadress@email.se">emailadress@email.se</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
