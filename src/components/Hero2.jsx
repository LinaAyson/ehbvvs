// import { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
//   { name: "Log in", href: "#" },
// ];

// export default function Hero2() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-white">
//       <header className="absolute inset-x-0 top-0 z-50">
//         <div className="mx-auto max-w-7xl">
//           <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
//             <nav
//               className="flex items-center justify-between lg:justify-start"
//               aria-label="Global"
//             >
//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   alt="Your Company"
//                   className="w-auto h-8"
//                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                 />
//               </a>
//               <button
//                 type="button"
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
//                 onClick={() => setMobileMenuOpen(true)}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon className="w-6 h-6" aria-hidden="true" />
//               </button>
//               <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="text-sm font-semibold leading-6 text-gray-900"
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </nav>
//           </div>
//         </div>
//         <Dialog
//           as="div"
//           className="lg:hidden"
//           open={mobileMenuOpen}
//           onClose={setMobileMenuOpen}
//         >
//           <div className="fixed inset-0 z-50" />
//           <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   className="w-auto h-8"
//                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                   alt=""
//                 />
//               </a>
//               <button
//                 type="button"
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon className="w-6 h-6" aria-hidden="true" />
//               </button>
//             </div>
//             <div className="flow-root mt-6">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="py-6 space-y-2">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//                 <div className="py-6">
//                   <a
//                     href="#"
//                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     Log in
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </Dialog.Panel>
//         </Dialog>
//       </header>

//       <div className="relative">
//         <div className="mx-auto max-w-7xl">
//           <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
//             <svg
//               className="absolute inset-y-0 hidden h-full transform translate-x-1/2 right-8 w-80 fill-white lg:block"
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//               aria-hidden="true"
//             >
//               <polygon points="0,0 90,0 50,100 0,100" />
//             </svg>

//             <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
//               <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl">
//                 <div className="hidden sm:mb-10 sm:flex">
//                   <div className="relative px-3 py-1 text-sm leading-6 text-gray-500 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//                     Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
//                     <a
//                       href="#"
//                       className="font-semibold text-indigo-600 whitespace-nowrap"
//                     >
//                       <span className="absolute inset-0" aria-hidden="true" />
//                       Read more <span aria-hidden="true">&rarr;</span>
//                     </a>
//                   </div>
//                 </div>
//                 <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//                   Data to enrich your online business
//                 </h1>
//                 <p className="mt-6 text-lg leading-8 text-gray-600">
//                   Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
//                   qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
//                   occaecat fugiat aliqua.
//                 </p>
//                 <div className="flex items-center mt-10 gap-x-6">
//                   <a
//                     href="#"
//                     className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                   >
//                     Get started
//                   </a>
//                   <a
//                     href="#"
//                     className="text-sm font-semibold leading-6 text-gray-900"
//                   >
//                     Learn more <span aria-hidden="true">→</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//           <img
//             className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
//             src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
