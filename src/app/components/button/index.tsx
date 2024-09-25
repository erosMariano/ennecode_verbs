"use client"
import Image from "next/image";
import React from "react";
import Arrow from "@/app/images/arrow.svg";
import { useRouter } from 'next/navigation'


type Props = {
  label: string;
  type: "started" | "verifyVerb"
};
function ButtonPrimary({ label, type }: Props) {
  const router = useRouter()
  
  function handleButton(){
    if(type === "started"){
      router.push("/verbs")
    }
  }
  return (
    <button onClick={handleButton} className="bg-[#333333] poppins text-white rounded-full w-full flex justify-between px-8 h-12 items-center">
      {label} <Image src={Arrow} alt="Arrow get Started" />
    </button>
  );
}

export default ButtonPrimary;
