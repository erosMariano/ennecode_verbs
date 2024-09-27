import React from "react";
import CadeadoAberto from "@/app/images/cadeado-open.svg";
import CadeadoFechado from "@/app/images/cadeado-fechado.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: {
    infinitive: string;
    past_simple: string;
    past_participle: string;
    translation: string;
    active: boolean
  };
};
function ListVerbs(data: Props) {
  const { infinitive, past_participle, past_simple, active } = data.data;
  return (
    <Link href={active ? `/list/${infinitive}` : ''} className="py-2 px-4 rounded bg-[#333333] flex justify-between">
      <p className={`text-xl text-white poppins ${!active && 'blur-lg'}`}>
        {infinitive} <span className="text-xs">/ {past_simple} / {past_participle}</span>
      </p>{" "}

      {active ? <Image src={CadeadoAberto} alt="cadeado" /> : <Image src={CadeadoFechado} alt="cadeado" />}
    </Link>
  );
}

export default ListVerbs;
