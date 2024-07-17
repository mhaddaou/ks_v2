"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {


  return (
    <section id="home" className="w-full bg-header-bg bg-no-repeat bg-cover fixed ">
        <div className="bg-black/20  ">
        <div className="w-[80%] mx-auto flex justify-between   items-center py-8  ">
            <Link href={'/'}>
                <Image src={'/icons/KSLOGO.svg'} width={10} height={10} alt="kd" className="w-48"/>
            </Link>
            <div>
                <ul className="flex gap-16">
                    <li>Home</li>
                    <li>about us</li>
                    <li>our service</li>
                    <li>contact us</li>
                    <li>benifits</li>
                </ul>
            </div>
            <div> 
            <button className="button">Contact Us</button>

            </div>

        </div>

        </div>
        
        

    </section>
  );
}