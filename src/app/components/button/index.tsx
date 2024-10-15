"use client";
import Image from "next/image";
import React from "react";
import Arrow from "@/app/images/arrow.svg";
import { useRouter } from "next/navigation";
import Spinner from "@/app/images/spiner.svg";
type Props = {
  label: string;
  loading: boolean;
  type: "started" | "verifyVerb" | "submit";
  onClick?: () => void; // Prop opcional para permitir execução de callback no submit
};

function ButtonPrimary({ label, type, onClick, loading }: Props) {
  const router = useRouter();

  async function handleButton() {
    if (type === "submit") {
      if (onClick) onClick();
      return;
    }

    // Outras lógicas para tipos de botão
    if (type === "started") {
      const res = await fetch("/api/login?name=eros");
      const { user } = await res.json();
      if (user) {
        router.push("/verbs");
      }
    }
  }

  return (
    <button
      type={type === "submit" ? "submit" : "button"} // Definindo o tipo de botão
      onClick={handleButton}
      className="bg-[#333333] poppins text-white rounded-full w-full flex justify-between px-8 h-12 items-center"
    >

      {loading ? (
        <div className="flex items-center justify-center w-full">
        <Image src={Spinner} alt="Spinner" className="animate-spin" width={24} height={24}/>
      </div>
      ): (
        <>
          {label} <Image src={Arrow} alt="Arrow get Started" />
        </>
      )}
    </button>
  );
}

export default ButtonPrimary;
