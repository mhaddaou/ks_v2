import Hero from "@/components/Hero";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen bg-white overflow-x-hidden">
      <Header />
      <div className=" relative  w-full mt-[115px] overflow-x-hidden">
        <Hero />
        <section
          id="advantage"
          className="w-full overflow-x-hidden  bg-gradient-to-br from-[#112B44] to-[#070D24] pt-16"
        >
          <div className="container 0">
            <div className="w-[80%]  mx-auto grid grid-cols-3 gap-4 text-white">
              <div className="col-span-2">
                <h4 className="text-[#0895FB] text-lg font-semibold font-[Poppins] pb-2">Bénéfices structurés</h4>
                <h1 className="w-[40%] text-white font-[Poppins] text-2xl">
                  Câblage structuré offre avantages indispensables maintenance.
                </h1>
              </div>
              <div className="bg-[#16253A] w-[160px] p-3 shadow-sm shadow-black rounded-md">
                <Image alt="icon" src="/icons/first.svg" width={10} height={10} className="w-12 " />
                <h2 className="text-sm font-semibold pt-4">L’encombrement du câblage est réduit</h2>
                <Link className="flex justify-between pt-4" href={'/'}>
                <span>see more</span>
                <span>row</span>
                </Link>
              </div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
}
