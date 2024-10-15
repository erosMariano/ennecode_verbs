import Star from "@/app/images/star.svg"
import Star2 from "@/app/images/star2.svg"
import EnneCode from "@/app/images/ennecode.svg"

import Image from "next/image";
import LoginHome from "./components/views/Home";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="px-4 flex-1 flex items-center relative justify-center">
          <div className="flex flex-col flex-1">
              <section className="pt-12 relative z-20 flex items-center justify-center flex-col">
                <h1 className="caprismo text-white --font-caprismo text-4xl text-center mb-5">Hello, please type your name</h1>
                <LoginHome />
              </section>
              <Link href="/sign-up" className="z-30 text-[#FFC62F] underline mt-2 text-right">Sign up Here</Link>
          </div>
            <Image src={Star} alt="star" className="absolute top-0 right-0"/>
            <Image src={Star2} alt="star" className="absolute z-10 -bottom-1 left-0"/>
            <div className="wave"></div>
        </main>

        {/* <Image src={Wave} alt="wave" className="-mb-12 relative w-full"/> */}

        <footer className="pt-28 pb-8 bg-white flex items-center justify-center flex-col">
            <Image src={EnneCode} alt="Developed by EnneCode"/>
        </footer>
    </div>
  );
}

