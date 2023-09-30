export default function Footer() {
  return (
    <footer className="relative py-20 bg-black">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-3xl font-semibold text-gray-300">
              Behöver du hjälp?
            </h4>
            <h5 className="mt-0 mb-2 text-lg text-gray-300">Kontakta oss</h5>
            <div className="mt-6 mb-6 lg:mb-0">
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none"
                type="button"
              >
                <i className="fab fa-twitter" />
              </button>

              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none"
                type="button"
              >
                <i className="fab fa-facebook-square" />
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                type="button"
              >
                <i className="fab fa-dribbble" />
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none"
                type="button"
              >
                <i className="fab fa-github" />
              </button>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-gray-300 uppercase">
                  Länkar
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-400 hover:text-gray-600"
                      href=""
                    >
                      {" "}
                      Tjänster
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-400 hover:text-gray-600"
                      href=""
                    >
                      Priser
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-400 hover:text-gray-600"
                      href=""
                    >
                      Om oss
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-400 hover:text-gray-600"
                      href=""
                    >
                      Kontakta oss
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-gray-300 uppercase">
                  EHB VVS
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-400 hover:text-gray-600"
                      href=""
                    >
                      Östermalmsgatan 21BV 114 26 Stockholm
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-400 hover:text-gray-600"
                      href=""
                    >
                      08-305230{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-400 hover:text-gray-600"
                      href=""
                    >
                      Org.nr. 556991-0333
                    </a>
                  </li>
                  {/* <li>
                <a
                  className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                  href=""
                >
                  Contact Us
                </a>
              </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-800" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-gray-500">
              Copyright © 2023
              <a
                href=""
                className="text-gray-500 hover:text-indigo-600"
                target="_blank"
              >
                <p>Weblou</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
