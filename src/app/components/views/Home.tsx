import Image from "next/image";
import React from "react";
import Arrow from "@/app/images/arrow.svg";
export default function LoginHome() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="relative">
        <label
          htmlFor="nickname"
          className="caprismo absolute left-2 -top-[10px] px-2 text-white text-xs bg-[#1E1E1E]"
        >
          Nickname
        </label>
        <input
          type="text"
          id="nickname"
          className="bg-transparent poppins border --font-poppins text-white pl-4 border-[#FFC62F] rounded w-full h-14"
        />
      </div>
      <button className="bg-[#333333] poppins text-white rounded-full w-full flex justify-between px-8 h-12 items-center">
        Get Started <Image src={Arrow} alt="Arrow get Started"/>
      </button>
    </div>
  );
}
