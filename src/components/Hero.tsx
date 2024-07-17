import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="h-[400px] md:h-[500px] 2xl:h-[1100px]  w-full bg-hero bg-no-repeat bg-cover bg-center"
      id="hero"
    >
      <div className="lg:w-1/2 pt-[70px] md:pt-6 md:px-6 lg:px-0 2xl:w-[1000px]   h-full  flex justify-center items-center">
        <div className=" w-full relative   lg:w-[70%]   md:mx-0 mx-2         rounded-lg px-4s">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r  transform scale-[0.80]  rounded-full blur-3xl" />
          <div className="relative shadow-xl w-full  bg-black/90  border md:px-2 py-6 md:p-10   border-gray-800 2xl:p-14 px-4  h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5 "
                stroke="currentColor"
                className="h-3 w-2  text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className=" text-white text-center lg:text-start text-base md:text-xl lg:text-2xl 2xl:text-3xl  font-bold font-['Roboto'] capitalize tracking-wide leading-relaxed 2xl:leading-relaxed">
              La Gestion De Votre Entreprise Vient De Devenir Plus Facile.
            </h1>

            <p className="text-xs md:text-sm px-1.5 lg:px-0 lg:text-lg 2xl:text-xl font-semibold tracking-wide  py-5 text-white 2xl:w- 2xl:py-8 2xl:tracking-wider font-['Poppins']">
              Centralisez tout sur un environnement de câblage structuré et
              éliminez la complexité d&apos;avoir plusieurs infrastructures de
            </p>
            <button className="animated-button ">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text text-sm">Contact Us</span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>

            <Meteors number={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
