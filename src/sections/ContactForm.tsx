import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Headline from "../components/Headline";
import { useState } from "react";

type ContactFormProps = {
  className?: string;
};

export default function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

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
                <h2 className="text-4xl font-bold tracking-tight text-left ">
                  Kontakta oss
                </h2>
                <p className="mb-4">
                  Vårt kontaktformulär är för tillfälligt otillgängligt.
                  Kontakta oss gärna på{" "}
                  <a href="mailto:info@ehvvs.com"> info@ehvvs.com </a> eller
                  <a href="tel:+00460101234567"> 010-123 45 67</a>. Tack för din
                  förståelse!
                </p>

                <form className="space-y-8">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium"
                    >
                      Din email
                    </label>
                    <input
                      type="email"
                      id="email"
                      disabled={true}
                      className="shadow-sm bg-zinc-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="emailadress@email.se"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium"
                    >
                      Ditt namn
                    </label>
                    <input
                      type="text"
                      id="name"
                      disabled={true}
                      className="block w-full p-3 text-sm rounded-lg border-gray-950 bg-zinc-800 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Namn"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium"
                    >
                      Ditt meddelande
                    </label>
                    <textarea
                      id="message"
                      rows={8}
                      disabled={true}
                      className="block p-2.5 w-full text-sm bg-zinc-800 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Skriv ett meddelande.."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={true}
                    className="px-5 py-3 mx-auto text-sm text-center text-gray-100 rounded-lg bg-zinc-950 sm:w-fit hover:border border-primaryRed"
                  >
                    Skicka meddelande
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-20 font-light break-words lg:ml-10 lg:basis-1/3">
            <h3 className="mb-4 text-3xl font-bold whitespace-nowrap ">
              Kontaktuppgifter
            </h3>

            <div className="flex flex-col mt-5">
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
                <a href="mailto:info@ehvvs.com">info@ehvvs.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import {
//   EnvelopeIcon,
//   MapPinIcon,
//   PhoneIcon,
// } from "@heroicons/react/24/outline";
// import Headline from "../components/Headline";

// type ContactFormProps = {
//   className?: string;
// };

// export default function ContactForm({ className }: ContactFormProps) {
//   return (
//     <section className={className}>
//       <div className="container flex flex-col py-10 lg:flex-row">
//         <div className="lg:flex-1">
//           <Headline title="Frågor?" />
//           <p className="mb-8 font-light text-gray-200 lg:mb-8 sm:text-lg">
//             Har du frågor om tjänster, priser eller annat, tveka inte på att
//             kontakta oss.
//           </p>
//           {/* <h2 className="mb-4 text-4xl font-bold tracking-tight text-left">
//             Kontakta oss
//           </h2> */}
//           <div className="font-light">
//             <h3 className="mb-4 text-3xl font-semibold">Kontaktuppgifter</h3>
//             <div className="flex flex-col mt-5">
//               <div className="inline-flex items-center mt-5 space-x-4">
//                 <MapPinIcon className="w-8 h-8 text-primaryRed" />
//                 <a
//                   href="https://maps.app.goo.gl/Xh5iuj4yNDgowtDd7"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Östermalmsgatan 21, 114 26 Stockholm
//                 </a>
//               </div>
//               <div className="inline-flex items-center mt-5 space-x-4">
//                 <PhoneIcon className="w-8 h-8 text-primaryRed" />
//                 <a href="tel:+46709545442">0709545442</a>
//               </div>
//               <div className="inline-flex items-center mt-5 space-x-4">
//                 <EnvelopeIcon className="w-8 h-8 text-primaryRed" />
//                 <a href="mailto:info@ehvvs.com">info@ehvvs.com</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-10 lg:flex-1 lg:ml-10 lg:mt-0">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.993922557185!2d18.0735402160211!3d59.33790698166439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d76eaf7f5d7%3A0xec4d78b68faf73b!2s%C3%96stermalmsgatan%2021%2C%20114%2026%20Stockholm!5e0!3m2!1sen!2sse!4v1639052635409"
//             width="100%"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen={true}
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// }
