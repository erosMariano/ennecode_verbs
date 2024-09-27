import React from "react";
import Header from "../components/header";
import Progress from "@/app/images/progress.svg";
import Image from "next/image";
import ListVerbs from "../components/listVerbs";
function page() {
  const totalItens = 80;
  const itensConcluidos = 10;
  const progress = `${(itensConcluidos / totalItens) * 100}%`;

  const data = [
    {
      infinitive: "bring",
      past_simple: "brought",
      past_participle: "brought",
      translation: "trazer",
      active: true,
    },
    {
      infinitive: "bring",
      past_simple: "brought",
      past_participle: "brought",
      translation: "trazer",
      active: false,
    },
  ];
  return (
    <main className="">
      <Header />
      <div className="w-[100px] h-[20px] bg-[#333] rounded mx-auto mb-8 -mt-7 overflow-hidden">
        <div
          className={`liner bg-[#FFC62F] h-[20px] relative`}
          style={{ width: progress }}
        >
          {Number(totalItens) !== Number(itensConcluidos) && (
            <Image
              alt="progressBar"
              src={Progress}
              className="absolute right-0"
            />
          )}
        </div>
      </div>
      <h1 className="text-white text-4xl caprismo max-w-60 mx-auto text-center mb-11">
        Track your progress
      </h1>

      <div className="flex flex-col gap-4 px-4">
        {data.map((el) => (
          <ListVerbs data={el} key={el.infinitive} />
        ))}
      </div>
    </main>
  );
}

export default page;
