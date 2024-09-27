import Header from "@/app/components/header";
import Expand from "@/app/images/expand.svg";
import Image from "next/image";
import Chat from "@/app/images/chat.svg"

export default function Page({ params }: { params: { slug: string } }) {
  const verb = params.slug;
  return (
    <main>
      <Header />
      <section className="px-4">
        <Image src={Expand} alt="Expand your vocabulary" className="mx-auto mb-5 -mt-9"/>
        <h1 className="text-white text-4xl caprismo max-w-60 mx-auto text-center mb-11">
          Expand your vocabulary
        </h1>

        <div className="flex gap-2 items-start">
          <Image src={Chat} alt="Expand your vocabulary chat"/>

          <div className="px-2 pb-2 flex flex-col gap-4">
            <span className="bg-[#333333] p-2 block caprismo text-white max-w-fit rounded">{verb}</span>

            <div>
              <h3 className="caprismo text-white text-xs">Interrogative</h3>
              <p className="poppins pt-2 text-white text-base">Did you spend your vacation at the beach this year?</p>
            </div>

            <div>
              <h3 className="caprismo text-white text-xs">Affirmative</h3>
              <p className="poppins pt-2 text-white text-base">Last summer, we spent two amazing weeks traveling through Europe.</p>
            </div>


            <div>
              <h3 className="caprismo text-white text-xs">Negative</h3>
              <p className="poppins pt-2 text-white text-base">I didn’t spend much money on groceries this month.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
